// @ts-check
import { render } from "preact";
import { useState } from "preact/hooks";

/** @typedef {import('./types.js').TFn} TFn */
/** @typedef {import('./types.js').GetDisplayNameFn} GetDisplayNameFn */
/** @typedef {import('./data/emotions.js').Emotion} Emotion */
import { DIARY_KEY, DIARY_TAGS } from "./constants.js";
import { normalizeText } from "./utils.js";
import { emit } from "./bus.js";

// ── Pure data functions (testable without DOM/localStorage) ──────────────────

/**
 * @typedef {Object} DiaryEntry
 * @property {number}   id
 * @property {string}   date
 * @property {string}   emotion
 * @property {string}   note
 * @property {string[]} tags
 */

/** @param {string|null} raw @returns {DiaryEntry[]} */
export function parseDiaryEntries(raw) {
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

/** @param {string} emotionNombre @param {string} [note] @param {string[]} [tags] @returns {DiaryEntry} */
export function createDiaryEntry(emotionNombre, note = "", tags = []) {
    return {
        id: Date.now(),
        date: new Date().toISOString(),
        emotion: emotionNombre,
        note: note.trim(),
        tags: tags.filter((tag) => DIARY_TAGS.includes(tag))
    };
}

/** @param {DiaryEntry[]} entries @param {number} id @returns {DiaryEntry[]} */
export function deleteDiaryEntryById(entries, id) {
    return entries.filter((e) => e.id !== id);
}

// ── localStorage helpers ─────────────────────────────────────────────────────

function loadEntries() {
    return parseDiaryEntries(localStorage.getItem(DIARY_KEY));
}

/** @param {DiaryEntry[]} entries */
function saveEntries(entries) {
    localStorage.setItem(DIARY_KEY, JSON.stringify(entries));
}

/** @param {string} emotionNombre @param {string} [note] @param {string[]} [tags] @returns {DiaryEntry} */
function addEntryToStorage(emotionNombre, note = "", tags = []) {
    const entry = createDiaryEntry(emotionNombre, note, tags);
    saveEntries([entry, ...loadEntries()]);
    return entry;
}

/** @param {number} id */
function deleteEntryFromStorage(id) {
    saveEntries(deleteDiaryEntryById(loadEntries(), id));
}

// ── Components ───────────────────────────────────────────────────────────────

/**
 * @param {{ emociones: Emotion[], getDisplayName: GetDisplayNameFn, t: TFn, onSelect: (nombre: string) => void }} props
 */
function EmotionSearch({ emociones, getDisplayName, t, onSelect }) {
    const [query, setQuery]   = useState("");
    const [open, setOpen]     = useState(false);
    const [chosen, setChosen] = useState("");

    const norm = normalizeText(query.trim());
    const filtered = emociones.filter((e) => {
        if (!norm) return true;
        const name = normalizeText(getDisplayName(e.nombre));
        return name.includes(norm) || normalizeText(e.nombre).includes(norm);
    });

    /** @param {string} nombre */
    function selectEmotion(nombre) {
        setChosen(nombre);
        setQuery(getDisplayName(nombre));
        setOpen(false);
        onSelect(nombre);
    }

    return (
        <div class="relative mb-3">
            <input type="text" id="diary-emotion-search" autocomplete="off"
                placeholder={t("diary.pickEmotion")}
                value={query}
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                onFocus={() => { if (filtered.length) setOpen(true); }}
                onInput={(ev) => {
                    const val = ev.currentTarget.value;
                    setQuery(val);
                    setChosen("");
                    onSelect("");
                    setOpen(true);
                    ev.currentTarget.classList.remove("ring-2", "ring-red-300");
                }}
                onBlur={() => setTimeout(() => setOpen(false), 150)}
                onKeyDown={(ev) => {
                    if (ev.key === "Escape") { setOpen(false); ev.currentTarget.blur(); }
                    if (ev.key === "Enter") {
                        ev.preventDefault();
                        if (filtered.length) selectEmotion(filtered[0].nombre);
                    }
                }} />
            <input type="hidden" id="diary-emotion-value" value={chosen} />
            {open && filtered.length > 0 && (
                <div id="diary-emotion-dropdown"
                    class="absolute z-50 left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border border-slate-200 hide-scroll"
                    style="max-height:11rem;overflow-y:auto">
                    {filtered.map((e) => (
                        <button key={e.nombre} type="button"
                            class="emotion-option w-full text-left px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition-colors"
                            onMouseDown={(ev) => { ev.preventDefault(); selectEmotion(e.nombre); }}>
                            <span class="w-2.5 h-2.5 rounded-full shrink-0" style={`background-color:${e.color}`} />
                            {getDisplayName(e.nombre)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

/**
 * @param {{ emociones: Emotion[], getDisplayName: GetDisplayNameFn, t: TFn, onSave: (emotion: string, note: string, tags: string[]) => void, onCancel: () => void }} props
 */
function DiaryForm({ emociones, getDisplayName, t, onSave, onCancel }) {
    const [selectedEmotion, setSelectedEmotion] = useState("");
    const [selectedTags, setSelectedTags]       = useState(/** @type {Set<string>} */ (new Set()));

    /** @param {string} tag */
    function toggleTag(tag) {
        const next = new Set(selectedTags);
        if (next.has(tag)) next.delete(tag); else next.add(tag);
        setSelectedTags(next);
    }

    function handleSave() {
        if (!selectedEmotion) {
            const input = document.getElementById("diary-emotion-search");
            input?.focus();
            input?.classList.add("ring-2", "ring-red-300");
            return;
        }
        const note = /** @type {HTMLTextAreaElement | null} */ (document.getElementById("diary-note-input"))?.value ?? "";
        onSave(selectedEmotion, note, [...selectedTags]);
    }

    return (
        <div id="diary-add-form" class="bg-white rounded-2xl p-4 shadow-sm mb-4 border-2 border-blue-100">
            <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">{t("diary.newEntry")}</p>
            <EmotionSearch emociones={emociones} getDisplayName={getDisplayName} t={t}
                onSelect={setSelectedEmotion} />
            <textarea id="diary-note-input" rows={2} placeholder={t("diary.notePlaceholder")}
                class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 mb-3" />
            <div class="mb-3">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t("diary.tagLabel")}</p>
                <div class="flex flex-wrap gap-1.5">
                    {DIARY_TAGS.map((tag) => {
                        const active = selectedTags.has(tag);
                        const label = t(`diary.tag${tag.charAt(0).toUpperCase()}${tag.slice(1)}`);
                        return (
                            <button key={tag} type="button" data-tag={tag}
                                class={`diary-tag-btn px-3 py-1 rounded-full text-[11px] font-bold transition-colors ${active ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
                                onClick={() => toggleTag(tag)}>
                                {label}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div class="flex gap-2">
                <button id="diary-form-save" type="button" onClick={handleSave}
                    class="flex-1 bg-slate-800 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors">
                    {t("diary.saveButton")}
                </button>
                <button id="diary-form-cancel" type="button" onClick={onCancel}
                    class="flex-1 bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
                    {t("diary.cancelButton")}
                </button>
            </div>
        </div>
    );
}

/**
 * @param {{ entries: DiaryEntry[], emociones: Emotion[], getDisplayName: GetDisplayNameFn, t: TFn, formatDate: (iso: string) => string, onDelete: (id: number) => void, onClearAll: () => void }} props
 */
function EntryList({ entries, emociones, getDisplayName, t, formatDate, onDelete, onClearAll }) {
    return (
        <div>
            <div class="space-y-3">
                {entries.map((entry) => {
                    const emotion     = emociones.find((e) => e.nombre === entry.emotion);
                    const displayName = emotion ? getDisplayName(entry.emotion) : entry.emotion;
                    const color       = emotion?.color ?? "#e2e8f0";
                    const tags        = entry.tags?.length ? entry.tags.map((tag) => {
                        const label = t(`diary.tag${tag.charAt(0).toUpperCase()}${tag.slice(1)}`);
                        return <span key={tag} class="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold">{label}</span>;
                    }) : null;
                    return (
                        <div key={entry.id} class="bg-white rounded-2xl p-4 shadow-sm flex gap-3 items-start">
                            <div class="w-3 h-3 rounded-full mt-1 shrink-0" style={`background-color:${color}`} />
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center justify-between gap-2 mb-0.5">
                                    <span class="font-bold text-slate-700 text-sm">{displayName}</span>
                                    <span class="text-xs text-slate-400 shrink-0">{formatDate(entry.date)}</span>
                                </div>
                                {entry.note ? <p class="text-slate-500 text-sm leading-relaxed">{entry.note}</p> : null}
                                {tags ? <div class="flex flex-wrap gap-1 mt-1.5">{tags}</div> : null}
                            </div>
                            <button type="button" aria-label={t("diary.deleteButton")}
                                class="diary-delete-btn text-slate-300 hover:text-red-400 transition-colors shrink-0"
                                data-id={String(entry.id)} onClick={() => onDelete(entry.id)}>
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                </svg>
                            </button>
                        </div>
                    );
                })}
            </div>
            {entries.length > 1 && (
                <button id="diary-clear-btn" type="button" onClick={onClearAll}
                    class="mt-5 w-full text-xs text-slate-400 hover:text-red-400 transition-colors py-2">
                    {t("diary.clearAll")}
                </button>
            )}
        </div>
    );
}

/** @param {{ t: TFn }} props */
function EmptyState({ t }) {
    return (
        <div class="text-center py-8 px-2">
            <p class="text-slate-400 text-sm mb-5">{t("diary.emptyPrompt")}</p>
            <div class="flex flex-col gap-2 max-w-xs mx-auto">
                <button id="diary-empty-checkin" type="button"
                    class="w-full bg-slate-800 text-white py-3 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors"
                    onClick={() => emit("tab:switch", { tabId: "checkin" })}>
                    {t("diary.emptyAction1")}
                </button>
                <button id="diary-empty-quiz" type="button"
                    class="w-full bg-slate-100 text-slate-700 py-3 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-colors"
                    onClick={() => emit("quiz:open")}>
                    {t("diary.emptyAction2")}
                </button>
            </div>
        </div>
    );
}

/**
 * @param {{ t: TFn, getDisplayName: GetDisplayNameFn, emociones: Emotion[], showForm: boolean, onNewEntry: () => void, onSave: (emotion: string, note: string, tags: string[]) => void, onCancel: () => void, onDelete: (id: number) => void, onClearAll: () => void, onExport: () => void }} props
 */
function DiaryPanel({ t, getDisplayName, emociones, showForm, onNewEntry, onSave, onCancel,
    onDelete, onClearAll, onExport }) {
    const entries = loadEntries();

    /** @param {string} isoString @returns {string} */
    function formatDate(isoString) {
        const d   = new Date(isoString);
        const now = new Date();
        const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        if (d.toDateString() === now.toDateString()) return `${t("diary.todayLabel")}, ${time}`;
        return `${d.toLocaleDateString([], { day: "numeric", month: "short", year: "numeric" })} · ${time}`;
    }

    return (
        <div>
            <div class="flex items-center justify-between mb-4">
                <h2 id="diary-title-heading" class="text-xl font-black text-slate-800">{t("diary.title")}</h2>
                <div class="flex items-center gap-2">
                    {entries.length > 0 && (
                        <button id="diary-export-btn" type="button" onClick={onExport}
                            class="flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs font-bold px-3 py-2 rounded-xl hover:bg-slate-200 transition-colors">
                            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                            </svg>
                            {t("diary.exportButton")}
                        </button>
                    )}
                    <button id="diary-new-btn" type="button" onClick={onNewEntry}
                        class="flex items-center gap-1.5 bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded-xl hover:bg-slate-700 transition-colors">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                        </svg>
                        {t("diary.newEntry")}
                    </button>
                </div>
            </div>

            <p class="text-xs text-slate-400 mb-4 flex items-start gap-1.5">
                <svg class="w-3.5 h-3.5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
                {t("diary.privacyNote")}
            </p>

            {showForm && (
                <DiaryForm emociones={emociones} getDisplayName={getDisplayName} t={t}
                    onSave={onSave} onCancel={onCancel} />
            )}

            {entries.length > 0 ? (
                <EntryList entries={entries} emociones={emociones} getDisplayName={getDisplayName}
                    t={t} formatDate={formatDate} onDelete={onDelete}
                    onClearAll={onClearAll} />
            ) : (
                <EmptyState t={t} />
            )}
        </div>
    );
}

// ── Factory ───────────────────────────────────────────────────────────────────

/**
 * @param {{ t: TFn, getDisplayName: GetDisplayNameFn, emociones: Emotion[] }} opts
 * @returns {{ renderForTab: () => void, addEntry: (nombre: string, note?: string, tags?: string[]) => DiaryEntry }}
 */
export function createDiary({ t, getDisplayName, emociones }) {
    let showForm = false;

    function rerender() {
        const content = document.getElementById("diary-content");
        if (!content) return;

        render(
            <DiaryPanel t={t} getDisplayName={getDisplayName} emociones={emociones}
                showForm={showForm}
                onNewEntry={() => {
                    showForm = !showForm;
                    rerender();
                    if (showForm) {
                        setTimeout(() => document.getElementById("diary-emotion-search")?.focus(), 0);
                    }
                }}
                onSave={(emotionNombre, note, tags) => {
                    addEntryToStorage(emotionNombre, note, tags);
                    showForm = false;
                    rerender();
                }}
                onCancel={() => { showForm = false; rerender(); }}
                onDelete={(id) => { deleteEntryFromStorage(id); rerender(); }}
                onClearAll={() => {
                    if (confirm(t("diary.clearConfirm"))) {
                        saveEntries([]);
                        rerender();
                    }
                }}
                onExport={() => {
                    const entries = loadEntries();
                    const date  = new Date().toISOString().slice(0, 10);
                    const blob  = new Blob([JSON.stringify(entries, null, 2)], { type: "application/json" });
                    const url   = URL.createObjectURL(blob);
                    const a     = document.createElement("a");
                    a.href = url; a.download = `diario-emocional-${date}.json`;
                    document.body.appendChild(a); a.click(); a.remove();
                    setTimeout(() => URL.revokeObjectURL(url), 1000);
                }}
            />,
            content
        );
    }

    /** @param {string} emotionNombre @param {string} [note] @param {string[]} [tags] @returns {DiaryEntry} */
    function addEntry(emotionNombre, note = "", tags = []) {
        return addEntryToStorage(emotionNombre, note, tags);
    }

    function renderForTab() {
        showForm = false;
        rerender();
    }

    return { addEntry, renderForTab };
}
