// @ts-check
import { useEffect, useRef } from "preact/hooks";
import { MOOD_CATEGORIES } from "./constants.js";
import {
    RELS,
    buildGroupedRelations,
    buildNeighborhoodData,
    buildSvgBody,
    hasNodeMatch,
} from "./emotionMap.logic.js";

/** @typedef {{ nombre: string, label: string, color: string, x: number, y: number, fx?: number, fy?: number }} ForceNode */
/** @typedef {import('./data/emotions.js').EmotionRelation['type']} RelationType */
/** @typedef {{ ai: number, bi: number, type: RelationType }} ForceEdge */
/** @typedef {'graph'|'quad'} MapView */
/** @typedef {{ click: (ev: MouseEvent) => void, keydown: (ev: KeyboardEvent) => void }} SvgEventHandler */

/**
 * @typedef {{
 *   view: MapView,
 *   selected: string | null,
 *   nameFilter: string,
 *   activeTypes: Set<RelationType>,
 *   activeQuadrant: number | null,
 *   nodes: ForceNode[],
 *   edges: ForceEdge[],
 *   H: number,
 *   W: number,
 *   t: import('./types.js').TFn,
 *   dark: boolean,
 *   canvasBg: string,
 *   onGraphView: () => void,
 *   onQuadView: () => void,
 *   onRelTypeToggle: (type: RelationType) => void,
 *   onQuadrantChange: (q: number | null) => void,
 *   onOpenDetail: () => void,
 *   onClearSelection: () => void,
 *   onSearch: (ev: Event) => void,
 *   svgEventHandler: SvgEventHandler,
 * }} EmotionMapPanelProps
 */

/** @param {{ selected: string | null, grouped: Partial<Record<RelationType, string[]>> | null, nodes: ForceNode[], t: import('./types.js').TFn, dark: boolean, onOpenDetail: () => void, onClearSelection: () => void }} props */
function SelectedInfoPanel({ selected, grouped, nodes, t, dark, onOpenDetail, onClearSelection }) {
    if (!selected || !grouped) return null;
    const borderC = dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100";
    const nameC = dark ? "text-slate-100" : "text-slate-800";
    return (
        <div id="map-info-panel" class={`mt-3 rounded-2xl p-4 border ${borderC} shadow-sm`}>
            <div class="flex items-center justify-between mb-2">
                <span class={`font-bold ${nameC}`}>{nodes.find((n) => n.nombre === selected)?.label ?? selected}</span>
                <div class="flex items-center gap-1">
                    <button
                        id="map-open-btn"
                        onClick={onOpenDetail}
                        class="text-xs font-bold text-blue-500 hover:text-blue-600 px-2 py-1 rounded-lg transition-colors"
                    >
                        {t("openChip")}
                    </button>
                    <button
                        id="map-clear-btn"
                        aria-label={t("map.clearSelection")}
                        onClick={onClearSelection}
                        class="w-6 h-6 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                </div>
            </div>
            {Object.keys(grouped).length > 0 ? (
                <ul class="space-y-1.5">
                    {Object.entries(grouped).map(([type, names]) => {
                        const rel = RELS[/** @type {RelationType} */ (type)];
                        return (
                            <li key={type} class="flex items-start gap-2 text-sm leading-snug">
                                <span class="mt-1 shrink-0 inline-block w-2.5 h-2.5 rounded-full" style={`background:${rel.color}`} />
                                <span>
                                    <strong class={dark ? "text-slate-300" : "text-slate-700"}>{t(rel.labelKey)}:</strong>{" "}
                                    <span class={dark ? "text-slate-400" : "text-slate-500"}>{(names ?? []).join(", ")}</span>
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

/** @param {{ t: import('./types.js').TFn, dark: boolean, activeTypes: Set<RelationType>, onRelTypeToggle: (type: RelationType) => void }} props */
function RelationLegend({ t, dark, activeTypes, onRelTypeToggle }) {
    return (
        <ul class="flex flex-wrap gap-x-3 gap-y-1 mb-2" aria-label={t("map.legendLabel")}>
            {Object.entries(RELS).map(([type, rel]) => {
                const relType = /** @type {RelationType} */ (type);
                const on = activeTypes.has(relType);
                const dimLine = dark ? "#475569" : "#cbd5e1";
                const lineColor = on ? rel.color : dimLine;
                const onTextC = dark ? "text-slate-300" : "text-slate-600";
                const offTextC = dark ? "text-slate-600" : "text-slate-400";
                const onBgC = dark ? "bg-slate-700" : "bg-slate-100";
                return (
                    <li key={type}>
                        <button
                            type="button"
                            data-rel-type={type}
                            aria-pressed={on}
                            class={`flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded-lg transition-colors ${on ? onTextC : offTextC} ${on ? onBgC : ""}`}
                            onClick={() => onRelTypeToggle(relType)}
                        >
                            <svg width="14" height="6" aria-hidden="true">
                                <line x1="0" y1="3" x2="14" y2="3" stroke={lineColor} stroke-width="2" stroke-dasharray={rel.dash} />
                            </svg>
                            {t(rel.labelKey)}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

/** @param {{ t: import('./types.js').TFn, activeC: string, inactiveC: string, effectiveQuadrant: number | null, onQuadrantChange: (q: number | null) => void }} props */
function QuadrantFilters({ t, activeC, inactiveC, effectiveQuadrant, onQuadrantChange }) {
    return (
        <ul class="flex flex-wrap gap-1.5 mb-2">
            <li>
                <button
                    type="button"
                    data-quad="all"
                    aria-pressed={effectiveQuadrant === null}
                    class={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${effectiveQuadrant === null ? activeC : inactiveC}`}
                    onClick={() => onQuadrantChange(null)}
                >
                    {t("map.filterAll")}
                </button>
            </li>
            {MOOD_CATEGORIES.map((cat, i) => {
                const isActive = effectiveQuadrant === i;
                return (
                    <li key={cat.key}>
                        <button
                            type="button"
                            data-quad={String(i)}
                            aria-pressed={isActive}
                            class={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${isActive ? "" : inactiveC}`}
                            style={isActive ? `background-color:${cat.color};color:${cat.ink};border-color:${cat.color}` : ""}
                            onClick={() => onQuadrantChange(i)}
                        >
                            {t(cat.labelKey)}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

/** @param {EmotionMapPanelProps} props */
export function EmotionMapPanel({
    view,
    selected,
    nameFilter,
    activeTypes,
    activeQuadrant,
    nodes,
    edges,
    H,
    W,
    t,
    dark,
    canvasBg,
    onGraphView,
    onQuadView,
    onRelTypeToggle,
    onQuadrantChange,
    onOpenDetail,
    onClearSelection,
    onSearch,
    svgEventHandler,
}) {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;
        const isNeighborhood = view === "graph" && selected !== null;
        /** @type {ForceNode[]} */
        let svgNodes;
        /** @type {ForceEdge[]} */
        let svgEdges;
        /** @type {number | null} */
        let svgActiveQuadrant;
        if (isNeighborhood) {
            const hood = buildNeighborhoodData(
                selected,
                nodes,
                edges.filter((e) => activeTypes.has(e.type)),
                W,
                H
            );
            svgNodes = hood.nodes;
            svgEdges = hood.edges;
            svgActiveQuadrant = null;
        } else {
            svgNodes = nodes;
            svgEdges = edges;
            svgActiveQuadrant = activeQuadrant;
        }
        svg.innerHTML = buildSvgBody(svgNodes, svgEdges, W, H, selected, view, {
            t,
            activeTypes,
            activeQuadrant: svgActiveQuadrant,
            nameFilter,
        });
        svg.onclick = svgEventHandler.click;
        svg.onkeydown = svgEventHandler.keydown;
    });

    const activeC = dark ? "bg-slate-100 text-slate-900 border-slate-100" : "bg-slate-800 text-white border-slate-800";
    const inactiveC = dark ? "bg-slate-800 text-slate-400 border-slate-600" : "bg-white text-slate-500 border-slate-200";

    const effectiveQuadrant = view === "graph" && selected !== null ? null : activeQuadrant;
    const hasMatch = hasNodeMatch(nodes, nameFilter, selected);
    const grouped = buildGroupedRelations(selected, nodes, edges);

    return (
        <div>
            <div class="flex gap-2 mb-2">
                <button
                    id="map-graph-btn"
                    onClick={onGraphView}
                    class={`flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "graph" ? activeC : inactiveC}`}
                >
                    {t("map.viewGraph")}
                </button>
                <button
                    id="map-quad-btn"
                    onClick={onQuadView}
                    class={`flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "quad" ? activeC : inactiveC}`}
                >
                    {t("map.viewQuad")}
                </button>
            </div>

            <RelationLegend t={t} dark={dark} activeTypes={activeTypes} onRelTypeToggle={onRelTypeToggle} />

            <QuadrantFilters
                t={t}
                activeC={activeC}
                inactiveC={inactiveC}
                effectiveQuadrant={effectiveQuadrant}
                onQuadrantChange={onQuadrantChange}
            />

            <div class="relative mb-2">
                <input
                    id="map-search"
                    type="text"
                    autocomplete="off"
                    placeholder={t("map.searchPlaceholder")}
                    defaultValue={nameFilter}
                    class={`w-full text-[13px] px-3 py-1.5 rounded-xl border transition-colors ${
                        dark
                            ? "bg-slate-800 border-slate-600 text-slate-200 placeholder:text-slate-500"
                            : "bg-white border-slate-200 text-slate-700 placeholder:text-slate-400"
                    }`}
                    onInput={onSearch}
                />
                <ul
                    id="map-suggestions"
                    class={`absolute z-20 w-full mt-1 rounded-xl border shadow-lg max-h-48 overflow-y-auto hidden ${
                        dark ? "bg-slate-800 border-slate-600" : "bg-white border-slate-200"
                    }`}
                />
            </div>

            <p id="map-hint" class="text-[11px] text-slate-400 mb-1.5 px-0.5">
                {selected ? t("map.hintSelected") : t("map.hint")}
            </p>

            <div class="rounded-2xl overflow-hidden" style={`background:${canvasBg}`}>
                <svg id="map-svg" ref={svgRef} viewBox={`0 0 ${W} ${H}`} style="width:100%;display:block;touch-action:pan-y" role="img" aria-label={t("nav.mapa")} />
            </div>

            <p id="map-empty" class={`${hasMatch ? "hidden" : ""} text-[13px] text-center text-slate-400 mt-4 py-2`}>
                {t("map.searchEmpty")}
            </p>

            <SelectedInfoPanel
                selected={selected}
                grouped={grouped}
                nodes={nodes}
                t={t}
                dark={dark}
                onOpenDetail={onOpenDetail}
                onClearSelection={onClearSelection}
            />
        </div>
    );
}
