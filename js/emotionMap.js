import { MOOD_CATEGORIES, EMOTION_RELATIONS } from "./constants.js";

// ── Config ────────────────────────────────────────────────────────────────────
const R        = 18;     // node radius
const STEP     = R * 2 + 8;    // 44 — column spacing (quad view)
const ROW_H    = R * 2 + 22;   // 58 — row height including label gap
const QUAD_HDR = 22;            // quadrant header height
const PAD      = 10;            // padding inside each quadrant

// MOOD_CATEGORIES index → quadrant (0=top-left, 1=top-right, 2=bottom-left, 3=bottom-right)
// agitado(0)→TL  triste(1)→BL  confundido(2)→BR  bien(3)→TR
const QUAD_MAP = [0, 2, 3, 1];

const RELS = {
    coexiste:  { color: "#6366f1", dash: "none", labelKey: "mapRelCoexiste"  },
    escala_a:  { color: "#f97316", dash: "none", labelKey: "mapRelEscalaA"   },
    enmascara: { color: "#a855f7", dash: "3,3",  labelKey: "mapRelEnmascara" },
    opuesta:   { color: "#14b8a6", dash: "6,3",  labelKey: "mapRelOpuesta"   },
};

// ── Seeded RNG — stable initial positions across renders ─────────────────────
function makeRng(seed) {
    let s = seed | 0;
    return function () {
        s = Math.imul(s, 1664525) + 1013904223 | 0;
        return (s >>> 0) / 4294967296;
    };
}

// ── Fruchterman–Reingold force layout (runs once, ~10 ms for 28 nodes) ───────
function runForce(nodes, edges, W, H) {
    const k = Math.sqrt((W * H) / nodes.length) * 0.95;
    for (let it = 0; it < 500; it++) {
        const temp = 35 * (1 - it / 500);
        for (const n of nodes) { n.fx = 0; n.fy = 0; }

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
}

function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }

// ── Edge builder (shared by both views) ──────────────────────────────────────
function buildEdges(nameToIdx) {
    return EMOTION_RELATIONS
        .map(r => ({ ai: nameToIdx[r.from], bi: nameToIdx[r.to], type: r.type }))
        .filter(e => e.ai !== undefined && e.bi !== undefined);
}

// ── Force-graph node positions ────────────────────────────────────────────────
function buildForceData(emociones, getDisplayName, W, H) {
    const rng = makeRng(0xbeef);
    const nameToIdx = {};
    const nodes = emociones.map((e, idx) => {
        nameToIdx[e.nombre] = idx;
        const ci = MOOD_CATEGORIES.findIndex(c => c.emotions.includes(e.nombre));
        const q  = QUAD_MAP[ci >= 0 ? ci : 0];
        return {
            nombre: e.nombre,
            label:  getDisplayName(e.nombre),
            color:  e.color,
            x: (q % 2 + 0.2 + rng() * 0.6) * (W / 2),
            y: (Math.floor(q / 2) + 0.2 + rng() * 0.6) * (H / 2),
            fx: 0, fy: 0,
        };
    });
    const edges = buildEdges(nameToIdx);
    runForce(nodes, edges, W, H);
    return { nodes, edges, nameToIdx };
}

// ── Quadrant node positions (fixed grid) ─────────────────────────────────────
function buildQuadData(emociones, getDisplayName, W) {
    const QW      = Math.floor(W / 2);
    const maxCols = Math.max(2, Math.floor((QW - PAD * 2 + 8) / STEP));

    // Compute per-side max rows to set uniform QH
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
            nodes.push({
                nombre,
                label: getDisplayName(nombre),
                color: e.color,
                x: ox + PAD + R + (pos % maxCols) * STEP,
                y: oy + QUAD_HDR + PAD + R + Math.floor(pos / maxCols) * ROW_H,
            });
        });
    });
    return { nodes, edges: buildEdges(nameToIdx), nameToIdx, H };
}

// ── SVG body (edges + quadrant background + nodes) ───────────────────────────
function svgBody(nodes, edges, W, H, sel, view, t) {
    const dark      = document.documentElement.classList.contains("dark");
    const labelFill = dark ? "#cbd5e1" : "#1e293b";

    // Quadrant backgrounds + headers + dividers
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

    // Edges
    const eStr = edges.map(e => {
        const a   = nodes[e.ai], b = nodes[e.bi];
        const act = !sel || sel === a.nombre || sel === b.nombre;
        const op  = sel ? (act ? 0.9 : 0.04) : 0.4;
        const rel = RELS[e.type];
        return `<line x1="${a.x | 0}" y1="${a.y | 0}" x2="${b.x | 0}" y2="${b.y | 0}" stroke="${rel.color}" stroke-width="2.5" opacity="${op}" stroke-dasharray="${rel.dash}"/>`;
    }).join("");

    // Nodes
    const nStr = nodes.map(n => {
        const isSel = sel === n.nombre;
        const dim   = sel && !isSel;
        const sc    = isSel ? "#2563eb" : "none";
        const sw    = isSel ? "3" : "0";
        const lbl   = n.label.length > 8 ? n.label.slice(0, 7) + "…" : n.label;
        return `<g class="map-node" data-nombre="${n.nombre}" tabindex="0" role="button" aria-label="${n.label}" style="cursor:pointer" opacity="${dim ? 0.18 : 1}">
            <circle cx="${n.x | 0}" cy="${n.y | 0}" r="${R}" fill="${n.color}" stroke="${sc}" stroke-width="${sw}"/>
            <text x="${n.x | 0}" y="${(n.y + R + 11) | 0}" text-anchor="middle" font-size="10" font-weight="600" fill="${labelFill}" pointer-events="none">${lbl}</text>
        </g>`;
    }).join("");

    return `${bg}<g>${eStr}</g><g>${nStr}</g>`;
}

// ── Factory ───────────────────────────────────────────────────────────────────
export function createEmotionMap({ emociones, getDisplayName, t, showDetail }) {
    let view     = "graph";
    let selected = null;
    let forceData = null;
    let quadData  = null;
    let lastW     = 0;

    function containerW() {
        return document.getElementById("map-content")?.clientWidth || 340;
    }

    function ensureData() {
        const W = containerW();
        if (!forceData || Math.abs(W - lastW) > 20) {
            lastW     = W;
            forceData = buildForceData(emociones, getDisplayName, W, 450);
            quadData  = null;
        }
        if (!quadData) {
            quadData = buildQuadData(emociones, getDisplayName, W);
        }
    }

    function render() {
        const wrap = document.getElementById("map-content");
        if (!wrap) return;
        ensureData();

        const { nodes, edges, H } = view === "graph"
            ? { ...forceData, H: 464 }
            : quadData;
        const W    = containerW();
        const dark = document.documentElement.classList.contains("dark");

        // Info panel for selected node
        let infoHtml = "";
        if (selected) {
            const myEdges = edges.filter(
                e => nodes[e.ai]?.nombre === selected || nodes[e.bi]?.nombre === selected
            );
            const grouped = {};
            for (const e of myEdges) {
                const other = nodes[e.ai].nombre === selected ? nodes[e.bi] : nodes[e.ai];
                (grouped[e.type] = grouped[e.type] || []).push(other.label);
            }
            const rows = Object.entries(grouped).map(([type, names]) => {
                const rel = RELS[type];
                return `<li class="flex items-start gap-2 text-sm leading-snug">
                    <span class="mt-1 shrink-0 inline-block w-2.5 h-2.5 rounded-full" style="background:${rel.color}"></span>
                    <span><strong class="${dark ? "text-slate-300" : "text-slate-700"}">${t(rel.labelKey)}:</strong> <span class="${dark ? "text-slate-400" : "text-slate-500"}">${names.join(", ")}</span></span>
                </li>`;
            }).join("");
            const dispName = getDisplayName(selected);
            infoHtml = `<div class="mt-3 rounded-2xl p-4 border ${dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100"} shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="font-bold ${dark ? "text-slate-100" : "text-slate-800"}">${dispName}</span>
                    <button id="map-open-btn" class="text-xs font-bold text-blue-500 hover:text-blue-600 px-2 py-1 rounded-lg transition-colors">${t("openChip")}</button>
                </div>
                ${rows ? `<ul class="space-y-1.5">${rows}</ul>` : `<p class="text-xs text-slate-400">${t("mapInfoNone")}</p>`}
            </div>`;
        }

        const activeC   = dark ? "bg-slate-100 text-slate-900 border-slate-100" : "bg-slate-800 text-white border-slate-800";
        const inactiveC = dark ? "bg-slate-800 text-slate-400 border-slate-600" : "bg-white text-slate-500 border-slate-200";
        const canvasBg  = dark ? "#0f172a" : "#f8fafc";

        const legendItems = Object.entries(RELS).map(([, rel]) =>
            `<span class="flex items-center gap-1 text-[11px] ${dark ? "text-slate-400" : "text-slate-500"}">
                <svg width="14" height="6" aria-hidden="true"><line x1="0" y1="3" x2="14" y2="3" stroke="${rel.color}" stroke-width="2" stroke-dasharray="${rel.dash}"/></svg>
                ${t(rel.labelKey)}
            </span>`
        ).join("");

        wrap.innerHTML = `
            <div class="flex gap-2 mb-2">
                <button id="map-graph-btn" class="flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "graph" ? activeC : inactiveC}">${t("mapViewGraph")}</button>
                <button id="map-quad-btn"  class="flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "quad"  ? activeC : inactiveC}">${t("mapViewQuad")}</button>
            </div>
            <div class="flex flex-wrap gap-x-3 gap-y-1 mb-2" role="list" aria-label="Leyenda">
                ${legendItems}
            </div>
            <div class="rounded-2xl overflow-hidden" style="background:${canvasBg}">
                <svg id="map-svg" viewBox="0 0 ${W} ${H}" style="width:100%;display:block;touch-action:none" role="img" aria-label="${t("navMapa")}">
                    ${svgBody(nodes, edges, W, H, selected, view, t)}
                </svg>
            </div>
            ${infoHtml}`;

        bindEvents(wrap);
    }

    function bindEvents(wrap) {
        wrap.querySelector("#map-graph-btn")?.addEventListener("click", () => {
            view = "graph"; selected = null; render();
        });
        wrap.querySelector("#map-quad-btn")?.addEventListener("click", () => {
            view = "quad"; selected = null; render();
        });
        wrap.querySelector("#map-open-btn")?.addEventListener("click", () => {
            const e = emociones.find(em => em.nombre === selected);
            if (e) showDetail(e);
        });

        const svg = wrap.querySelector("#map-svg");
        if (!svg) return;

        svg.addEventListener("click", ev => {
            const node = ev.target.closest(".map-node");
            if (!node) { selected = null; render(); return; }
            const nombre = node.dataset.nombre;
            selected = selected === nombre ? null : nombre;
            render();
        });

        svg.addEventListener("keydown", ev => {
            if (ev.key !== "Enter" && ev.key !== " ") return;
            const node = ev.target.closest(".map-node");
            if (!node) return;
            ev.preventDefault();
            const nombre = node.dataset.nombre;
            selected = selected === nombre ? null : nombre;
            render();
        });
    }

    function renderForTab() { render(); }

    function onLanguageChanged() {
        if (forceData) for (const n of forceData.nodes) n.label = getDisplayName(n.nombre);
        if (quadData)  for (const n of quadData.nodes)  n.label = getDisplayName(n.nombre);
        if (document.getElementById("map-content")) render();
    }

    return { renderForTab, onLanguageChanged };
}
