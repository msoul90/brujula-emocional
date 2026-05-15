import { DIARY_KEY } from "./constants.js";
import { normalizeText } from "./utils.js";

// --- Pure data functions (testable without DOM/localStorage) ---

export function parseDiaryEntries(raw) {
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export function createDiaryEntry(emotionNombre, note = "") {
    return {
        id: Date.now(),
        date: new Date().toISOString(),
        emotion: emotionNombre,
        note: note.trim()
    };
}

export function deleteDiaryEntryById(entries, id) {
    return entries.filter((e) => e.id !== id);
}

// --- UI factory ---

function loadEntries() {
    return parseDiaryEntries(localStorage.getItem(DIARY_KEY));
}

function saveEntries(entries) {
    localStorage.setItem(DIARY_KEY, JSON.stringify(entries));
}

function addEntry(emotionNombre, note = "") {
    const entry = createDiaryEntry(emotionNombre, note);
    saveEntries([entry, ...loadEntries()]);
    return entry;
}

function deleteEntry(id) {
    saveEntries(deleteDiaryEntryById(loadEntries(), id));
}

export function createDiary({ t, getDisplayName, emociones }) {
    function formatDate(isoString) {
        const d = new Date(isoString);
        const now = new Date();
        const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        if (d.toDateString() === now.toDateString()) return `${t("diaryTodayLabel")}, ${time}`;
        return `${d.toLocaleDateString([], { day: "numeric", month: "short", year: "numeric" })} · ${time}`;
    }

    function buildAddFormHtml() {
        return `
            <div id="diary-add-form" class="bg-white rounded-2xl p-4 shadow-sm mb-4 border-2 border-blue-100">
                <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">${t("diaryNewEntry")}</p>
                <div class="relative mb-3">
                    <input type="text" id="diary-emotion-search" autocomplete="off"
                        placeholder="${t("diaryPickEmotion")}"
                        class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200">
                    <input type="hidden" id="diary-emotion-value">
                    <div id="diary-emotion-dropdown"
                        class="hidden absolute z-50 left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border border-slate-200 hide-scroll"
                        style="max-height:11rem;overflow-y:auto"></div>
                </div>
                <textarea id="diary-note-input" rows="2" placeholder="${t("diaryNotePlaceholder")}"
                    class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 mb-3"></textarea>
                <div class="flex gap-2">
                    <button id="diary-form-save" type="button"
                        class="flex-1 bg-slate-800 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors">
                        ${t("diarySaveButton")}
                    </button>
                    <button id="diary-form-cancel" type="button"
                        class="flex-1 bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
                        ${t("diaryCancelButton")}
                    </button>
                </div>
            </div>
        `;
    }

    function wireEmotionSearch(content) {
        const searchInput = content.querySelector("#diary-emotion-search");
        const dropdown = content.querySelector("#diary-emotion-dropdown");
        const hiddenValue = content.querySelector("#diary-emotion-value");
        if (!searchInput || !dropdown || !hiddenValue) return;

        function renderDropdown(query) {
            const q = normalizeText(query.trim());
            const filtered = emociones.filter((e) => {
                const name = normalizeText(getDisplayName(e.nombre));
                return !q || name.includes(q) || normalizeText(e.nombre).includes(q);
            });

            if (!filtered.length) { dropdown.classList.add("hidden"); return; }

            dropdown.innerHTML = filtered.map((e) => `
                <button type="button" data-nombre="${e.nombre}"
                    class="emotion-option w-full text-left px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition-colors">
                    <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color:${e.color}"></span>
                    ${getDisplayName(e.nombre)}
                </button>
            `).join("");
            dropdown.classList.remove("hidden");

            for (const btn of dropdown.querySelectorAll(".emotion-option")) {
                btn.addEventListener("mousedown", (ev) => {
                    ev.preventDefault();
                    hiddenValue.value = btn.dataset.nombre;
                    searchInput.value = getDisplayName(btn.dataset.nombre);
                    searchInput.classList.remove("ring-2", "ring-red-300");
                    dropdown.classList.add("hidden");
                });
            }
        }

        searchInput.addEventListener("focus", () => renderDropdown(searchInput.value));
        searchInput.addEventListener("input", () => {
            hiddenValue.value = "";
            renderDropdown(searchInput.value);
        });
        searchInput.addEventListener("blur", () => { dropdown.classList.add("hidden"); });
        searchInput.addEventListener("keydown", (ev) => {
            if (ev.key === "Escape") { dropdown.classList.add("hidden"); searchInput.blur(); }
            if (ev.key === "Enter") { ev.preventDefault(); dropdown.querySelector(".emotion-option")?.dispatchEvent(new MouseEvent("mousedown")); }
            if (ev.key === "ArrowDown") { ev.preventDefault(); dropdown.querySelector(".emotion-option")?.focus(); }
        });

        dropdown.addEventListener("keydown", (ev) => {
            const focused = document.activeElement;
            if (ev.key === "ArrowDown") { ev.preventDefault(); focused.nextElementSibling?.focus(); }
            if (ev.key === "ArrowUp") { ev.preventDefault(); (focused.previousElementSibling ?? searchInput).focus(); }
        });
    }

    function renderContent(showForm = false) {
        const entries = loadEntries();
        const content = document.getElementById("diary-content");
        if (!content) return;

        const headerHtml = `
            <div class="flex items-center justify-between mb-4">
                <h2 id="diary-title-heading" class="text-xl font-black text-slate-800">${t("diaryTitle")}</h2>
                <button id="diary-new-btn" type="button"
                    class="flex items-center gap-1.5 bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded-xl hover:bg-slate-700 transition-colors">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                    ${t("diaryNewEntry")}
                </button>
            </div>
        `;

        const privacyHtml = `
            <p class="text-xs text-slate-400 mb-4 flex items-start gap-1.5">
                <svg class="w-3.5 h-3.5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                ${t("diaryPrivacyNote")}
            </p>
        `;

        const formHtml = showForm ? buildAddFormHtml() : "";

        let entriesHtml;
        if (entries.length) {
            entriesHtml = `
                <div class="space-y-3">
                    ${entries.map((entry) => {
                        const emotion = emociones.find((e) => e.nombre === entry.emotion);
                        const displayName = emotion ? getDisplayName(entry.emotion) : entry.emotion;
                        const color = emotion?.color ?? "#e2e8f0";
                        return `
                            <div class="bg-white rounded-2xl p-4 shadow-sm flex gap-3 items-start">
                                <div class="w-3 h-3 rounded-full mt-1 shrink-0" style="background-color:${color}"></div>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between gap-2 mb-0.5">
                                        <span class="font-bold text-slate-700 text-sm">${displayName}</span>
                                        <span class="text-xs text-slate-400 shrink-0">${formatDate(entry.date)}</span>
                                    </div>
                                    ${entry.note ? `<p class="text-slate-500 text-sm leading-relaxed">${entry.note}</p>` : ""}
                                </div>
                                <button type="button" class="diary-delete-btn text-slate-300 hover:text-red-400 transition-colors shrink-0" data-id="${entry.id}" aria-label="${t("diaryDeleteButton")}">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                                </button>
                            </div>
                        `;
                    }).join("")}
                </div>
                ${entries.length > 1 ? `
                    <button id="diary-clear-btn" type="button"
                        class="mt-5 w-full text-xs text-slate-400 hover:text-red-400 transition-colors py-2">
                        ${t("diaryClearAll")}
                    </button>
                ` : ""}
            `;
        } else {
            entriesHtml = `<p class="text-slate-400 text-sm text-center py-10">${t("diaryEmpty")}</p>`;
        }

        content.innerHTML = headerHtml + privacyHtml + formHtml + entriesHtml;

        if (showForm) wireEmotionSearch(content);

        content.querySelector("#diary-new-btn").addEventListener("click", () => {
            const formEl = content.querySelector("#diary-add-form");
            if (formEl) {
                formEl.remove();
            } else {
                renderContent(true);
                content.querySelector("#diary-emotion-search")?.focus();
            }
        });

        const saveBtn = content.querySelector("#diary-form-save");
        if (saveBtn) {
            saveBtn.addEventListener("click", () => {
                const emotionValue = content.querySelector("#diary-emotion-value");
                const searchInput = content.querySelector("#diary-emotion-search");
                const note = content.querySelector("#diary-note-input")?.value ?? "";
                if (!emotionValue?.value) {
                    searchInput?.focus();
                    searchInput?.classList.add("ring-2", "ring-red-300");
                    return;
                }
                addEntry(emotionValue.value, note);
                renderContent(false);
            });
            content.querySelector("#diary-form-cancel").addEventListener("click", () => renderContent(false));
        }

        for (const btn of content.querySelectorAll(".diary-delete-btn")) {
            btn.addEventListener("click", () => {
                deleteEntry(Number(btn.dataset.id));
                renderContent(false);
            });
        }

        const clearBtn = content.querySelector("#diary-clear-btn");
        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                if (confirm(t("diaryClearConfirm"))) {
                    saveEntries([]);
                    renderContent(false);
                }
            });
        }
    }

    function renderForTab() {
        renderContent();
    }

    return { addEntry, renderForTab };
}
