import { render } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { MOOD_CATEGORIES, EMOTION_RELATIONS } from "./constants.js";
import { normalizeText } from "./utils.js";

// ── Config ────────────────────────────────────────────────────────────────────
const R        = 18;
const STEP     = R * 2 + 8;
const ROW_H    = R * 2 + 22;
const QUAD_HDR = 22;
const PAD      = 10;
const GRAPH_BP_NARROW = 360;
const GRAPH_BP_SMALL  = 420;
const GRAPH_H_NARROW  = 430;
const GRAPH_H_SMALL   = 410;
const GRAPH_H_DEFAULT = 460;
const GRAPH_MIN_H     = 420;
const GRAPH_MAX_H     = 560;
const GRAPH_BASE_NODES = 20;
const GRAPH_BASE_EDGES = 28;
const GRAPH_NODE_BOOST = 3;
const GRAPH_EDGE_BOOST = 1;
const GRAPH_MAX_BOOST  = 80;

const QUAD_MAP = [0, 2, 3, 1];

const RELS = {
    coexiste:  { color: "#6366f1", dash: "none", labelKey: "map.relCoexiste"  },
    escala_a:  { color: "#f97316", dash: "none", labelKey: "map.relEscalaA"   },
    enmascara: { color: "#a855f7", dash: "3,3",  labelKey: "map.relEnmascara" },
    opuesta:   { color: "#14b8a6", dash: "6,3",  labelKey: "map.relOpuesta"   },
};

function makeRng(seed) {
    const buf = new Int32Array(1);
    buf[0] = Math.trunc(seed);
    return function () {
        buf[0] = Math.imul(buf[0], 1664525) + 1013904223;
        return (buf[0] >>> 0) / 4294967296;
    };
}

function applyRepulsion(nodes, k) {
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            let dx = nodes[i].x - nodes[j].x;
            let dy = nodes[i].y - nodes[j].y;
            if (!dx && !dy) { dx = 0.01; }
            const d = Math.hypot(dx, dy);
            const f = k * k / d;
            nodes[i].fx += dx / d * f;  nodes[i].fy += dy / d * f;
            nodes[j].fx -= dx / d * f;  nodes[j].fy -= dy / d * f;
        }
    }
}

function runForce(nodes, edges, W, H) {
    const k = Math.sqrt((W * H) / nodes.length) * 0.95;
    for (let it = 0; it < 500; it++) {
        const temp = 35 * (1 - it / 500);
        for (const n of nodes) { n.fx = 0; n.fy = 0; }
        applyRepulsion(nodes, k);
        for (const e of edges) {
            const a = nodes[e.ai], b = nodes[e.bi];
            const dx = b.x - a.x, dy = b.y - a.y;
            const d  = Math.hypot(dx, dy) || 0.01;
            const f  = d * d / k * 0.3;
            a.fx += dx / d * f;  a.fy += dy / d * f;
            b.fx -= dx / d * f;  b.fy -= dy / d * f;
        }
        for (const n of nodes) {
            const d = Math.hypot(n.fx, n.fy) || 0.01;
            n.x = clamp(n.x + n.fx / d * Math.min(d, temp), R + 28, W - R - 28);
            n.y = clamp(n.y + n.fy / d * Math.min(d, temp), R + 24, H - R - 28);
        }
    }
    resolveCollisions(nodes, W, H);
}

function clamp(v, lo, hi) { return Math.min(Math.max(v, lo), hi); }

function resolveCollisions(nodes, W, H) {
    const minDist = R * 2 + 10;
    for (let pass = 0; pass < 12; pass++) {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const d  = Math.hypot(dx, dy) || 0.01;
                if (d < minDist) {
                    const push = (minDist - d) / 2;
                    const ux = dx / d, uy = dy / d;
                    nodes[i].x = clamp(nodes[i].x + ux * push, R + 28, W - R - 28);
                    nodes[i].y = clamp(nodes[i].y + uy * push, R + 24, H - R - 28);
                    nodes[j].x = clamp(nodes[j].x - ux * push, R + 28, W - R - 28);
                    nodes[j].y = clamp(nodes[j].y - uy * push, R + 24, H - R - 28);
                }
            }
        }
    }
}

function escHtml(value) {
    return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escAttr(value) {
    return escHtml(value).replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function graphHeightFor(width, nodeCount, edgeCount) {
    let base = GRAPH_H_DEFAULT;
    if (width < GRAPH_BP_NARROW)     base = GRAPH_H_NARROW;
    else if (width < GRAPH_BP_SMALL) base = GRAPH_H_SMALL;
    const densityBoost = Math.min(
        GRAPH_MAX_BOOST,
        Math.max(0, nodeCount - GRAPH_BASE_NODES) * GRAPH_NODE_BOOST
        + Math.max(0, edgeCount - GRAPH_BASE_EDGES) * GRAPH_EDGE_BOOST
    );
    return clamp(base + densityBoost, GRAPH_MIN_H, GRAPH_MAX_H);
}

function buildEdges(nameToIdx) {
    return EMOTION_RELATIONS.flatMap((r) => {
        const ai = nameToIdx[r.from];
        const bi = nameToIdx[r.to];
        if (ai === undefined || bi === undefined) {
            const missing = [];
            if (ai === undefined) missing.push(`from="${r.from}"`);
            if (bi === undefined) missing.push(`to="${r.to}"`);
            console.warn("[emotionMap] Dropping relation %s with unknown endpoint(s): %s", String(r.type), missing.join(", "));
            return [];
        }
        return [{ ai, bi, type: r.type }];
    });
}

function buildForceData(emociones, getDisplayName, W, H) {
    const rng = makeRng(0xbeef);
    const nameToIdx = {};
    const nodes = emociones.map((e, idx) => {
        nameToIdx[e.nombre] = idx;
        const ci = MOOD_CATEGORIES.findIndex(c => c.emotions.includes(e.nombre));
        const q  = QUAD_MAP[Math.max(ci, 0)];
        return { nombre: e.nombre, label: getDisplayName(e.nombre), color: e.color,
            x: (q % 2 + 0.2 + rng() * 0.6) * (W / 2),
            y: (Math.floor(q / 2) + 0.2 + rng() * 0.6) * (H / 2), fx: 0, fy: 0 };
    });
    const edges = buildEdges(nameToIdx);
    runForce(nodes, edges, W, H);
    return { nodes, edges, nameToIdx };
}

function buildQuadData(emociones, getDisplayName, W) {
    const QW = Math.floor(W / 2);
    const maxCols = Math.max(2, Math.floor((QW - PAD * 2 + 8) / STEP));
    let maxRowsTop = 0, maxRowsBot = 0;
    MOOD_CATEGORIES.forEach((cat, ci) => {
        const count = cat.emotions.filter(n => emociones.find(e => e.nombre === n)).length;
        const rows  = Math.ceil(count / maxCols);
        if (QUAD_MAP[ci] < 2) maxRowsTop = Math.max(maxRowsTop, rows);
        else                  maxRowsBot = Math.max(maxRowsBot, rows);
    });
    const QH = QUAD_HDR + PAD + Math.max(maxRowsTop, 1) * ROW_H + R + 16;
    const H  = QH * 2;
    const nameToIdx = {};
    const nodes     = [];
    MOOD_CATEGORIES.forEach((cat, ci) => {
        const q  = QUAD_MAP[ci];
        const ox = (q % 2) * QW;
        const oy = Math.floor(q / 2) * QH;
        cat.emotions.forEach((nombre, pos) => {
            const e = emociones.find(em => em.nombre === nombre);
            if (!e) return;
            nameToIdx[nombre] = nodes.length;
            nodes.push({ nombre, label: getDisplayName(nombre), color: e.color,
                x: ox + PAD + R + (pos % maxCols) * STEP,
                y: oy + QUAD_HDR + PAD + R + Math.floor(pos / maxCols) * ROW_H });
        });
    });
    return { nodes, edges: buildEdges(nameToIdx), nameToIdx, H };
}

function buildQuadrantFilter(catIdx, visibleEdges, nodes) {
    if (catIdx === null) return null;
    const cat = MOOD_CATEGORIES[catIdx];
    const nodeNames  = new Set(nodes.map(n => n.nombre));
    const inQuadrant = new Set(cat.emotions.filter(n => nodeNames.has(n)));
    const neighbors  = new Set();
    for (const e of visibleEdges) {
        const aN = nodes[e.ai].nombre, bN = nodes[e.bi].nombre;
        if (inQuadrant.has(aN) && !inQuadrant.has(bN)) neighbors.add(bN);
        if (inQuadrant.has(bN) && !inQuadrant.has(aN)) neighbors.add(aN);
    }
    return { inQuadrant, neighbors };
}

function calcNodeOpacity(n, sel, isSel, isConn, quadrantFilter, normalizedFilter) {
    if (sel) return (isSel || isConn) ? 1 : 0;
    if (quadrantFilter) {
        if (quadrantFilter.inQuadrant.has(n.nombre)) return 1;
        if (quadrantFilter.neighbors.has(n.nombre))  return 0.45;
        return 0;
    }
    if (normalizedFilter) return normalizeText(n.label).includes(normalizedFilter) ? 1 : 0.15;
    return 1;
}

function buildNeighborhoodData(selName, nodes, visibleEdges, W, H) {
    const neighborEdges = visibleEdges.filter(
        e => nodes[e.ai].nombre === selName || nodes[e.bi].nombre === selName
    );
    const memberNames = new Set(neighborEdges.flatMap(e => [nodes[e.ai].nombre, nodes[e.bi].nombre]));
    memberNames.add(selName);
    const rng = makeRng(0xf00d);
    const subNameToIdx = {};
    const subNodes = nodes.filter(n => memberNames.has(n.nombre)).map((n, i) => {
        subNameToIdx[n.nombre] = i;
        return { nombre: n.nombre, label: n.label, color: n.color,
            x: (0.15 + rng() * 0.7) * W, y: (0.15 + rng() * 0.7) * H, fx: 0, fy: 0 };
    });
    const subEdges = neighborEdges.map(e => ({
        ai: subNameToIdx[nodes[e.ai].nombre],
        bi: subNameToIdx[nodes[e.bi].nombre],
        type: e.type,
    })).filter(e => e.ai !== undefined && e.bi !== undefined);
    runForce(subNodes, subEdges, W, H);
    return { nodes: subNodes, edges: subEdges };
}

function buildSvgBody(nodes, edges, W, H, sel, view, { t, activeTypes, activeQuadrant, nameFilter }) {
    const dark      = document.documentElement.classList.contains("dark");
    const labelFill = dark ? "#cbd5e1" : "#1e293b";
    const visibleEdges   = edges.filter(e => activeTypes.has(e.type));
    const quadrantFilter = buildQuadrantFilter(activeQuadrant, visibleEdges, nodes);
    const connectedNames = sel ? new Set(
        visibleEdges.filter(e => nodes[e.ai].nombre === sel || nodes[e.bi].nombre === sel)
            .flatMap(e => [nodes[e.ai].nombre, nodes[e.bi].nombre])
    ) : null;

    let bg = "";
    if (view === "quad") {
        const QW = W / 2, QH = H / 2;
        MOOD_CATEGORIES.forEach((cat, ci) => {
            const q   = QUAD_MAP[ci];
            const ox  = (q % 2) * QW;
            const oy  = Math.floor(q / 2) * QH;
            const bgC = dark ? cat.ink + "28" : cat.color + "55";
            const hdC = dark ? cat.ink + "99" : cat.color + "cc";
            const htC = dark ? "#f1f5f9" : cat.ink;
            bg += `<rect x="${ox}" y="${oy}" width="${QW}" height="${QH}" fill="${bgC}"/>`;
            bg += `<rect x="${ox}" y="${oy}" width="${QW}" height="${QUAD_HDR}" fill="${hdC}"/>`;
            bg += `<text x="${ox + QW / 2}" y="${oy + 15}" text-anchor="middle" font-size="11" font-weight="700" fill="${htC}">${t(cat.labelKey).toUpperCase()}</text>`;
        });
        const divC = dark ? "#334155" : "#94a3b8";
        bg += `<line x1="${W / 2}" y1="0" x2="${W / 2}" y2="${H}" stroke="${divC}" stroke-width="1"/>`;
        bg += `<line x1="0" y1="${H / 2}" x2="${W}" y2="${H / 2}" stroke="${divC}" stroke-width="1"/>`;
    }

    const normalizedFilter = nameFilter ? normalizeText(nameFilter) : "";
    const eStr = visibleEdges.map(e => {
        const a = nodes[e.ai], b = nodes[e.bi];
        let op = 0.4;
        if (sel) {
            op = (sel === a.nombre || sel === b.nombre) ? 0.9 : 0;
        } else if (quadrantFilter) {
            const aIn = quadrantFilter.inQuadrant.has(a.nombre);
            const bIn = quadrantFilter.inQuadrant.has(b.nombre);
            if (!aIn && !bIn) op = 0;
            else if (aIn && bIn) op = 0.75;
            else op = 0.35;
        } else if (normalizedFilter) {
            const aMatch = normalizeText(a.label).includes(normalizedFilter);
            const bMatch = normalizeText(b.label).includes(normalizedFilter);
            op = (aMatch || bMatch) ? 0.3 : 0;
        }
        const rel = RELS[e.type];
        return `<line x1="${Math.trunc(a.x)}" y1="${Math.trunc(a.y)}" x2="${Math.trunc(b.x)}" y2="${Math.trunc(b.y)}" stroke="${rel.color}" stroke-width="2.5" opacity="${op}" stroke-dasharray="${rel.dash}"/>`;
    }).join("");

    const nStr = nodes.map(n => {
        const isSel  = sel === n.nombre;
        const isConn = connectedNames ? connectedNames.has(n.nombre) : true;
        const nodeOp = calcNodeOpacity(n, sel, isSel, isConn, quadrantFilter, normalizedFilter);
        const hide = nodeOp === 0;
        const sc   = isSel ? "#2563eb" : "none";
        const sw   = isSel ? "3" : "0";
        const lbl  = n.label.length > 10 ? n.label.slice(0, 9) + "…" : n.label;
        const cx = Math.trunc(n.x), cy = Math.trunc(n.y);
        return `<g class="map-node" data-nombre="${escAttr(n.nombre)}" tabindex="0" role="button" aria-label="${escAttr(n.label)}" style="cursor:pointer" opacity="${nodeOp}" ${hide ? 'pointer-events="none"' : ''}>
            <title>${escHtml(n.label)}</title>
            <circle cx="${cx}" cy="${cy}" r="${R + 6}" fill="transparent"/>
            <circle cx="${cx}" cy="${cy}" r="${R}" fill="${n.color}" stroke="${sc}" stroke-width="${sw}" pointer-events="none"/>
            <text x="${cx}" y="${Math.trunc(n.y + R + 12)}" text-anchor="middle" font-size="11" font-weight="600" fill="${labelFill}" pointer-events="none">${escHtml(lbl)}</text>
        </g>`;
    }).join("");

    return `${bg}<g>${eStr}</g><g>${nStr}</g>`;
}

function containerW() {
    return document.getElementById("map-content")?.clientWidth || 340;
}

// ── Preact component ──────────────────────────────────────────────────────────

function EmotionMapPanel({ view, selected, nameFilter, activeTypes, activeQuadrant,
    nodes, edges, H, W, t, dark, canvasBg,
    onGraphView, onQuadView, onRelTypeToggle, onQuadrantChange,
    onOpenDetail, onClearSelection, onSearch, svgEventHandler }) {

    const svgRef = useRef(null);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;
        const isNeighborhood = view === "graph" && selected !== null;
        let svgNodes, svgEdges, svgActiveQuadrant;
        if (isNeighborhood) {
            const hood = buildNeighborhoodData(selected, nodes, edges.filter(e => activeTypes.has(e.type)), W, H);
            svgNodes = hood.nodes; svgEdges = hood.edges; svgActiveQuadrant = null;
        } else {
            svgNodes = nodes; svgEdges = edges; svgActiveQuadrant = activeQuadrant;
        }
        svg.innerHTML = buildSvgBody(svgNodes, svgEdges, W, H, selected, view,
            { t, activeTypes, activeQuadrant: svgActiveQuadrant, nameFilter });
        svg.onclick = svgEventHandler.click;
        svg.onkeydown = svgEventHandler.keydown;
    });

    const activeC   = dark ? "bg-slate-100 text-slate-900 border-slate-100" : "bg-slate-800 text-white border-slate-800";
    const inactiveC = dark ? "bg-slate-800 text-slate-400 border-slate-600" : "bg-white text-slate-500 border-slate-200";

    const effectiveQuadrant = (view === "graph" && selected !== null) ? null : activeQuadrant;

    const hasMatch = (() => {
        if (!nameFilter || selected !== null) return true;
        const norm = normalizeText(nameFilter);
        return nodes.some(n => normalizeText(n.label).includes(norm));
    })();

    // Info panel for selected node
    let infoPanel = null;
    if (selected) {
        const myEdges = edges.filter(e => nodes[e.ai]?.nombre === selected || nodes[e.bi]?.nombre === selected);
        const grouped = {};
        for (const e of myEdges) {
            const other = nodes[e.ai].nombre === selected ? nodes[e.bi] : nodes[e.ai];
            grouped[e.type] = grouped[e.type] || [];
            grouped[e.type].push(other.label);
        }
        const borderC = dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100";
        const nameC   = dark ? "text-slate-100" : "text-slate-800";
        infoPanel = (
            <div id="map-info-panel" class={`mt-3 rounded-2xl p-4 border ${borderC} shadow-sm`}>
                <div class="flex items-center justify-between mb-2">
                    <span class={`font-bold ${nameC}`}>{nodes.find(n => n.nombre === selected)?.label ?? selected}</span>
                    <div class="flex items-center gap-1">
                        <button id="map-open-btn" onClick={onOpenDetail}
                            class="text-xs font-bold text-blue-500 hover:text-blue-600 px-2 py-1 rounded-lg transition-colors">{t("openChip")}</button>
                        <button id="map-clear-btn" aria-label={t("map.clearSelection")} onClick={onClearSelection}
                            class="w-6 h-6 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
                            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                {Object.keys(grouped).length > 0 ? (
                    <ul class="space-y-1.5">
                        {Object.entries(grouped).map(([type, names]) => {
                            const rel = RELS[type];
                            return (
                                <li key={type} class="flex items-start gap-2 text-sm leading-snug">
                                    <span class="mt-1 shrink-0 inline-block w-2.5 h-2.5 rounded-full" style={`background:${rel.color}`} />
                                    <span>
                                        <strong class={dark ? "text-slate-300" : "text-slate-700"}>{t(rel.labelKey)}:</strong>{" "}
                                        <span class={dark ? "text-slate-400" : "text-slate-500"}>{names.join(", ")}</span>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p class="text-xs text-slate-400">{t("map.infoNone")}</p>
                )}
            </div>
        );
    }

    return (
        <div>
            <div class="flex gap-2 mb-2">
                <button id="map-graph-btn" onClick={onGraphView}
                    class={`flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "graph" ? activeC : inactiveC}`}>
                    {t("map.viewGraph")}
                </button>
                <button id="map-quad-btn" onClick={onQuadView}
                    class={`flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "quad" ? activeC : inactiveC}`}>
                    {t("map.viewQuad")}
                </button>
            </div>

            <div class="flex flex-wrap gap-x-3 gap-y-1 mb-2" role="list" aria-label={t("map.legendLabel")}>
                {Object.entries(RELS).map(([type, rel]) => {
                    const on       = activeTypes.has(type);
                    const dimLine  = dark ? "#475569" : "#cbd5e1";
                    const lineColor = on ? rel.color : dimLine;
                    const onTextC  = dark ? "text-slate-300" : "text-slate-600";
                    const offTextC = dark ? "text-slate-600" : "text-slate-400";
                    const onBgC    = dark ? "bg-slate-700" : "bg-slate-100";
                    return (
                        <button key={type} type="button" data-rel-type={type} role="listitem" aria-pressed={String(on)}
                            class={`flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded-lg transition-colors ${on ? onTextC : offTextC} ${on ? onBgC : ""}`}
                            onClick={() => onRelTypeToggle(type)}>
                            <svg width="14" height="6" aria-hidden="true">
                                <line x1="0" y1="3" x2="14" y2="3" stroke={lineColor} stroke-width="2" stroke-dasharray={rel.dash}/>
                            </svg>
                            {t(rel.labelKey)}
                        </button>
                    );
                })}
            </div>

            <div class="flex flex-wrap gap-1.5 mb-2">
                <button type="button" data-quad="all" aria-pressed={String(effectiveQuadrant === null)}
                    class={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${effectiveQuadrant === null ? activeC : inactiveC}`}
                    onClick={() => onQuadrantChange(null)}>
                    {t("map.filterAll")}
                </button>
                {MOOD_CATEGORIES.map((cat, i) => {
                    const isActive = effectiveQuadrant === i;
                    return (
                        <button key={cat.key} type="button" data-quad={String(i)} aria-pressed={String(isActive)}
                            class={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${isActive ? "" : inactiveC}`}
                            style={isActive ? `background-color:${cat.color};color:${cat.ink};border-color:${cat.color}` : ""}
                            onClick={() => onQuadrantChange(i)}>
                            {t(cat.labelKey)}
                        </button>
                    );
                })}
            </div>

            <div class="relative mb-2">
                <input id="map-search" type="text" autocomplete="off"
                    placeholder={t("map.searchPlaceholder")}
                    defaultValue={nameFilter}
                    class={`w-full text-[13px] px-3 py-1.5 rounded-xl border transition-colors ${dark ? "bg-slate-800 border-slate-600 text-slate-200 placeholder:text-slate-500" : "bg-white border-slate-200 text-slate-700 placeholder:text-slate-400"}`}
                    onInput={onSearch} />
                <ul id="map-suggestions" role="listbox"
                    class={`absolute z-20 w-full mt-1 rounded-xl border shadow-lg max-h-48 overflow-y-auto hidden ${dark ? "bg-slate-800 border-slate-600" : "bg-white border-slate-200"}`} />
            </div>

            <p id="map-hint" class="text-[11px] text-slate-400 mb-1.5 px-0.5">
                {selected ? t("map.hintSelected") : t("map.hint")}
            </p>

            <div class="rounded-2xl overflow-hidden" style={`background:${canvasBg}`}>
                <svg id="map-svg" ref={svgRef} viewBox={`0 0 ${W} ${H}`}
                    style="width:100%;display:block;touch-action:pan-y"
                    role="img" aria-label={t("nav.mapa")} />
            </div>

            <p id="map-empty" class={`${hasMatch ? "hidden" : ""} text-[13px] text-center text-slate-400 mt-4 py-2`}>
                {t("map.searchEmpty")}
            </p>

            {infoPanel}
        </div>
    );
}

// ── Factory ───────────────────────────────────────────────────────────────────
export function createEmotionMap({ emociones, getDisplayName, t, showDetail }) {
    let view           = "graph";
    let selected       = null;
    let nameFilter     = "";
    let activeTypes    = new Set(Object.keys(RELS));
    let activeQuadrant = null;
    let forceData      = null;
    let quadData       = null;
    let lastW          = 0;

    function ensureData() {
        const W = containerW();
        if (!forceData || Math.abs(W - lastW) > 20) {
            lastW = W;
            const gH = graphHeightFor(W, emociones.length, EMOTION_RELATIONS.length);
            forceData = { ...buildForceData(emociones, getDisplayName, W, gH), H: gH };
            quadData  = null;
        }
        if (!quadData) {
            quadData = buildQuadData(emociones, getDisplayName, containerW());
        }
    }

    function render_() {
        const wrap = document.getElementById("map-content");
        if (!wrap) return;
        ensureData();

        const { nodes, edges, H } = view === "graph" ? forceData : quadData;
        const W    = containerW();
        const dark = document.documentElement.classList.contains("dark");

        const svgEventHandler = {
            click: (ev) => {
                const node = ev.target.closest(".map-node");
                if (!node) { selected = null; render_(); return; }
                const nombre = node.dataset.nombre;
                selected = selected === nombre ? null : nombre;
                render_();
            },
            keydown: (ev) => {
                if (ev.key !== "Enter" && ev.key !== " ") return;
                const node = ev.target.closest(".map-node");
                if (!node) return;
                ev.preventDefault();
                const nombre = node.dataset.nombre;
                selected = selected === nombre ? null : nombre;
                render_();
            },
        };

        render(
            <EmotionMapPanel
                view={view} selected={selected} nameFilter={nameFilter}
                activeTypes={activeTypes} activeQuadrant={activeQuadrant}
                nodes={nodes} edges={edges} H={H} W={W} t={t}
                dark={dark} canvasBg={dark ? "#0f172a" : "#f8fafc"}
                onGraphView={() => { view = "graph"; selected = null; render_(); }}
                onQuadView={() => { view = "quad"; selected = null; render_(); }}
                onRelTypeToggle={(type) => {
                    if (activeTypes.has(type)) activeTypes.delete(type); else activeTypes.add(type);
                    render_();
                }}
                onQuadrantChange={(q) => { activeQuadrant = q; selected = null; render_(); }}
                onOpenDetail={() => {
                    const e = emociones.find(em => em.nombre === selected);
                    if (e) showDetail(e);
                }}
                onClearSelection={() => { selected = null; nameFilter = ""; render_(); }}
                onSearch={(ev) => {
                    nameFilter = ev.target.value;
                    selected = null;
                    render_();
                    // Populate suggestions after render
                    requestAnimationFrame(() => populateSuggestions(nameFilter));
                }}
                svgEventHandler={svgEventHandler}
            />,
            wrap
        );

        if (selected) {
            requestAnimationFrame(() => {
                document.getElementById("map-info-panel")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
        }
    }

    function populateSuggestions(value) {
        const wrap = document.getElementById("map-content");
        const suggestionsList = wrap?.querySelector("#map-suggestions");
        if (!suggestionsList) return;
        const norm = normalizeText(value);
        if (!norm) { suggestionsList.classList.add("hidden"); return; }
        const dark  = document.documentElement.classList.contains("dark");
        const itemC = dark ? "text-slate-200 hover:bg-slate-700 active:bg-slate-600" : "text-slate-700 hover:bg-slate-50 active:bg-slate-100";
        const matches = emociones.filter(e => normalizeText(getDisplayName(e.nombre)).includes(norm)).slice(0, 8);
        if (!matches.length) { suggestionsList.classList.add("hidden"); return; }
        suggestionsList.innerHTML = matches.map(e =>
            `<li role="option" tabindex="-1" data-nombre="${escAttr(e.nombre)}"
                class="px-3 py-2 text-[13px] cursor-pointer transition-colors ${itemC}">
                ${escHtml(getDisplayName(e.nombre))}
            </li>`
        ).join("");
        suggestionsList.classList.remove("hidden");

        suggestionsList.onmousedown = (ev) => ev.preventDefault();
        suggestionsList.onclick = (ev) => {
            const li = ev.target.closest("li[data-nombre]");
            if (!li) return;
            const e = emociones.find(em => em.nombre === li.dataset.nombre);
            if (e) {
                nameFilter = getDisplayName(e.nombre);
                selected   = e.nombre;
                const searchInput = document.getElementById("map-search");
                if (searchInput) searchInput.value = nameFilter;
                suggestionsList.classList.add("hidden");
                render_();
            }
        };
    }

    function renderForTab() { render_(); }

    function onLanguageChanged() {
        nameFilter = "";
        if (forceData) for (const n of forceData.nodes) n.label = getDisplayName(n.nombre);
        if (quadData)  for (const n of quadData.nodes)  n.label = getDisplayName(n.nombre);
        if (document.getElementById("map-content")) render_();
    }

    return { renderForTab, onLanguageChanged };
}
