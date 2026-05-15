import { BODY_ZONES, BODY_ZONE_EMOTIONS, SIMPLE_ZONE_GROUPS } from "./constants.js";
import { isDarkMode } from "./utils.js";

// viewBox "0 0 100 200" — displayed at 130px wide (~260px tall)

// ── Body part shapes ──────────────────────────────────────────────────────────
const BODY_PARTS = [
    { tag: "ellipse", cx: 50, cy: 17, rx: 13, ry: 14 },
    { tag: "path", d: "M45 29 L45 42 L55 42 L55 29 Z" },
    { tag: "path", d: "M34 41 Q28 44 27 50 L29 130 Q50 138 71 130 L73 50 Q72 44 66 41 Q58 39 50 39 Q42 39 34 41 Z" },
    { tag: "path", d: "M27 47 C21 49 15 53 14 60 L13 130 C13 135 16 137 20 137 L26 137 C30 137 31 135 31 130 L31 60 C31 53 29 49 27 47 Z" },
    { tag: "path", d: "M73 47 C79 49 85 53 86 60 L87 130 C87 135 84 137 80 137 L74 137 C70 137 69 135 69 130 L69 60 C69 53 71 49 73 47 Z" },
    { tag: "path", d: "M29 130 L27 200 L51 200 L51 136 C43 136 35 134 29 130 Z" },
    { tag: "path", d: "M71 130 C65 134 57 136 49 136 L49 200 L73 200 L71 130 Z" },
];

// ── Zone interaction rects ────────────────────────────────────────────────────
const ZONE_RECTS = {
    simple: {
        head:    [{ x: 0,  y: 0,   w: 100, h: 32 }],
        chest:   [{ x: 27, y: 32,  w: 46,  h: 68 }],
        stomach: [{ x: 27, y: 100, w: 46,  h: 40 }],
        arms:    [{ x: 0,  y: 42,  w: 27,  h: 98 }, { x: 73, y: 42, w: 27, h: 98 }],
        legs:    [{ x: 0,  y: 136, w: 100, h: 64 }],
    },
    detailed: {
        head:      [{ x: 0,  y: 0,   w: 100, h: 18 }],
        face:      [{ x: 0,  y: 18,  w: 100, h: 14 }],
        throat:    [{ x: 0,  y: 32,  w: 100, h: 12 }],
        shoulders: [{ x: 27, y: 44,  w: 46,  h: 22 }],
        chest:     [{ x: 27, y: 66,  w: 46,  h: 36 }],
        stomach:   [{ x: 27, y: 102, w: 46,  h: 36 }],
        arms:      [{ x: 0,  y: 44,  w: 27,  h: 95 }, { x: 73, y: 44, w: 27, h: 95 }],
        legs:      [{ x: 0,  y: 138, w: 100, h: 62 }],
    },
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function bodyPartSvg(part, attrs) {
    const a = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(" ");
    if (part.tag === "ellipse") return `<ellipse cx="${part.cx}" cy="${part.cy}" rx="${part.rx}" ry="${part.ry}" ${a}/>`;
    if (part.tag === "path")    return `<path d="${part.d}" ${a}/>`;
    return "";
}

function getZoneEmotionNames(zoneId, mode) {
    const detailZones = mode === "simple" ? (SIMPLE_ZONE_GROUPS[zoneId] || [zoneId]) : [zoneId];
    const names = new Set();
    for (const dz of detailZones) {
        for (const n of (BODY_ZONE_EMOTIONS[dz] || [])) names.add(n);
    }
    return names;
}

function buildSvgZoneRects(zones, rects, selectedZones) {
    return zones.map(zone => {
        const on   = selectedZones.has(zone.id);
        const fill = on ? zone.color + "66" : zone.color + "33";
        const strk = on ? zone.color : zone.color + "66";
        const sw   = on ? "1.5" : "0.75";
        return (rects[zone.id] || []).map(r =>
            `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}"
                data-zone="${zone.id}" fill="${fill}" stroke="${strk}" stroke-width="${sw}"
                cursor="pointer" class="zone-hit"/>`
        ).join("");
    }).join("");
}

function buildSvgZoneLabels(zones, rects, selectedZones, t) {
    return zones
        .filter(z => selectedZones.has(z.id) && z.id !== "arms")
        .map(z => {
            const r = (rects[z.id] || [])[0];
            if (!r) return "";
            const lx = r.x + r.w / 2;
            const ly = r.y + r.h / 2 + 4;
            return `<text x="${lx}" y="${ly}" text-anchor="middle" font-size="7.5" font-weight="700"
                fill="${z.color}" pointer-events="none" opacity="0.9">${t(z.labelKey)}</text>`;
        }).join("");
}

function buildChipsHtml(zones, selectedZones, t) {
    return zones
        .filter(z => selectedZones.has(z.id))
        .map(z => `
            <span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                style="background:${z.color}">
                ${t(z.labelKey)}
                <button type="button" data-remove-zone="${z.id}" aria-label="Quitar ${t(z.labelKey)}"
                    class="opacity-80 hover:opacity-100 leading-none">
                    <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
            </span>`)
        .join("");
}

function buildResultHtml(matching, selectedZones, dark, t, getDisplayName) {
    const emptyC = dark ? "text-slate-500" : "text-slate-400";
    if (selectedZones.size === 0) {
        return `<p class="text-sm text-center ${emptyC} py-3 px-2">${t("bodyMapTapPrompt")}</p>`;
    }
    if (matching.length === 0) {
        return `<p class="text-sm text-center ${emptyC} py-3 px-2">${t("bodyMapNoMatch")}</p>`;
    }
    const titleC = dark ? "text-slate-300" : "text-slate-500";
    const cards = matching.map(e => `
        <button type="button" data-body-emotion="${e.nombre}"
            class="body-result-card w-full text-left px-4 py-3 rounded-2xl flex items-center gap-3 transition-all hover:shadow-md"
            style="background:${e.color}25; border-left:5px solid ${e.color}">
            <span class="font-bold text-sm" style="color:${e.text}">${getDisplayName(e.nombre)}</span>
            <span class="ml-auto text-xs font-bold opacity-60 shrink-0" style="color:${e.text}">Ver →</span>
        </button>`).join("");
    return `
        <p class="text-[11px] font-black ${titleC} uppercase tracking-widest mb-3">${t("bodyMapResultTitle")}</p>
        <div class="space-y-2">${cards}</div>`;
}

const BODY_CLIP_SHAPES = BODY_PARTS.map(p => bodyPartSvg(p, { fill: "white" })).join("");

// ── Factory ───────────────────────────────────────────────────────────────────
export function createBodyMap({ emociones, getDisplayName, t, showDetail, onDismiss, onSwitchToQuiz }) {
    let selectedZones = new Set();
    let mode = "simple";

    function getMatchingEmotions() {
        if (selectedZones.size === 0) return [];
        const counts = new Map();
        for (const zoneId of selectedZones) {
            for (const name of getZoneEmotionNames(zoneId, mode)) {
                counts.set(name, (counts.get(name) || 0) + 1);
            }
        }
        return emociones
            .filter(e => counts.has(e.nombre))
            .sort((a, b) => (counts.get(b.nombre) - counts.get(a.nombre)) || a.nombre.localeCompare(b.nombre));
    }

    function render() {
        const content = document.getElementById("quiz-content");
        if (!content) return;

        const dark      = isDarkMode();
        const zones     = BODY_ZONES[mode];
        const rects     = ZONE_RECTS[mode];
        const lineColor = dark ? "#64748b" : "#94a3b8";
        const bodyFill  = dark ? "#0f172a" : "#f8fafc";
        const activeC   = dark ? "bg-slate-600 text-slate-100" : "bg-slate-800 text-white";
        const inactiveC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
        const clearBtnC = dark ? "bg-slate-800 text-slate-300 hover:bg-slate-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
        const toQuizC   = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";

        const clipShapes  = BODY_CLIP_SHAPES;
        const zoneRects   = buildSvgZoneRects(zones, rects, selectedZones);
        const zoneLabels  = buildSvgZoneLabels(zones, rects, selectedZones, t);
        const bodyOutline = BODY_PARTS.map(p => bodyPartSvg(p, {
            fill: bodyFill, "fill-opacity": "0.35", stroke: lineColor,
            "stroke-width": "1.5", "stroke-linejoin": "round", "pointer-events": "none",
        })).join("");
        const divider = `<line x1="29" y1="100" x2="71" y2="100"
            stroke="${lineColor}" stroke-dasharray="3,2" opacity="0.35" pointer-events="none"/>`;

        const chipsHtml  = buildChipsHtml(zones, selectedZones, t);
        const resultHtml = buildResultHtml(getMatchingEmotions(), selectedZones, dark, t, getDisplayName);
        const clearBtn   = selectedZones.size > 0
            ? `<button id="body-clear-btn" type="button"
                class="mt-4 w-full py-2.5 rounded-2xl text-sm font-bold transition-colors ${clearBtnC}">
                ${t("bodyMapClear")}
               </button>`
            : "";

        const headerC    = dark ? "text-slate-100" : "text-slate-800";
        const closeRingC = dark ? "bg-slate-700 text-slate-400 hover:bg-slate-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
        const toggleBgC  = dark ? "bg-slate-800" : "bg-slate-100";

        content.innerHTML = `
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-xl font-black ${headerC}">${t("bodyMapTitle")}</h2>
                <button id="body-close-btn" type="button" aria-label="Cerrar"
                    class="w-8 h-8 flex items-center justify-center rounded-full ${closeRingC} transition-colors">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
            </div>
            <div class="flex gap-1 mb-4 p-1 rounded-xl ${toggleBgC}">
                <button type="button" id="body-mode-simple"
                    class="flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "simple" ? activeC : inactiveC}">
                    ${t("bodyModeSimple")}
                </button>
                <button type="button" id="body-mode-detailed"
                    class="flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "detailed" ? activeC : inactiveC}">
                    ${t("bodyModeDetailed")}
                </button>
            </div>
            <div class="flex justify-center mb-4">
                <svg id="body-svg" viewBox="0 0 100 200"
                    style="width:130px;height:auto;touch-action:manipulation"
                    role="img" aria-label="${t("bodyMapTitle")}">
                    <defs><clipPath id="body-clip">${clipShapes}</clipPath></defs>
                    <g clip-path="url(#body-clip)">
                        ${zoneRects}${zoneLabels}${divider}
                    </g>
                    <g>${bodyOutline}</g>
                </svg>
            </div>
            <div class="flex flex-wrap gap-1.5 mb-4 min-h-[28px]">${chipsHtml}</div>
            ${resultHtml}
            ${clearBtn}
            <button id="body-to-quiz-btn" type="button"
                class="mt-2 w-full py-2.5 text-sm font-medium transition-colors ${toQuizC}">
                ← ${t("quizTabQuestions")}
            </button>`;

        bindEvents(content);
    }

    function bindEvents(content) {
        content.querySelector("#body-close-btn").addEventListener("click", onDismiss);
        for (const btn of content.querySelectorAll("#body-mode-simple, #body-mode-detailed")) {
            btn.addEventListener("click", () => {
                const newMode = btn.id === "body-mode-simple" ? "simple" : "detailed";
                if (mode === newMode) return;
                mode = newMode; selectedZones.clear(); render();
            });
        }
        content.querySelector("#body-clear-btn")?.addEventListener("click", () => {
            selectedZones.clear(); render();
        });
        content.querySelector("#body-to-quiz-btn").addEventListener("click", () => {
            if (onSwitchToQuiz) onSwitchToQuiz();
        });
        content.querySelector("#body-svg").addEventListener("click", ev => {
            const hit = ev.target.closest(".zone-hit");
            if (!hit) return;
            const zoneId = hit.dataset.zone;
            if (selectedZones.has(zoneId)) selectedZones.delete(zoneId);
            else selectedZones.add(zoneId);
            render();
        });
        for (const btn of content.querySelectorAll("[data-remove-zone]")) {
            btn.addEventListener("click", ev => {
                ev.stopPropagation();
                selectedZones.delete(btn.dataset.removeZone);
                render();
            });
        }
        const matching = getMatchingEmotions();
        for (const btn of content.querySelectorAll(".body-result-card")) {
            btn.addEventListener("click", () => {
                const emotion = matching.find(e => e.nombre === btn.dataset.bodyEmotion);
                if (emotion) { onDismiss(); showDetail(emotion); }
            });
        }
    }

    return { render };
}
