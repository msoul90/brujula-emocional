// @ts-check
import { MOOD_CATEGORIES, EMOTION_RELATIONS } from "./constants.js";
import { getReadableTextColor, normalizeText } from "./utils.js";

/** @typedef {{ nombre: string, label: string, color: string, x: number, y: number, fx?: number, fy?: number }} ForceNode */
/** @typedef {import('./data/emotions.js').EmotionRelation['type']} RelationType */
/** @typedef {{ ai: number, bi: number, type: RelationType }} ForceEdge */
/** @typedef {{ color: string, dash: string, labelKey: string }} RelationStyle */
/** @typedef {{ inQuadrant: Set<string>, neighbors: Set<string> }} QuadrantFilter */
/** @typedef {{ nodes: ForceNode[], edges: ForceEdge[], nameToIdx: Record<string, number>, H?: number }} GraphData */
/** @typedef {ForceNode & { catIndex: number, startAngle: number, endAngle: number }} WheelNode */
/** @typedef {{ key: string, labelKey: string, color: string, ink: string, startAngle: number, endAngle: number, midAngle: number }} WheelCategory */
/** @typedef {{ nodes: WheelNode[], edges: ForceEdge[], nameToIdx: Record<string, number>, categories: WheelCategory[], size: number, cx: number, cy: number, hubRadius: number, emotionRingInner: number, emotionRingOuter: number, catRingInner: number, catRingOuter: number }} WheelData */
/** @typedef {'graph'|'quad'|'wheel'} MapView */
/** @typedef {{ t: import('./types.js').TFn, activeTypes: Set<RelationType>, activeQuadrant: number | null, nameFilter: string }} SvgBuildOptions */

const R = 18;
const STEP = R * 2 + 8;
const ROW_H = R * 2 + 22;
const QUAD_HDR = 22;
const PAD = 10;
const GRAPH_BP_NARROW = 360;
const GRAPH_BP_SMALL = 420;
const GRAPH_H_NARROW = 430;
const GRAPH_H_SMALL = 410;
const GRAPH_H_DEFAULT = 460;
const GRAPH_MIN_H = 420;
const GRAPH_MAX_H = 560;
const GRAPH_BASE_NODES = 20;
const GRAPH_BASE_EDGES = 28;
const GRAPH_NODE_BOOST = 3;
const GRAPH_EDGE_BOOST = 1;
const GRAPH_MAX_BOOST = 80;

const QUAD_MAP = [0, 2, 3, 1];

const WHEEL_MIN_SIZE = 260;
const WHEEL_MAX_SIZE = 460;
const WHEEL_PAD = 6;
const WHEEL_CAT_RING_RATIO = 0.11;
const WHEEL_HUB_RATIO = 0.14;
const WHEEL_GAP_RAD = (1.4 * Math.PI) / 180;
const WHEEL_LABEL_MIN_FONT = 6.5;
const WHEEL_LABEL_MAX_FONT = 12;

/** @type {Record<RelationType, RelationStyle>} */
export const RELS = {
    coexiste: { color: "#6366f1", dash: "none", labelKey: "map.relCoexiste" },
    escala_a: { color: "#f97316", dash: "none", labelKey: "map.relEscalaA" },
    enmascara: { color: "#a855f7", dash: "3,3", labelKey: "map.relEnmascara" },
    opuesta: { color: "#14b8a6", dash: "6,3", labelKey: "map.relOpuesta" },
};

/** @param {number} seed @returns {() => number} */
function makeRng(seed) {
    const buf = new Int32Array(1);
    buf[0] = Math.trunc(seed);
    return function () {
        buf[0] = Math.imul(buf[0], 1664525) + 1013904223;
        return (buf[0] >>> 0) / 4294967296;
    };
}

/** @param {ForceNode[]} nodes @param {number} k */
function applyRepulsion(nodes, k) {
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            let dx = nodes[i].x - nodes[j].x;
            let dy = nodes[i].y - nodes[j].y;
            if (!dx && !dy) dx = 0.01;
            const d = Math.hypot(dx, dy);
            const f = k * k / d;
            nodes[i].fx += (dx / d) * f;
            nodes[i].fy += (dy / d) * f;
            nodes[j].fx -= (dx / d) * f;
            nodes[j].fy -= (dy / d) * f;
        }
    }
}

/** @param {ForceNode[]} nodes @param {ForceEdge[]} edges @param {number} W @param {number} H */
function runForce(nodes, edges, W, H) {
    const k = Math.sqrt((W * H) / nodes.length) * 0.95;
    for (let it = 0; it < 500; it++) {
        const temp = 35 * (1 - it / 500);
        for (const n of nodes) {
            n.fx = 0;
            n.fy = 0;
        }
        applyRepulsion(nodes, k);
        for (const e of edges) {
            const a = nodes[e.ai];
            const b = nodes[e.bi];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const d = Math.hypot(dx, dy) || 0.01;
            const f = ((d * d) / k) * 0.3;
            a.fx += (dx / d) * f;
            a.fy += (dy / d) * f;
            b.fx -= (dx / d) * f;
            b.fy -= (dy / d) * f;
        }
        for (const n of nodes) {
            const d = Math.hypot(n.fx, n.fy) || 0.01;
            n.x = clamp(n.x + (n.fx / d) * Math.min(d, temp), R + 28, W - R - 28);
            n.y = clamp(n.y + (n.fy / d) * Math.min(d, temp), R + 24, H - R - 28);
        }
    }
    resolveCollisions(nodes, W, H);
}

/** @param {number} v @param {number} lo @param {number} hi @returns {number} */
function clamp(v, lo, hi) {
    return Math.min(Math.max(v, lo), hi);
}

/** @param {ForceNode[]} nodes @param {number} W @param {number} H */
function resolveCollisions(nodes, W, H) {
    const minDist = R * 2 + 10;
    for (let pass = 0; pass < 12; pass++) {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const d = Math.hypot(dx, dy) || 0.01;
                if (d < minDist) {
                    const push = (minDist - d) / 2;
                    const ux = dx / d;
                    const uy = dy / d;
                    nodes[i].x = clamp(nodes[i].x + ux * push, R + 28, W - R - 28);
                    nodes[i].y = clamp(nodes[i].y + uy * push, R + 24, H - R - 28);
                    nodes[j].x = clamp(nodes[j].x - ux * push, R + 28, W - R - 28);
                    nodes[j].y = clamp(nodes[j].y - uy * push, R + 24, H - R - 28);
                }
            }
        }
    }
}

/** @param {unknown} value @returns {string} */
export function escHtml(value) {
    let safe;
    if (value === null || value === undefined) {
        safe = "";
    } else if (typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") {
        safe = String(value);
    } else {
        try {
            safe = JSON.stringify(value);
        } catch {
            safe = Object.prototype.toString.call(value);
        }
    }
    return safe.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

/** @param {unknown} value @returns {string} */
export function escAttr(value) {
    return escHtml(value).replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

/** @param {number} width @param {number} nodeCount @param {number} edgeCount @returns {number} */
export function graphHeightFor(width, nodeCount, edgeCount) {
    let base = GRAPH_H_DEFAULT;
    if (width < GRAPH_BP_NARROW) base = GRAPH_H_NARROW;
    else if (width < GRAPH_BP_SMALL) base = GRAPH_H_SMALL;
    const densityBoost = Math.min(
        GRAPH_MAX_BOOST,
        Math.max(0, nodeCount - GRAPH_BASE_NODES) * GRAPH_NODE_BOOST +
            Math.max(0, edgeCount - GRAPH_BASE_EDGES) * GRAPH_EDGE_BOOST
    );
    return clamp(base + densityBoost, GRAPH_MIN_H, GRAPH_MAX_H);
}

/** @param {Record<string, number>} nameToIdx @returns {ForceEdge[]} */
export function buildEdges(nameToIdx) {
    return EMOTION_RELATIONS.flatMap((r) => {
        const ai = nameToIdx[r.from];
        const bi = nameToIdx[r.to];
        if (ai === undefined || bi === undefined) {
            return [];
        }
        return [{ ai, bi, type: r.type }];
    });
}

/**
 * @param {import('./data/emotions.js').Emotion[]} emociones
 * @param {import('./types.js').GetDisplayNameFn} getDisplayName
 * @param {number} W @param {number} H
 * @returns {GraphData}
 */
export function buildForceData(emociones, getDisplayName, W, H) {
    const rng = makeRng(0xbeef);
    /** @type {Record<string, number>} */
    const nameToIdx = {};
    const nodes = emociones.map((e, idx) => {
        nameToIdx[e.nombre] = idx;
        const ci = MOOD_CATEGORIES.findIndex((c) => c.emotions.includes(e.nombre));
        const q = QUAD_MAP[Math.max(ci, 0)];
        return {
            nombre: e.nombre,
            label: getDisplayName(e.nombre),
            color: e.color,
            x: (q % 2 + 0.2 + rng() * 0.6) * (W / 2),
            y: (Math.floor(q / 2) + 0.2 + rng() * 0.6) * (H / 2),
            fx: 0,
            fy: 0,
        };
    });
    const edges = buildEdges(nameToIdx);
    runForce(nodes, edges, W, H);
    return { nodes, edges, nameToIdx };
}

/**
 * @param {import('./data/emotions.js').Emotion[]} emociones
 * @param {import('./types.js').GetDisplayNameFn} getDisplayName
 * @param {number} W
 * @returns {GraphData & { H: number }}
 */
export function buildQuadData(emociones, getDisplayName, W) {
    const QW = Math.floor(W / 2);
    const maxCols = Math.max(2, Math.floor((QW - PAD * 2 + 8) / STEP));
    let maxRowsTop = 0;
    let maxRowsBot = 0;
    MOOD_CATEGORIES.forEach((cat, ci) => {
        const count = cat.emotions.filter((n) => emociones.find((e) => e.nombre === n)).length;
        const rows = Math.ceil(count / maxCols);
        if (QUAD_MAP[ci] < 2) maxRowsTop = Math.max(maxRowsTop, rows);
        else maxRowsBot = Math.max(maxRowsBot, rows);
    });
    const QH = QUAD_HDR + PAD + Math.max(maxRowsTop, 1) * ROW_H + R + 16;
    const H = QH * 2;
    /** @type {Record<string, number>} */
    const nameToIdx = {};
    /** @type {ForceNode[]} */
    const nodes = [];
    MOOD_CATEGORIES.forEach((cat, ci) => {
        const q = QUAD_MAP[ci];
        const ox = (q % 2) * QW;
        const oy = Math.floor(q / 2) * QH;
        cat.emotions.forEach((nombre, pos) => {
            const e = emociones.find((em) => em.nombre === nombre);
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

/** @param {number} width @returns {number} */
export function wheelSizeFor(width) {
    return clamp(width, WHEEL_MIN_SIZE, WHEEL_MAX_SIZE);
}

/**
 * Builds the geometry for a compass-style wheel: one full turn split into
 * one arc per mood category, each subdivided into one wedge per emotion.
 * @param {import('./data/emotions.js').Emotion[]} emociones
 * @param {import('./types.js').GetDisplayNameFn} getDisplayName
 * @param {number} size
 * @returns {WheelData}
 */
export function buildWheelData(emociones, getDisplayName, size) {
    const cx = size / 2;
    const cy = size / 2;
    const catRingOuter = size / 2 - WHEEL_PAD;
    const catRingInner = catRingOuter - size * WHEEL_CAT_RING_RATIO;
    const emotionRingOuter = catRingInner - 4;
    const hubRadius = size * WHEEL_HUB_RATIO;
    const emotionRingInner = hubRadius + 4;
    const midR = (emotionRingInner + emotionRingOuter) / 2;

    const catAngle = (2 * Math.PI) / MOOD_CATEGORIES.length;
    let angleCursor = -Math.PI / 2;
    /** @type {Record<string, number>} */
    const nameToIdx = {};
    /** @type {WheelNode[]} */
    const nodes = [];
    /** @type {WheelCategory[]} */
    const categories = [];

    MOOD_CATEGORIES.forEach((cat, ci) => {
        const catStart = angleCursor;
        const catEnd = catStart + catAngle;
        const catEmotions = cat.emotions
            .map((nombre) => emociones.find((e) => e.nombre === nombre))
            .filter((e) => Boolean(e));
        const segAngle = catAngle / Math.max(catEmotions.length, 1);
        catEmotions.forEach((e, i) => {
            const start = catStart + i * segAngle;
            const end = start + segAngle - WHEEL_GAP_RAD;
            const mid = (start + end) / 2;
            nameToIdx[e.nombre] = nodes.length;
            nodes.push({
                nombre: e.nombre,
                label: getDisplayName(e.nombre),
                color: e.color,
                catIndex: ci,
                startAngle: start,
                endAngle: end,
                x: cx + midR * Math.cos(mid),
                y: cy + midR * Math.sin(mid),
            });
        });
        categories.push({
            key: cat.key,
            labelKey: cat.labelKey,
            color: cat.color,
            ink: cat.ink,
            startAngle: catStart,
            endAngle: catEnd,
            midAngle: (catStart + catEnd) / 2,
        });
        angleCursor = catEnd;
    });

    return {
        nodes,
        edges: buildEdges(nameToIdx),
        nameToIdx,
        categories,
        size,
        cx,
        cy,
        hubRadius,
        emotionRingInner,
        emotionRingOuter,
        catRingInner,
        catRingOuter,
    };
}

/** @param {number | null} catIdx @param {ForceEdge[]} visibleEdges @param {ForceNode[]} nodes @returns {QuadrantFilter | null} */
function buildQuadrantFilter(catIdx, visibleEdges, nodes) {
    if (catIdx === null) return null;
    const cat = MOOD_CATEGORIES[catIdx];
    const nodeNames = new Set(nodes.map((n) => n.nombre));
    const inQuadrant = new Set(cat.emotions.filter((n) => nodeNames.has(n)));
    const neighbors = new Set();
    for (const e of visibleEdges) {
        const aN = nodes[e.ai].nombre;
        const bN = nodes[e.bi].nombre;
        if (inQuadrant.has(aN) && !inQuadrant.has(bN)) neighbors.add(bN);
        if (inQuadrant.has(bN) && !inQuadrant.has(aN)) neighbors.add(aN);
    }
    return { inQuadrant, neighbors };
}

/** @param {ForceNode} n @param {string | null} sel @param {boolean} isSel @param {boolean} isConn @param {QuadrantFilter | null} quadrantFilter @param {string} normalizedFilter @returns {number} */
function calcNodeOpacity(n, sel, isSel, isConn, quadrantFilter, normalizedFilter) {
    if (sel) return isSel || isConn ? 1 : 0;
    if (quadrantFilter) {
        if (quadrantFilter.inQuadrant.has(n.nombre)) return 1;
        if (quadrantFilter.neighbors.has(n.nombre)) return 0.45;
        return 0;
    }
    if (normalizedFilter) return normalizeText(n.label).includes(normalizedFilter) ? 1 : 0.15;
    return 1;
}

/**
 * @param {string} selName
 * @param {ForceNode[]} nodes
 * @param {ForceEdge[]} visibleEdges
 * @param {number} W
 * @param {number} H
 * @returns {{ nodes: ForceNode[], edges: ForceEdge[] }}
 */
export function buildNeighborhoodData(selName, nodes, visibleEdges, W, H) {
    const neighborEdges = visibleEdges.filter(
        (e) => nodes[e.ai].nombre === selName || nodes[e.bi].nombre === selName
    );
    const memberNames = new Set(neighborEdges.flatMap((e) => [nodes[e.ai].nombre, nodes[e.bi].nombre]));
    memberNames.add(selName);
    const rng = makeRng(0xf00d);
    /** @type {Record<string, number>} */
    const subNameToIdx = {};
    const subNodes = nodes
        .filter((n) => memberNames.has(n.nombre))
        .map((n, i) => {
            subNameToIdx[n.nombre] = i;
            return {
                nombre: n.nombre,
                label: n.label,
                color: n.color,
                x: (0.15 + rng() * 0.7) * W,
                y: (0.15 + rng() * 0.7) * H,
                fx: 0,
                fy: 0,
            };
        });
    const subEdges = neighborEdges
        .map((e) => ({
            ai: subNameToIdx[nodes[e.ai].nombre],
            bi: subNameToIdx[nodes[e.bi].nombre],
            type: e.type,
        }))
        .filter((e) => e.ai !== undefined && e.bi !== undefined);
    runForce(subNodes, subEdges, W, H);
    return { nodes: subNodes, edges: subEdges };
}

/**
 * @param {ForceNode[]} nodes
 * @param {ForceEdge[]} edges
 * @param {number} W
 * @param {number} H
 * @param {string | null} sel
 * @param {MapView} view
 * @param {SvgBuildOptions} options
 * @returns {string}
 */
export function buildSvgBody(nodes, edges, W, H, sel, view, { t, activeTypes, activeQuadrant, nameFilter }) {
    const dark = document.documentElement.classList.contains("dark");
    const labelFill = dark ? "#cbd5e1" : "#1e293b";
    const visibleEdges = edges.filter((e) => activeTypes.has(e.type));
    const quadrantFilter = buildQuadrantFilter(activeQuadrant, visibleEdges, nodes);
    const connectedNames = sel
        ? new Set(
              visibleEdges
                  .filter((e) => nodes[e.ai].nombre === sel || nodes[e.bi].nombre === sel)
                  .flatMap((e) => [nodes[e.ai].nombre, nodes[e.bi].nombre])
          )
        : null;

    let bg = "";
    if (view === "quad") {
        const QW = W / 2;
        const QH = H / 2;
        MOOD_CATEGORIES.forEach((cat, ci) => {
            const q = QUAD_MAP[ci];
            const ox = (q % 2) * QW;
            const oy = Math.floor(q / 2) * QH;
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
    const eStr = visibleEdges
        .map((e) => {
            const a = nodes[e.ai];
            const b = nodes[e.bi];
            let op = 0.4;
            if (sel) {
                op = sel === a.nombre || sel === b.nombre ? 0.9 : 0;
            } else if (quadrantFilter) {
                const aIn = quadrantFilter.inQuadrant.has(a.nombre);
                const bIn = quadrantFilter.inQuadrant.has(b.nombre);
                if (!aIn && !bIn) op = 0;
                else if (aIn && bIn) op = 0.75;
                else op = 0.35;
            } else if (normalizedFilter) {
                const aMatch = normalizeText(a.label).includes(normalizedFilter);
                const bMatch = normalizeText(b.label).includes(normalizedFilter);
                op = aMatch || bMatch ? 0.3 : 0;
            }
            const rel = RELS[e.type];
            return `<line x1="${Math.trunc(a.x)}" y1="${Math.trunc(a.y)}" x2="${Math.trunc(b.x)}" y2="${Math.trunc(b.y)}" stroke="${rel.color}" stroke-width="2.5" opacity="${op}" stroke-dasharray="${rel.dash}"/>`;
        })
        .join("");

    const nStr = nodes
        .map((n) => {
            const isSel = sel === n.nombre;
            const isConn = connectedNames ? connectedNames.has(n.nombre) : true;
            const nodeOp = calcNodeOpacity(n, sel, isSel, isConn, quadrantFilter, normalizedFilter);
            const hide = nodeOp === 0;
            const sc = isSel ? "#2563eb" : "none";
            const sw = isSel ? "3" : "0";
            const lbl = n.label.length > 10 ? n.label.slice(0, 9) + "…" : n.label;
            const cx = Math.trunc(n.x);
            const cy = Math.trunc(n.y);
            return `<g class="map-node" data-nombre="${escAttr(n.nombre)}" tabindex="0" role="button" aria-label="${escAttr(n.label)}" style="cursor:pointer" opacity="${nodeOp}" ${hide ? 'pointer-events="none"' : ""}>
            <title>${escHtml(n.label)}</title>
            <circle cx="${cx}" cy="${cy}" r="${R + 6}" fill="transparent"/>
            <circle cx="${cx}" cy="${cy}" r="${R}" fill="${n.color}" stroke="${sc}" stroke-width="${sw}" pointer-events="none"/>
            <text x="${cx}" y="${Math.trunc(n.y + R + 12)}" text-anchor="middle" font-size="11" font-weight="600" fill="${labelFill}" pointer-events="none">${escHtml(lbl)}</text>
        </g>`;
        })
        .join("");

    return `${bg}<g>${eStr}</g><g>${nStr}</g>`;
}

/** @param {number} cx @param {number} cy @param {number} r @param {number} angle @returns {[number, number]} */
function polarPoint(cx, cy, r, angle) {
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
}

/** @param {number} cx @param {number} cy @param {number} rInner @param {number} rOuter @param {number} startAngle @param {number} endAngle @returns {string} */
function donutSegmentPath(cx, cy, rInner, rOuter, startAngle, endAngle) {
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    const [x1, y1] = polarPoint(cx, cy, rOuter, startAngle);
    const [x2, y2] = polarPoint(cx, cy, rOuter, endAngle);
    const [x3, y3] = polarPoint(cx, cy, rInner, endAngle);
    const [x4, y4] = polarPoint(cx, cy, rInner, startAngle);
    return `M${x1.toFixed(2)},${y1.toFixed(2)} A${rOuter.toFixed(2)},${rOuter.toFixed(2)} 0 ${largeArc} 1 ${x2.toFixed(2)},${y2.toFixed(2)} L${x3.toFixed(2)},${y3.toFixed(2)} A${rInner.toFixed(2)},${rInner.toFixed(2)} 0 ${largeArc} 0 ${x4.toFixed(2)},${y4.toFixed(2)} Z`;
}

/**
 * Radial label: reads outward from the hub. Flips 180° in the left half so
 * it never renders upside down.
 * @param {number} cx @param {number} cy @param {number} midAngle @param {number} rInner @param {number} rOuter
 * @param {string} text @param {number} fontSize @param {string} fill @returns {string}
 */
function radialLabel(cx, cy, midAngle, rInner, rOuter, text, fontSize, fill) {
    const deg = (midAngle * 180) / Math.PI;
    const flip = Math.cos(midAngle) < 0;
    const rotate = flip ? deg + 180 : deg;
    const r = flip ? rOuter - 4 : rInner + 6;
    const anchor = flip ? "end" : "start";
    const [x, y] = polarPoint(cx, cy, r, midAngle);
    return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" transform="rotate(${rotate.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})" text-anchor="${anchor}" dominant-baseline="middle" font-size="${fontSize}" font-weight="700" fill="${fill}" pointer-events="none">${escHtml(text)}</text>`;
}

/**
 * Picks the largest font size (never above the angular cap, so letters don't
 * bleed into neighboring wedges) that still fits the full label within the
 * available radial thickness; only truncates once the floor size still doesn't fit.
 * @param {string} text @param {number} ringThickness @param {number} angularCap @returns {{ fontSize: number, label: string }}
 */
export function fitWedgeLabel(text, ringThickness, angularCap) {
    const maxFont = clamp(angularCap, WHEEL_LABEL_MIN_FONT, WHEEL_LABEL_MAX_FONT);
    for (let fontSize = maxFont; fontSize >= WHEEL_LABEL_MIN_FONT; fontSize -= 0.5) {
        const maxChars = Math.floor((ringThickness - 10) / (fontSize * 0.58));
        if (text.length <= maxChars) return { fontSize, label: text };
    }
    const maxChars = Math.max(2, Math.floor((ringThickness - 10) / (WHEEL_LABEL_MIN_FONT * 0.58)));
    const label = text.length > maxChars ? text.slice(0, Math.max(1, maxChars - 1)) + "…" : text;
    return { fontSize: WHEEL_LABEL_MIN_FONT, label };
}

/** @param {number} cx @param {number} cy @param {number} r @param {boolean} dark @returns {string} */
function compassGlyph(cx, cy, r, dark) {
    const tickColor = dark ? "#475569" : "#cbd5e1";
    const inner = r * 0.4;
    let s = `<circle cx="${cx}" cy="${cy}" r="${inner.toFixed(1)}" fill="none" stroke="${tickColor}" stroke-width="1.5"/>`;
    for (const deg of [0, 90, 180, 270]) {
        const rad = (deg * Math.PI) / 180;
        const [x1, y1] = polarPoint(cx, cy, inner * 0.55, rad);
        const [x2, y2] = polarPoint(cx, cy, inner * 1.2, rad);
        s += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${tickColor}" stroke-width="2" stroke-linecap="round"/>`;
    }
    return s;
}

/**
 * @param {WheelData} wheelData
 * @param {string | null} sel
 * @param {SvgBuildOptions} options
 * @returns {string}
 */
export function buildWheelSvgBody(wheelData, sel, { t, activeTypes, activeQuadrant, nameFilter }) {
    const { nodes, edges, categories, cx, cy, hubRadius, emotionRingInner, emotionRingOuter, catRingInner, catRingOuter } = wheelData;
    const dark = document.documentElement.classList.contains("dark");
    const labelFill = dark ? "#e2e8f0" : "#1e293b";
    const visibleEdges = edges.filter((e) => activeTypes.has(e.type));
    const quadrantFilter = buildQuadrantFilter(activeQuadrant, visibleEdges, nodes);
    const normalizedFilter = nameFilter ? normalizeText(nameFilter) : "";
    const connectedNames = sel
        ? new Set(
              visibleEdges
                  .filter((e) => nodes[e.ai].nombre === sel || nodes[e.bi].nombre === sel)
                  .flatMap((e) => [nodes[e.ai].nombre, nodes[e.bi].nombre])
          )
        : null;

    const catStr = categories
        .map((cat) => {
            const bgC = dark ? cat.ink + "33" : cat.color + "66";
            const strokeC = dark ? "#0f172a" : "#ffffff";
            const catTextC = dark ? "#f1f5f9" : cat.ink;
            const [lx, ly] = polarPoint(cx, cy, (catRingInner + catRingOuter) / 2, cat.midAngle);
            return `<path d="${donutSegmentPath(cx, cy, catRingInner, catRingOuter, cat.startAngle, cat.endAngle)}" fill="${bgC}" stroke="${strokeC}" stroke-width="1.5"/>
            <text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="800" fill="${catTextC}">${escHtml(t(cat.labelKey).toUpperCase())}</text>`;
        })
        .join("");

    const eStr = visibleEdges
        .map((e) => {
            const a = nodes[e.ai];
            const b = nodes[e.bi];
            let op = 0;
            if (sel) {
                op = sel === a.nombre || sel === b.nombre ? 0.9 : 0;
            } else if (quadrantFilter) {
                const aIn = quadrantFilter.inQuadrant.has(a.nombre);
                const bIn = quadrantFilter.inQuadrant.has(b.nombre);
                if (aIn && bIn) op = 0.75;
                else if (aIn || bIn) op = 0.35;
            } else if (normalizedFilter) {
                const aMatch = normalizeText(a.label).includes(normalizedFilter);
                const bMatch = normalizeText(b.label).includes(normalizedFilter);
                op = aMatch || bMatch ? 0.3 : 0;
            }
            const rel = RELS[e.type];
            return `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}" stroke="${rel.color}" stroke-width="2" opacity="${op}" stroke-dasharray="${rel.dash}"/>`;
        })
        .join("");

    const ringThickness = emotionRingOuter - emotionRingInner;
    const wedgeStr = nodes
        .map((n) => {
            const isSel = sel === n.nombre;
            const isConn = connectedNames ? connectedNames.has(n.nombre) : true;
            const nodeOp = calcNodeOpacity(n, sel, isSel, isConn, quadrantFilter, normalizedFilter);
            const hide = nodeOp === 0;
            const strokeC = isSel ? (dark ? "#93c5fd" : "#2563eb") : dark ? "#0f172a" : "#ffffff";
            const strokeW = isSel ? 3 : 1.5;
            const path = donutSegmentPath(cx, cy, emotionRingInner, emotionRingOuter, n.startAngle, n.endAngle);
            const midAngle = (n.startAngle + n.endAngle) / 2;
            const arcPx = ((emotionRingInner + emotionRingOuter) / 2) * (n.endAngle - n.startAngle);
            const angularCap = arcPx * 0.75;
            const { fontSize, label: lbl } = fitWedgeLabel(n.label, ringThickness, angularCap);
            const wedgeTextC = getReadableTextColor(n.color);
            return `<g class="map-node" data-nombre="${escAttr(n.nombre)}" tabindex="0" role="button" aria-label="${escAttr(n.label)}" style="cursor:pointer" opacity="${nodeOp}" ${hide ? 'pointer-events="none"' : ""}>
            <title>${escHtml(n.label)}</title>
            <path d="${path}" fill="${n.color}" stroke="${strokeC}" stroke-width="${strokeW}"/>
            ${radialLabel(cx, cy, midAngle, emotionRingInner, emotionRingOuter, lbl, fontSize, wedgeTextC)}
        </g>`;
        })
        .join("");

    const hubFill = dark ? "#1e293b" : "#f8fafc";
    const hubStroke = dark ? "#334155" : "#e2e8f0";
    let hubStr = `<circle cx="${cx}" cy="${cy}" r="${hubRadius.toFixed(1)}" fill="${hubFill}" stroke="${hubStroke}" stroke-width="1.5"/>`;
    const selNode = sel ? nodes.find((n) => n.nombre === sel) : undefined;
    if (selNode) {
        const midAngle = (selNode.startAngle + selNode.endAngle) / 2;
        const [nx, ny] = polarPoint(cx, cy, hubRadius - 10, midAngle);
        const hubLbl = selNode.label.length > 14 ? selNode.label.slice(0, 13) + "…" : selNode.label;
        hubStr += `<line x1="${cx}" y1="${cy}" x2="${nx.toFixed(1)}" y2="${ny.toFixed(1)}" stroke="${selNode.color}" stroke-width="3" stroke-linecap="round"/>
        <circle cx="${cx}" cy="${cy}" r="5" fill="${selNode.color}"/>
        <text x="${cx}" y="${(cy + hubRadius * 0.55).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="800" fill="${labelFill}">${escHtml(hubLbl)}</text>`;
    } else {
        hubStr += compassGlyph(cx, cy, hubRadius, dark);
    }

    return `${catStr}<g>${eStr}</g><g>${wedgeStr}</g>${hubStr}`;
}

/** @param {ForceNode[]} nodes @param {string} nameFilter @param {string | null} selected @returns {boolean} */
export function hasNodeMatch(nodes, nameFilter, selected) {
    if (!nameFilter || selected !== null) return true;
    const norm = normalizeText(nameFilter);
    return nodes.some((n) => normalizeText(n.label).includes(norm));
}

/** @param {string | null} selected @param {ForceNode[]} nodes @param {ForceEdge[]} edges @returns {Partial<Record<RelationType, string[]>> | null} */
export function buildGroupedRelations(selected, nodes, edges) {
    if (!selected) return null;
    const myEdges = edges.filter((e) => nodes[e.ai]?.nombre === selected || nodes[e.bi]?.nombre === selected);
    /** @type {Partial<Record<RelationType, string[]>>} */
    const grouped = {};
    for (const e of myEdges) {
        const other = nodes[e.ai].nombre === selected ? nodes[e.bi] : nodes[e.ai];
        grouped[e.type] = grouped[e.type] || [];
        grouped[e.type].push(other.label);
    }
    return grouped;
}
