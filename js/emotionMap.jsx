// @ts-check
import { render } from "preact";
import { normalizeText } from "./utils.js";
import {
    RELS,
    buildForceData,
    buildQuadData,
    escAttr,
    escHtml,
    graphHeightFor,
} from "./emotionMap.logic.js";
import { EmotionMapPanel } from "./emotionMap.view.jsx";
import { emit } from "./bus.js";

/** @typedef {import('./emotionMap.logic.js').RelationType} RelationType */
/** @typedef {import('./emotionMap.logic.js').GraphData} GraphData */
/** @typedef {import('./emotionMap.logic.js').MapView} MapView */
/** @typedef {{ click: (ev: MouseEvent) => void, keydown: (ev: KeyboardEvent) => void }} SvgEventHandler */

function containerW() {
    return document.getElementById("map-content")?.clientWidth || 340;
}

/**
 * @param {{
 *   emociones: import('./data/emotions.js').Emotion[],
 *   getDisplayName: import('./types.js').GetDisplayNameFn,
 *   t: import('./types.js').TFn,
 * }} deps
 */
export function createEmotionMap({ emociones, getDisplayName, t }) {
    /** @type {MapView} */
    let view = "graph";
    /** @type {string | null} */
    let selected = null;
    let nameFilter = "";
    /** @type {Set<RelationType>} */
    let activeTypes = new Set(/** @type {RelationType[]} */ (Object.keys(RELS)));
    /** @type {number | null} */
    let activeQuadrant = null;
    /** @type {(GraphData & { H: number }) | null} */
    let forceData = null;
    /** @type {(GraphData & { H: number }) | null} */
    let quadData = null;
    let lastW = 0;
    /** @type {number | null} */
    let searchDebounce = null;

    function ensureData() {
        const W = containerW();
        if (!forceData || Math.abs(W - lastW) > 20) {
            lastW = W;
            const gH = graphHeightFor(W, emociones.length, forceData?.edges.length ?? 35);
            forceData = { ...buildForceData(emociones, getDisplayName, W, gH), H: gH };
            quadData = null;
        }
        if (!quadData) {
            quadData = buildQuadData(emociones, getDisplayName, containerW());
        }
    }

    function flushSearch() {
        render_();
        requestAnimationFrame(() => populateSuggestions(nameFilter));
    }

    function render_() {
        const wrap = document.getElementById("map-content");
        if (!wrap) return;
        ensureData();

        const currentData = view === "graph" ? forceData : quadData;
        if (!currentData) return;
        const { nodes, edges, H } = currentData;
        const W = containerW();
        const dark = document.documentElement.classList.contains("dark");

        /** @type {SvgEventHandler} */
        const svgEventHandler = {
            click: (ev) => {
                const target = ev.target;
                if (!(target instanceof Element)) return;
                const node = target.closest(".map-node");
                if (!node) {
                    selected = null;
                    render_();
                    return;
                }
                const nombre = /** @type {HTMLElement} */ (node).dataset.nombre;
                selected = selected === nombre ? null : nombre;
                render_();
            },
            keydown: (ev) => {
                if (ev.key !== "Enter" && ev.key !== " ") return;
                const target = ev.target;
                if (!(target instanceof Element)) return;
                const node = target.closest(".map-node");
                if (!node) return;
                ev.preventDefault();
                const nombre = /** @type {HTMLElement} */ (node).dataset.nombre;
                selected = selected === nombre ? null : nombre;
                render_();
            },
        };

        render(
            <EmotionMapPanel
                view={view}
                selected={selected}
                nameFilter={nameFilter}
                activeTypes={activeTypes}
                activeQuadrant={activeQuadrant}
                nodes={nodes}
                edges={edges}
                H={H}
                W={W}
                t={t}
                dark={dark}
                canvasBg={dark ? "#0f172a" : "#f8fafc"}
                onGraphView={() => {
                    view = "graph";
                    selected = null;
                    render_();
                }}
                onQuadView={() => {
                    view = "quad";
                    selected = null;
                    render_();
                }}
                onRelTypeToggle={(type) => {
                    if (activeTypes.has(type)) activeTypes.delete(type);
                    else activeTypes.add(type);
                    render_();
                }}
                onQuadrantChange={(q) => {
                    activeQuadrant = q;
                    selected = null;
                    render_();
                }}
                onOpenDetail={() => {
                    if (selected) emit("emotion:select", { nombre: selected });
                }}
                onClearSelection={() => {
                    selected = null;
                    nameFilter = "";
                    render_();
                }}
                onSearch={(ev) => {
                    const target = /** @type {HTMLInputElement} */ (ev.currentTarget ?? ev.target);
                    nameFilter = target.value;
                    selected = null;
                    if (searchDebounce) globalThis.clearTimeout(searchDebounce);
                    searchDebounce = globalThis.setTimeout(flushSearch, 120);
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

    /** @param {string} value */
    function populateSuggestions(value) {
        const wrap = document.getElementById("map-content");
        const suggestionsList = wrap?.querySelector("#map-suggestions");
        if (!suggestionsList) return;
        const norm = normalizeText(value);
        if (!norm) {
            suggestionsList.classList.add("hidden");
            return;
        }
        const dark = document.documentElement.classList.contains("dark");
        const itemC = dark
            ? "text-slate-200 hover:bg-slate-700 active:bg-slate-600"
            : "text-slate-700 hover:bg-slate-50 active:bg-slate-100";
        const matches = emociones.filter((e) => normalizeText(getDisplayName(e.nombre)).includes(norm)).slice(0, 8);
        if (!matches.length) {
            suggestionsList.classList.add("hidden");
            return;
        }
        suggestionsList.innerHTML = matches
            .map(
                (e) => `<li role="option" tabindex="-1" data-nombre="${escAttr(e.nombre)}"
                class="px-3 py-2 text-[13px] cursor-pointer transition-colors ${itemC}">
                ${escHtml(getDisplayName(e.nombre))}
            </li>`
            )
            .join("");
        suggestionsList.classList.remove("hidden");

        const suggestionsEl = /** @type {HTMLElement} */ (suggestionsList);
        suggestionsEl.onmousedown = (ev) => ev.preventDefault();
        suggestionsEl.onclick = (ev) => {
            const target = ev.target;
            if (!(target instanceof Element)) return;
            const li = target.closest("li[data-nombre]");
            if (!li) return;
            const nombre = /** @type {HTMLElement} */ (li).dataset.nombre;
            const e = emociones.find((em) => em.nombre === nombre);
            if (e) {
                nameFilter = getDisplayName(e.nombre);
                selected = e.nombre;
                const searchInput = document.getElementById("map-search");
                if (searchInput instanceof HTMLInputElement) searchInput.value = nameFilter;
                suggestionsList.classList.add("hidden");
                render_();
            }
        };
    }

    function renderForTab() {
        render_();
    }

    function onLanguageChanged() {
        nameFilter = "";
        if (forceData) for (const n of forceData.nodes) n.label = getDisplayName(n.nombre);
        if (quadData) for (const n of quadData.nodes) n.label = getDisplayName(n.nombre);
        if (document.getElementById("map-content")) render_();
    }

    return { renderForTab, onLanguageChanged };
}
