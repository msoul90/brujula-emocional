import { render } from "preact";
import { useState } from "preact/hooks";
import { RECENT_LIMIT, REGULATION_TECHNIQUES } from "./constants.js";
import { getReadableTextColor } from "./utils.js";
import { buildEmotionCanvas } from "./emotionCanvas.js";
import { get, set } from "./store.js";
import { getRecentEmotions, setRecentEmotions } from "./persistence.js";
import { shortRecentLabel, filterEmotions, filterMaskedEmotions } from "./uiHelpers.js";
import { emit, on } from "./bus.js";

async function shareEmotionCard(canvas, filename) {
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    const file = new File([blob], `${filename}.png`, { type: "image/png" });
    if (navigator.canShare?.({ files: [file] })) {
        try { await navigator.share({ files: [file], title: filename }); } catch { /* user cancelled */ }
        return;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `${filename}.png`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ── Checkin components ────────────────────────────────────────────────────────

const MOOD_SVGS = {
    agitado: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/><line x1="26" y1="32" x2="34" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="54" y1="32" x2="46" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="42" r="2" fill="currentColor"/><circle cx="48" cy="42" r="2" fill="currentColor"/><path d="M30 54 L34 50 L38 54 L42 50 L46 54 L50 50" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    triste:  `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/><path d="M28 40 C 30 44, 34 44, 36 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M44 40 C 46 44, 50 44, 52 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M32 56 C 36 50, 44 50, 48 56" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M34 48 C 33 52, 31 54, 32 56 C 33 56, 34 54, 34 48 Z" fill="currentColor"/></svg>`,
    confundido: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/><line x1="26" y1="34" x2="34" y2="32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="46" y1="32" x2="54" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="42" r="2" fill="currentColor"/><circle cx="48" cy="42" r="2" fill="currentColor"/><path d="M30 54 C 34 52, 38 56, 42 54 C 46 52, 48 56, 52 54" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
    bien:    `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/><path d="M28 42 C 30 38, 34 38, 36 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M44 42 C 46 38, 50 38, 52 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M30 52 C 34 60, 46 60, 50 52" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
};

function CheckinCard({ cat, t, onClick }) {
    const svgHtml = MOOD_SVGS[cat.key];
    return (
        <button type="button" data-mood={cat.key}
            class="checkin-card w-full p-5 rounded-2xl shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all active:scale-95"
            style={`background-color:${cat.color};color:${cat.ink}`}
            onClick={onClick}>
            {svgHtml
                ? <span dangerouslySetInnerHTML={{ __html: svgHtml }} />
                : <span class="text-3xl" aria-hidden="true">{cat.emoji}</span>}
            <span class="font-black text-base leading-tight">{t(cat.labelKey)}</span>
        </button>
    );
}

function EmotionCard({ e, getDisplayName, t, onSelect }) {
    return (
        <button type="button" class="emotion-card p-5 rounded-2xl shadow-sm cursor-pointer flex justify-between items-center w-full text-left"
            style={`--ec:${e.color}; border-left:8px solid ${e.color}`}
            aria-label={`${t("openDetailAria")} ${getDisplayName(e.nombre)}`}
            onClick={(ev) => onSelect(e, ev.currentTarget)}>
            <span class="font-bold text-lg text-slate-700">{getDisplayName(e.nombre)}</span>
            <svg class="w-4 h-4 text-slate-300 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
        </button>
    );
}

// ── Modal content components ──────────────────────────────────────────────────

function TechniqueSection({ emotionNombre, t, lang }) {
    const [open, setOpen] = useState(false);
    const tech = REGULATION_TECHNIQUES[emotionNombre];
    if (!tech) return null;
    const data = tech[lang] ?? tech.es;
    return (
        <div>
            <button id="technique-toggle" type="button"
                class="flex items-center gap-2 text-[11px] font-black text-indigo-500 uppercase tracking-widest w-full text-left px-1 mb-2"
                aria-expanded={String(open)}
                onClick={() => setOpen(!open)}>
                <svg id="technique-chevron"
                    class={`w-3.5 h-3.5 transition-transform shrink-0 ${open ? "rotate-90" : ""}`}
                    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                </svg>
                {t("technique.practice")}
            </button>
            {open && (
                <div id="technique-body" class="bg-indigo-50 border-2 border-indigo-100 rounded-2xl p-4">
                    <p class="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">
                        {t("technique.label")} · {data.name}
                    </p>
                    <ol class="space-y-2">
                        {data.steps.map((s, i) => (
                            <li key={`${data.name}-${s}`} class="flex gap-2 text-sm text-indigo-900 leading-snug">
                                <span class="font-black text-indigo-400 shrink-0">{i + 1}.</span>
                                <span>{s}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}

function CopyButton({ text, t }) {
    const [copied, setCopied] = useState(false);
    if (typeof navigator === "undefined" || !navigator.clipboard) return null;
    return (
        <button id="copy-response-btn" type="button"
            class="flex items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors text-[11px] font-bold"
            aria-label={t("copyButton")}
            onClick={async () => {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }}>
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            <span id="copy-response-label">{copied ? t("copiedFeedback") : t("copyButton")}</span>
        </button>
    );
}

function ModalContent({ e, t, getDisplayName, getEmotionField, relaciones, emociones, onShowDetail }) {
    const quoteTextColor  = getReadableTextColor(e.color);
    const quoteLabelColor = quoteTextColor === "#f8fafc" ? "rgba(248,250,252,0.9)" : "rgba(15,23,42,0.85)";
    const lang = get("currentLang") || "es";

    const maskedEmotions = filterMaskedEmotions(relaciones, e.nombre, emociones);

    return (
        <div>
            <div class="inline-block px-4 py-1 rounded-full mb-2" style={`background-color:${e.color}; color:${quoteTextColor}`}>
                <span class="text-xs font-black uppercase tracking-widest">{t("emotionTag")}</span>
            </div>
            <h2 id="modal-emotion-title" class="text-4xl font-black mb-6 text-slate-800">{getDisplayName(e.nombre)}</h2>

            <div class="space-y-6">
                <div class="grid grid-cols-1 gap-4">
                    {[
                        { labelKey: "feelLabel",     field: "siente"  },
                        { labelKey: "triggerLabel",  field: "dispara" },
                        { labelKey: "functionLabel", field: "funcion" },
                    ].map(({ labelKey, field }) => (
                        <div key={field} class="bg-slate-50 p-4 rounded-2xl">
                            <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">{t(labelKey)}</p>
                            <p class="text-slate-700 leading-relaxed font-medium">{getEmotionField(e, field)}</p>
                        </div>
                    ))}
                </div>

                <div class="relative p-6 rounded-3xl overflow-hidden shadow-lg"
                    style={`background-color:${e.color}; color:${quoteTextColor}`}>
                    <svg class="absolute -top-2 -left-2 text-black/10 w-16 h-16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                    <p class="text-[11px] font-black uppercase tracking-widest mb-2" style={`color:${quoteLabelColor}`}>{t("messageLabel")}</p>
                    <p class="text-[1.45rem] sm:text-[1.65rem] font-serif italic leading-[1.35] sm:leading-snug"
                        style={`color:${quoteTextColor}`}>"{getEmotionField(e, "mensaje")}"</p>
                </div>

                <div>
                    <p class="text-[11px] font-black text-amber-600 uppercase tracking-widest mb-2 px-1">{t("impulseLabel")}</p>
                    <div class="bg-amber-50 border-2 border-amber-100 p-4 rounded-2xl">
                        <p class="text-amber-900 font-bold leading-relaxed">{getEmotionField(e, "impulso")}</p>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between mb-2 px-1">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest">{t("responseLabel")}</p>
                        <CopyButton text={getEmotionField(e, "respuesta")} t={t} />
                    </div>
                    <div class="bg-emerald-50 border-2 border-emerald-100 p-4 rounded-2xl">
                        <p class="text-emerald-900 font-bold leading-relaxed">{getEmotionField(e, "respuesta")}</p>
                    </div>
                </div>

                <TechniqueSection emotionNombre={e.nombre} t={t} lang={lang} />

                {maskedEmotions.length > 0 && (
                    <div class="border-t border-slate-100 pt-4">
                        <p class="text-[11px] font-black text-violet-500 uppercase tracking-widest mb-2 px-1">{t("map.relEnmascara")}</p>
                        <div class="flex flex-wrap gap-2 mb-2">
                            {maskedEmotions.map((m) => (
                                <button key={m.nombre} type="button"
                                    class="masked-chip px-3 py-1.5 rounded-full text-sm font-bold transition-opacity hover:opacity-80"
                                    style={`background-color:${m.color}; color:${getReadableTextColor(m.color)}`}
                                    onClick={() => onShowDetail(m)}>
                                    {getDisplayName(m.nombre)}
                                </button>
                            ))}
                        </div>
                        <p class="text-xs text-slate-400 px-1">{t("masksHint")}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

// ── Diary inline form (rendered inside the modal panel) ───────────────────────

function DiaryInlineForm({ t, onSave, onCancel }) {
    const [saved, setSaved] = useState(false);

    function handleSave() {
        const note = /** @type {HTMLTextAreaElement|null} */ (document.getElementById("diary-inline-note"))?.value ?? "";
        setSaved(true);
        onSave(note);
    }

    if (saved) {
        return <p class="text-emerald-600 font-bold text-sm text-center py-2">✓ {t("diary.addedFeedback")}</p>;
    }

    return (
        <div>
            <label for="diary-inline-note" class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 block">
                {t("diary.noteLabel")}
            </label>
            <textarea id="diary-inline-note" rows={2} placeholder={t("diary.notePlaceholder")}
                class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <div class="flex gap-2 mt-2">
                <button type="button" onClick={handleSave}
                    class="flex-1 bg-slate-800 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors">
                    {t("diary.saveButton")}
                </button>
                <button type="button" onClick={onCancel}
                    class="flex-1 bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
                    {t("diary.cancelButton")}
                </button>
            </div>
        </div>
    );
}

// ── Factory ───────────────────────────────────────────────────────────────────

export function createUI({
    emociones,
    relaciones = [],
    getDisplayName,
    getEmotionField,
    t,
    modalAnimationMs,
    moodCategories = [],
}) {
    let scrollCleanup   = null;
    let activeCheckinCat = null;
    let searchDebounceId = null;

    on("emotion:select", ({ nombre }) => {
        const e = emociones.find((em) => em.nombre === nombre);
        if (e) showDetail(e);
    });

    function saveRecentEmotion(nombre) {
        const existing = getRecentEmotions().filter((item) => item !== nombre);
        const next = [nombre, ...existing].slice(0, RECENT_LIMIT);
        setRecentEmotions(next);
        renderRecentEmotions();
    }

    function renderRecentEmotions() {
        const section = document.getElementById("recent-section");
        const grid    = document.getElementById("recent-grid");
        const recents = getRecentEmotions();

        if (!recents.length) {
            if (section) section.classList.add("hidden");
            if (grid) render(null, grid);
            return;
        }
        if (section) section.classList.remove("hidden");
        if (!grid) return;

        const items = recents
            .map((nombre) => emociones.find((e) => e.nombre === nombre))
            .filter(Boolean);

        render(
            <>
                {items.map((emotion) => {
                    const displayName = getDisplayName(emotion.nombre);
                    return (
                        <button key={emotion.nombre} type="button"
                            class="emotion-card recent-emotion-card shrink-0 w-20 h-20 rounded-full shadow-sm flex items-center justify-center text-center px-2 text-[11px] font-bold leading-tight text-slate-700"
                            style={`--ec:${emotion.color}`}
                            aria-label={`${t("openEmotionAria")} ${displayName}`}
                            title={displayName}
                            onClick={(ev) => { set("lastFocusedCard", ev.currentTarget); showDetail(emotion); }}>
                            <span>{shortRecentLabel(displayName)}</span>
                        </button>
                    );
                })}
            </>,
            grid
        );
    }

    function renderEmociones(filter = "") {
        const grid = document.getElementById("emotion-grid");
        if (!grid) return;
        const visible = filterEmotions(emociones, filter, getDisplayName, getEmotionField);

        render(
            <>
                {visible.map((e) => (
                    <EmotionCard key={e.nombre} e={e} getDisplayName={getDisplayName} t={t}
                        onSelect={(emotion, el) => { set("lastFocusedCard", el); showDetail(emotion); }} />
                ))}
                {!visible.length && (
                    <div class="search-empty-state bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-200">
                        <p class="text-slate-700 font-bold mb-1">{t("emptyTitle")}</p>
                        <p class="text-slate-500 text-sm">{t("emptyHint")}</p>
                    </div>
                )}
            </>,
            grid
        );
    }

    function renderCheckinTab() {
        const grid = document.getElementById("checkin-cards-grid");
        if (!grid || !moodCategories.length) return;

        render(
            <>
                {moodCategories.map((cat) => (
                    <CheckinCard key={cat.key} cat={cat} t={t}
                        onClick={() => renderCheckinEmotions(cat.key)} />
                ))}
            </>,
            grid
        );

        if (activeCheckinCat) renderCheckinEmotions(activeCheckinCat);
    }

    function renderCheckinEmotions(catKey) {
        const cat = moodCategories.find((c) => c.key === catKey);
        if (!cat) return;
        activeCheckinCat = catKey;

        const section     = document.getElementById("checkin-emotion-section");
        const label       = document.getElementById("checkin-selected-label");
        const filteredGrid = document.getElementById("checkin-filtered-grid");
        const resetBtn    = document.getElementById("checkin-reset-btn");
        if (!section || !filteredGrid) return;

        section.classList.remove("hidden");
        if (label) label.textContent = `${cat.emoji} ${t(cat.labelKey)}`;

        const filtered = emociones.filter((em) => cat.emotions.includes(em.nombre));
        render(
            <>
                {filtered.map((e) => (
                    <EmotionCard key={e.nombre} e={e} getDisplayName={getDisplayName} t={t}
                        onSelect={(emotion, el) => { set("lastFocusedCard", el); showDetail(emotion); }} />
                ))}
            </>,
            filteredGrid
        );

        if (resetBtn) {
            resetBtn.textContent = t("checkin.reset");
            resetBtn.onclick = () => {
                activeCheckinCat = null;
                section.classList.add("hidden");
            };
        }

        section.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function showDiaryForm(emotionNombre) {
        const existingForm = document.getElementById("diary-inline-form");
        if (existingForm) { render(null, existingForm); existingForm.remove(); return; }

        const form = document.createElement("div");
        form.id = "diary-inline-form";
        form.className = "mt-4 border-t border-slate-100 pt-4";

        const panel = document.getElementById("modal-panel");
        if (!panel) return;
        panel.appendChild(form);

        function cleanup() { render(null, form); form.remove(); }

        render(
            <DiaryInlineForm t={t}
                onSave={(note) => {
                    emit("diary:add", { nombre: emotionNombre, note });
                    setTimeout(cleanup, 1800);
                }}
                onCancel={cleanup}
            />,
            form
        );

        document.getElementById("diary-inline-note")?.focus();
        panel.scrollTop = panel.scrollHeight;
    }

    function showDetail(e) {
        document.getElementById("diary-inline-form")?.remove();

        const content = document.getElementById("modal-content");
        if (!content) return;

        render(
            <ModalContent e={e} t={t} getDisplayName={getDisplayName}
                getEmotionField={getEmotionField} relaciones={relaciones}
                emociones={emociones} onShowDetail={showDetail} />,
            content
        );

        const modal = document.getElementById("modal");
        const panel = document.getElementById("modal-panel");
        if (!modal || !panel) return;
        if (!modal.open) modal.showModal();
        panel.scrollTop = 0;
        document.body.classList.add("modal-open");
        requestAnimationFrame(() => {
            panel.classList.remove("translate-y-8", "sm:scale-95", "opacity-0");
        });
        saveRecentEmotion(e.nombre);

        const shareBtn = document.getElementById("share-btn");
        if (shareBtn) {
            shareBtn.onclick = async () => {
                const canvas = await buildEmotionCanvas(
                    e, getDisplayName(e.nombre), t("emotionTag"),
                    getEmotionField(e, "mensaje"), t("responseLabel"),
                    getEmotionField(e, "respuesta")
                );
                shareEmotionCard(canvas, getDisplayName(e.nombre));
            };
        }

        const diaryAddBtn = document.getElementById("diary-add-btn");
        if (diaryAddBtn) {
            diaryAddBtn.onclick = () => showDiaryForm(e.nombre);
        }

        const closeButton = document.getElementById("close-button");
        if (closeButton) closeButton.focus({ preventScroll: true });

        if (scrollCleanup) scrollCleanup();
        const onPanelScroll = () => {
            const atBottom = panel.scrollHeight - panel.scrollTop <= panel.clientHeight + 8;
            panel.classList.toggle("modal-at-bottom", atBottom);
        };
        panel.addEventListener("scroll", onPanelScroll, { passive: true });
        scrollCleanup = () => panel.removeEventListener("scroll", onPanelScroll);
        onPanelScroll();
    }

    function closeModal() {
        const modal = document.getElementById("modal");
        const panel = document.getElementById("modal-panel");
        if (!modal?.open || !panel || get("isClosingModal")) return;

        set("isClosingModal", true);
        panel.classList.add("translate-y-8", "sm:scale-95", "opacity-0");
        if (scrollCleanup) { scrollCleanup(); scrollCleanup = null; }

        setTimeout(() => {
            modal.close();
            set("isClosingModal", false);
        }, modalAnimationMs);

        document.body.classList.remove("modal-open");
        const lastFocusedCard = get("lastFocusedCard");
        if (lastFocusedCard) lastFocusedCard.focus();
    }

    function bindBaseEvents() {
        const modal         = document.getElementById("modal");
        const modalBackdrop = document.getElementById("modal-backdrop");
        const closeButton   = document.getElementById("close-button");
        const search        = document.getElementById("search");

        modalBackdrop?.addEventListener("click", (event) => {
            if (event.target === modalBackdrop) closeModal();
        });
        modal?.addEventListener("cancel", (event) => {
            event.preventDefault();
            closeModal();
        });
        closeButton?.addEventListener("click", closeModal);
        search?.addEventListener("input", (event) => {
            const target = /** @type {HTMLInputElement} */ (event.target);
            if (searchDebounceId) clearTimeout(searchDebounceId);
            searchDebounceId = setTimeout(() => renderEmociones(target.value), 120);
        });
    }

    return {
        renderRecentEmotions,
        renderEmociones,
        renderCheckinTab,
        renderCheckinEmotions,
        bindBaseEvents,
        closeModal,
        showDetail
    };
}
