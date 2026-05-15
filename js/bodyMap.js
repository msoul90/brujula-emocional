import { BODY_ZONES, BODY_ZONE_EMOTIONS, SIMPLE_ZONE_GROUPS } from "./constants.js";

// ── SVG zone hit shapes for each mode ─────────────────────────────────────────
// viewBox "0 0 100 232" — zones are non-overlapping and cover the full silhouette

const ZONE_SHAPES = {
    simple: {
        head:    [{ tag: "ellipse", cx: 50, cy: 18, rx: 18, ry: 21 }],
        chest:   [{ tag: "polygon", points: "20,37 80,37 72,112 28,112" }],
        stomach: [{ tag: "rect",    x: 28, y: 112, width: 44, height: 42, rx: 4 }],
        arms:    [{ tag: "rect",    x: 12, y: 41,  width: 14, height: 88, rx: 6 },
                  { tag: "rect",    x: 74, y: 41,  width: 14, height: 88, rx: 6 }],
        legs:    [{ tag: "rect",    x: 28, y: 154, width: 44, height: 78, rx: 6 }],
    },
    detailed: {
        head:      [{ tag: "ellipse", cx: 50, cy: 12, rx: 14, ry: 11 }],
        face:      [{ tag: "ellipse", cx: 50, cy: 25, rx: 13, ry: 10 }],
        throat:    [{ tag: "rect",    x: 44, y: 34,  width: 12, height: 9,  rx: 3 }],
        shoulders: [{ tag: "polygon", points: "20,43 80,43 72,70 28,70" }],
        chest:     [{ tag: "rect",    x: 28, y: 70,  width: 44, height: 42, rx: 4 }],
        stomach:   [{ tag: "rect",    x: 28, y: 112, width: 44, height: 42, rx: 4 }],
        arms:      [{ tag: "rect",    x: 12, y: 43,  width: 14, height: 86, rx: 6 },
                    { tag: "rect",    x: 74, y: 43,  width: 14, height: 86, rx: 6 }],
        legs:      [{ tag: "rect",    x: 28, y: 154, width: 44, height: 78, rx: 6 }],
    },
};

function shapeToSvg(shape, fill, stroke, zoneId) {
    const common = `data-zone="${zoneId}" fill="${fill}" stroke="${stroke}" stroke-width="1.5" cursor="pointer" class="zone-hit"`;
    if (shape.tag === "ellipse") {
        return `<ellipse cx="${shape.cx}" cy="${shape.cy}" rx="${shape.rx}" ry="${shape.ry}" ${common}/>`;
    }
    if (shape.tag === "rect") {
        return `<rect x="${shape.x}" y="${shape.y}" width="${shape.width}" height="${shape.height}" rx="${shape.rx || 0}" ${common}/>`;
    }
    if (shape.tag === "polygon") {
        return `<polygon points="${shape.points}" ${common}/>`;
    }
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

// ── Zone label positions (center of each zone in SVG coords) ──────────────────
const ZONE_LABEL_POS = {
    simple:   { head: [50,18], chest: [50,74], stomach: [50,133], arms: [50,85], legs: [50,193] },
    detailed: { head: [50,12], face: [50,25], throat: [50,38], shoulders: [50,56],
                chest: [50,91], stomach: [50,133], arms: [50,86], legs: [50,193] },
};

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

        const dark = document.documentElement.classList.contains("dark");
        const zones = BODY_ZONES[mode];
        const shapes = ZONE_SHAPES[mode];

        const lineColor  = dark ? "#475569" : "#94a3b8";
        const activeTabC   = dark ? "bg-slate-600 text-slate-100" : "bg-slate-800 text-white";
        const inactiveTabC = dark ? "text-slate-500" : "text-slate-500";

        // SVG zone overlays
        const zoneOverlays = zones.map(zone => {
            const on   = selectedZones.has(zone.id);
            const fill = on ? zone.color + "55" : zone.color + "15";
            const strk = on ? zone.color : "transparent";
            return (shapes[zone.id] || []).map(s => shapeToSvg(s, fill, strk, zone.id)).join("");
        }).join("");

        // Zone label initials inside SVG (small, centered on each zone)
        const zoneLabels = zones.map(zone => {
            const [lx, ly] = (ZONE_LABEL_POS[mode][zone.id] || [50, 50]);
            const on = selectedZones.has(zone.id);
            if (!on) return "";
            const label = t(zone.labelKey);
            const initials = label.slice(0, 2).toUpperCase();
            return `<text x="${lx}" y="${ly + 4}" text-anchor="middle" font-size="7" font-weight="700"
                fill="${zone.color}" pointer-events="none" opacity="0.9">${initials}</text>`;
        }).join("");

        // Selected zone chips
        const selectedChips = zones
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

        // Results
        const matching = getMatchingEmotions();
        let resultHtml = "";
        if (selectedZones.size === 0) {
            resultHtml = `<p class="text-sm text-center ${dark ? "text-slate-500" : "text-slate-400"} py-3">${t("bodyMapTapPrompt")}</p>`;
        } else if (matching.length === 0) {
            resultHtml = `<p class="text-sm text-center ${dark ? "text-slate-500" : "text-slate-400"} py-3">${t("bodyMapNoMatch")}</p>`;
        } else {
            resultHtml = `
                <p class="text-[11px] font-black ${dark ? "text-slate-400" : "text-slate-500"} uppercase tracking-widest mb-3">${t("bodyMapResultTitle")}</p>
                <div class="space-y-2">
                    ${matching.map(e => `
                        <button type="button" data-body-emotion="${e.nombre}"
                            class="body-result-card w-full text-left px-4 py-3 rounded-2xl flex items-center gap-3 transition-all hover:shadow-md"
                            style="background:${e.color}25; border-left:5px solid ${e.color}">
                            <span class="font-bold text-sm" style="color:${e.text}">${getDisplayName(e.nombre)}</span>
                            <span class="ml-auto text-xs font-bold opacity-60" style="color:${e.text}">Ver →</span>
                        </button>`).join("")}
                </div>`;
        }

        content.innerHTML = `
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-xl font-black ${dark ? "text-slate-100" : "text-slate-800"}">${t("bodyMapTitle")}</h2>
                <button id="body-close-btn" type="button" aria-label="Cerrar"
                    class="w-8 h-8 flex items-center justify-center rounded-full ${dark ? "bg-slate-700 text-slate-400 hover:bg-slate-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200"} transition-colors">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
            </div>

            <div class="flex gap-1 mb-4 p-1 rounded-xl ${dark ? "bg-slate-800" : "bg-slate-100"}">
                <button type="button" id="body-mode-simple"
                    class="flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "simple" ? activeTabC : inactiveTabC}">
                    ${t("bodyModeSimple")}
                </button>
                <button type="button" id="body-mode-detailed"
                    class="flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "detailed" ? activeTabC : inactiveTabC}">
                    ${t("bodyModeDetailed")}
                </button>
            </div>

            <div class="flex justify-center mb-3">
                <svg id="body-svg" viewBox="0 0 100 232"
                    style="width:140px;height:auto;touch-action:manipulation"
                    role="img" aria-label="${t("bodyMapTitle")}">
                    <!-- Body outline — visual only, no pointer events -->
                    <g fill="none" stroke="${lineColor}" stroke-width="1.5" stroke-linejoin="round" pointer-events="none">
                        <ellipse cx="50" cy="18" rx="14" ry="15"/>
                        <line x1="44" y1="32" x2="44" y2="40"/>
                        <line x1="56" y1="32" x2="56" y2="40"/>
                        <path d="M44 40 Q28 42 22 50 L18 132 L30 132 L34 54 L66 54 L70 132 L82 132 L78 50 Q72 42 56 40 Z"/>
                        <line x1="28" y1="112" x2="72" y2="112" stroke-dasharray="3,2" opacity="0.4"/>
                        <path d="M34 154 L30 160 L70 160 L66 154"/>
                        <path d="M30 160 L28 232 L50 232 L50 160"/>
                        <path d="M50 160 L50 232 L72 232 L70 160"/>
                    </g>
                    ${zoneOverlays}
                    ${zoneLabels}
                </svg>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-4 min-h-[32px]">
                ${selectedChips || `<span class="text-xs ${dark ? "text-slate-600" : "text-slate-400"} italic">${t("bodyMapTapPrompt")}</span>`}
            </div>

            ${resultHtml}

            ${selectedZones.size > 0 ? `
                <button id="body-clear-btn" type="button"
                    class="mt-4 w-full py-2.5 rounded-2xl text-sm font-bold transition-colors
                        ${dark ? "bg-slate-800 text-slate-400 hover:bg-slate-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}">
                    ${t("bodyMapClear")}
                </button>` : ""}

            <button id="body-to-quiz-btn" type="button"
                class="mt-2 w-full py-2.5 text-slate-400 text-sm font-medium hover:text-slate-500 transition-colors">
                ← ${t("quizTabQuestions")}
            </button>`;

        // Events
        content.querySelector("#body-close-btn").addEventListener("click", onDismiss);

        content.querySelector("#body-mode-simple").addEventListener("click", () => {
            if (mode === "simple") return;
            mode = "simple"; selectedZones.clear(); render();
        });
        content.querySelector("#body-mode-detailed").addEventListener("click", () => {
            if (mode === "detailed") return;
            mode = "detailed"; selectedZones.clear(); render();
        });

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

        for (const btn of content.querySelectorAll(".body-result-card")) {
            btn.addEventListener("click", () => {
                const emotion = emociones.find(e => e.nombre === btn.dataset.bodyEmotion);
                if (emotion) { onDismiss(); showDetail(emotion); }
            });
        }
    }

    return { render };
}
