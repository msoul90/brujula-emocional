// @ts-check
import { render } from "preact";
import { BODY_ZONES, BODY_ZONE_EMOTIONS, SIMPLE_ZONE_GROUPS } from "./constants.js";

/** @typedef {import('./types.js').TFn} TFn */
/** @typedef {import('./types.js').GetDisplayNameFn} GetDisplayNameFn */
/** @typedef {import('./types.js').ShowDetailFn} ShowDetailFn */
/** @typedef {import('./data/emotions.js').Emotion} Emotion */

/**
 * @typedef {{ id: string, color: string, labelKey: string }} BodyZone
 * @typedef {{ x: number, y: number, w: number, h: number }} ZoneRect
 */
import { isDarkMode } from "./utils.js";

// viewBox "0 0 100 200" — displayed at 130px wide (~260px tall)

const BODY_PARTS = [
    { tag: "ellipse", cx: 50, cy: 17, rx: 13, ry: 14 },
    { tag: "path", d: "M45 29 L45 42 L55 42 L55 29 Z" },
    { tag: "path", d: "M34 41 Q28 44 27 50 L29 130 Q50 138 71 130 L73 50 Q72 44 66 41 Q58 39 50 39 Q42 39 34 41 Z" },
    { tag: "path", d: "M27 47 C21 49 15 53 14 60 L13 130 C13 135 16 137 20 137 L26 137 C30 137 31 135 31 130 L31 60 C31 53 29 49 27 47 Z" },
    { tag: "path", d: "M73 47 C79 49 85 53 86 60 L87 130 C87 135 84 137 80 137 L74 137 C70 137 69 135 69 130 L69 60 C69 53 71 49 73 47 Z" },
    { tag: "path", d: "M29 130 L27 200 L51 200 L51 136 C43 136 35 134 29 130 Z" },
    { tag: "path", d: "M71 130 C65 134 57 136 49 136 L49 200 L73 200 L71 130 Z" },
];

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

/**
 * @param {{ tag: string, d?: string, cx?: number, cy?: number, rx?: number, ry?: number }} part
 * @param {Record<string, string|number>} attrs
 * @returns {string}
 */
function bodyPartStr(part, attrs) {
    const a = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(" ");
    if (part.tag === "ellipse") return `<ellipse cx="${part.cx}" cy="${part.cy}" rx="${part.rx}" ry="${part.ry}" ${a}/>`;
    if (part.tag === "path")    return `<path d="${part.d}" ${a}/>`;
    return "";
}

/**
 * @param {string} zoneId
 * @param {string} mode
 * @returns {Set<string>}
 */
function getZoneEmotionNames(zoneId, mode) {
    const groups = /** @type {Record<string, string[]>} */ (SIMPLE_ZONE_GROUPS);
    const emotions = /** @type {Record<string, string[]>} */ (BODY_ZONE_EMOTIONS);
    const detailZones = mode === "simple" ? (groups[zoneId] || [zoneId]) : [zoneId];
    const names = new Set(/** @type {string[]} */ ([]));
    for (const dz of detailZones) for (const n of (emotions[dz] || [])) names.add(n);
    return names;
}

/**
 * @param {BodyZone[]} zones
 * @param {Record<string, ZoneRect[]>} rects
 * @param {Set<string>} selectedZones
 * @param {string} lineColor
 * @param {string} bodyFill
 * @param {TFn} t
 * @returns {string}
 */
function buildSvgInner(zones, rects, selectedZones, lineColor, bodyFill, t) {
    const clipShapes = BODY_PARTS.map(p => bodyPartStr(p, { fill: "white" })).join("");

    const zoneRects = zones.map(zone => {
        const on   = selectedZones.has(zone.id);
        const fill = on ? zone.color + "66" : zone.color + "33";
        const strk = on ? zone.color : zone.color + "66";
        const sw   = on ? "1.5" : "0.75";
        return (rects[zone.id] || []).map(r =>
            `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" data-zone="${zone.id}" fill="${fill}" stroke="${strk}" stroke-width="${sw}" cursor="pointer" class="zone-hit"/>`
        ).join("");
    }).join("");

    const zoneLabels = zones
        .filter(z => selectedZones.has(z.id) && z.id !== "arms")
        .map(z => {
            const r = (rects[z.id] || [])[0];
            if (!r) return "";
            const lx = r.x + r.w / 2;
            const ly = r.y + r.h / 2 + 4;
            return `<text x="${lx}" y="${ly}" text-anchor="middle" font-size="7.5" font-weight="700" fill="${z.color}" pointer-events="none" opacity="0.9">${t(z.labelKey)}</text>`;
        }).join("");

    const bodyOutline = BODY_PARTS.map(p => bodyPartStr(p, {
        fill: bodyFill, "fill-opacity": "0.35", stroke: lineColor,
        "stroke-width": "1.5", "stroke-linejoin": "round", "pointer-events": "none",
    })).join("");

    const divider = `<line x1="29" y1="100" x2="71" y2="100" stroke="${lineColor}" stroke-dasharray="3,2" opacity="0.35" pointer-events="none"/>`;

    return [
        `<defs><clipPath id="body-clip">${clipShapes}</clipPath></defs>`,
        `<g clip-path="url(#body-clip)">${zoneRects}${zoneLabels}${divider}</g>`,
        `<g>${bodyOutline}</g>`,
    ].join("");
}

/** @param {{ zones: BodyZone[], selectedZones: Set<string>, t: TFn, onRemove: (id: string) => void }} props */
function ZoneChips({ zones, selectedZones, t, onRemove }) {
    const selected = zones.filter(z => selectedZones.has(z.id));
    return (
        <div class="flex flex-wrap gap-1.5 mb-4 min-h-[28px]">
            {selected.map(z => (
                <span key={z.id} class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={`background:${z.color}`}>
                    {t(z.labelKey)}
                    <button type="button" aria-label={`Quitar ${t(z.labelKey)}`}
                        class="opacity-80 hover:opacity-100 leading-none"
                        onClick={(ev) => { ev.stopPropagation(); onRemove(z.id); }}>
                        <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                    </button>
                </span>
            ))}
        </div>
    );
}

/** @param {{ matching: Emotion[], selectedZones: Set<string>, dark: boolean, t: TFn, getDisplayName: GetDisplayNameFn, onSelect: ShowDetailFn, onDismiss: () => void }} props */
function ResultSection({ matching, selectedZones, dark, t, getDisplayName, onSelect, onDismiss }) {
    const emptyC = dark ? "text-slate-500" : "text-slate-400";
    if (selectedZones.size === 0) {
        return <p class={`text-sm text-center ${emptyC} py-3 px-2`}>{t("body.tapPrompt")}</p>;
    }
    if (matching.length === 0) {
        return <p class={`text-sm text-center ${emptyC} py-3 px-2`}>{t("body.noMatch")}</p>;
    }
    const titleC = dark ? "text-slate-300" : "text-slate-500";
    return (
        <div>
            <p class={`text-[11px] font-black ${titleC} uppercase tracking-widest mb-3`}>{t("body.resultTitle")}</p>
            <div class="space-y-2">
                {matching.map(e => (
                    <button key={e.nombre} type="button"
                        class="w-full text-left px-4 py-3 rounded-2xl flex items-center gap-3 transition-all hover:shadow-md"
                        style={`background:${e.color}25; border-left:5px solid ${e.color}`}
                        onClick={() => { onDismiss(); onSelect(e); }}>
                        <span class="font-bold text-sm" style={`color:${e.text}`}>{getDisplayName(e.nombre)}</span>
                        <span class="ml-auto text-xs font-bold opacity-60 shrink-0" style={`color:${e.text}`}>Ver →</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

/**
 * @param {{ t: TFn, dark: boolean, zones: BodyZone[], rects: Record<string, ZoneRect[]>, selectedZones: Set<string>, mode: string, matching: Emotion[], lineColor: string, bodyFill: string, getDisplayName: GetDisplayNameFn, onClose: () => void, onModeChange: (mode: string) => void, onZoneClick: (ev: MouseEvent) => void, onRemoveZone: (id: string) => void, onClear: () => void, onSwitchToQuiz: () => void, onDismiss: () => void, onSelectEmotion: ShowDetailFn }} props
 */
function BodyMapPanel({ t, dark, zones, rects, selectedZones, mode, matching, lineColor, bodyFill,
    getDisplayName, onClose, onModeChange, onZoneClick, onRemoveZone, onClear, onSwitchToQuiz, onDismiss, onSelectEmotion }) {
    const activeC   = dark ? "bg-slate-600 text-slate-100" : "bg-slate-800 text-white";
    const inactiveC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
    const clearBtnC = dark ? "bg-slate-800 text-slate-300 hover:bg-slate-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
    const toQuizC   = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
    const headerC   = dark ? "text-slate-100" : "text-slate-800";
    const closeRingC = dark ? "bg-slate-700 text-slate-400 hover:bg-slate-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
    const toggleBgC = dark ? "bg-slate-800" : "bg-slate-100";

    const svgInner = buildSvgInner(zones, rects, selectedZones, lineColor, bodyFill, t);

    return (
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class={`text-xl font-black ${headerC}`}>{t("body.mapTitle")}</h2>
                <button type="button" aria-label="Cerrar" onClick={onClose}
                    class={`w-8 h-8 flex items-center justify-center rounded-full ${closeRingC} transition-colors`}>
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                </button>
            </div>

            <div class={`flex gap-1 mb-4 p-1 rounded-xl ${toggleBgC}`}>
                <button type="button" onClick={() => onModeChange("simple")}
                    class={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "simple" ? activeC : inactiveC}`}>
                    {t("body.modeSimple")}
                </button>
                <button type="button" onClick={() => onModeChange("detailed")}
                    class={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "detailed" ? activeC : inactiveC}`}>
                    {t("body.modeDetailed")}
                </button>
            </div>

            <div class="flex justify-center mb-4">
                <svg id="body-svg" viewBox="0 0 100 200"
                    style="width:130px;height:auto;touch-action:manipulation"
                    role="img" aria-label={t("body.mapTitle")}
                    onClick={onZoneClick}
                    dangerouslySetInnerHTML={{ __html: svgInner }} />
            </div>

            <ZoneChips zones={zones} selectedZones={selectedZones} t={t} onRemove={onRemoveZone} />

            <ResultSection matching={matching} selectedZones={selectedZones} dark={dark}
                t={t} getDisplayName={getDisplayName} onSelect={onSelectEmotion} onDismiss={onDismiss} />

            {selectedZones.size > 0 && (
                <button type="button" onClick={onClear}
                    class={`mt-4 w-full py-2.5 rounded-2xl text-sm font-bold transition-colors ${clearBtnC}`}>
                    {t("body.clear")}
                </button>
            )}
            <button type="button" onClick={onSwitchToQuiz}
                class={`mt-2 w-full py-2.5 text-sm font-medium transition-colors ${toQuizC}`}>
                ← {t("quiz.tabQuestions")}
            </button>
        </div>
    );
}

/**
 * @param {{ emociones: Emotion[], getDisplayName: GetDisplayNameFn, t: TFn, showDetail: ShowDetailFn, onDismiss: () => void, onSwitchToQuiz?: () => void }} opts
 * @returns {{ render: () => void }}
 */
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

    function render_() {
        const content = document.getElementById("quiz-content");
        if (!content) return;

        const dark      = isDarkMode();
        const zones     = /** @type {BodyZone[]} */ (/** @type {any} */ (BODY_ZONES)[mode]);
        const rects     = /** @type {Record<string, ZoneRect[]>} */ (/** @type {any} */ (ZONE_RECTS)[mode]);
        const lineColor = dark ? "#64748b" : "#94a3b8";
        const bodyFill  = dark ? "#0f172a" : "#f8fafc";

        render(
            <BodyMapPanel
                t={t} dark={dark} zones={zones} rects={rects}
                selectedZones={selectedZones} mode={mode}
                matching={getMatchingEmotions()}
                lineColor={lineColor} bodyFill={bodyFill}
                getDisplayName={getDisplayName}
                onClose={onDismiss}
                onModeChange={(newMode) => {
                    if (mode === newMode) return;
                    mode = newMode; selectedZones = new Set(); render_();
                }}
                onZoneClick={(ev) => {
                    const hit = /** @type {HTMLElement | null} */ (/** @type {Element | null} */ (ev.target)?.closest(".zone-hit"));
                    if (!hit) return;
                    const zoneId = hit.dataset.zone;
                    if (selectedZones.has(zoneId)) selectedZones.delete(zoneId);
                    else selectedZones.add(zoneId);
                    render_();
                }}
                onRemoveZone={(zoneId) => { selectedZones.delete(zoneId); render_(); }}
                onClear={() => { selectedZones = new Set(); render_(); }}
                onSwitchToQuiz={() => { if (onSwitchToQuiz) onSwitchToQuiz(); }}
                onDismiss={onDismiss}
                onSelectEmotion={(e) => showDetail(e)}
            />,
            content
        );
    }

    return { render: render_ };
}
