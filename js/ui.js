import { RECENT_KEY, RECENT_LIMIT } from "./constants.js";

function normalizeText(value) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replaceAll(/[\u0300-\u036f]/g, "");
}

function loadRecentEmotions() {
    try {
        const parsed = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function shortRecentLabel(nombre) {
    return nombre.length > 9 ? `${nombre.slice(0, 9)}...` : nombre;
}

function getReadableTextColor(hexColor) {
    const safeHex = (hexColor || "").replace("#", "");
    if (safeHex.length !== 6) return "#0f172a";

    const r = Number.parseInt(safeHex.slice(0, 2), 16);
    const g = Number.parseInt(safeHex.slice(2, 4), 16);
    const b = Number.parseInt(safeHex.slice(4, 6), 16);

    if ([r, g, b].some(Number.isNaN)) return "#0f172a";

    // Relative luminance approximation to decide dark vs light text.
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.52 ? "#f8fafc" : "#0f172a";
}

export function createUI({
    emociones,
    getDisplayName,
    getEmotionField,
    t,
    getLastFocusedCard,
    setLastFocusedCard,
    getIsClosingModal,
    setIsClosingModal,
    modalAnimationMs
}) {
    function saveRecentEmotion(nombre) {
        const existing = loadRecentEmotions().filter((item) => item !== nombre);
        const next = [nombre, ...existing].slice(0, RECENT_LIMIT);
        localStorage.setItem(RECENT_KEY, JSON.stringify(next));
        renderRecentEmotions();
    }

    function renderRecentEmotions() {
        const section = document.getElementById("recent-section");
        const grid = document.getElementById("recent-grid");
        const recents = loadRecentEmotions();

        if (!recents.length) {
            section.classList.add("hidden");
            grid.innerHTML = "";
            return;
        }

        section.classList.remove("hidden");
        grid.innerHTML = "";

        recents.forEach((nombre) => {
            const emotion = emociones.find((e) => e.nombre === nombre);
            if (!emotion) return;

            const card = document.createElement("button");
            card.type = "button";
            card.className = "emotion-card relative overflow-visible shrink-0 w-20 h-20 rounded-full shadow-sm bg-white border-2 flex items-center justify-center text-center px-2 text-[11px] font-bold leading-tight text-slate-700";
            card.style.borderColor = emotion.color;
            const displayName = getDisplayName(emotion.nombre);
            card.setAttribute("aria-label", `${t("openEmotionAria")} ${displayName}`);
            card.title = displayName;
            card.innerHTML = `
                <span>${shortRecentLabel(displayName)}</span>
                <span class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center sm:hidden shadow" aria-hidden="true">
                    <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </span>
            `;
            card.addEventListener("click", () => {
                setLastFocusedCard(card);
                showDetail(emotion);
            });
            grid.appendChild(card);
        });
    }

    function renderEmociones(filter = "") {
        const grid = document.getElementById("emotion-grid");
        grid.innerHTML = "";
        const normalizedFilter = normalizeText(filter.trim());
        const filtered = emociones.filter((e) => {
            const haystack = [
                e.nombre,
                getDisplayName(e.nombre),
                e.siente,
                e.dispara,
                e.mensaje,
                getEmotionField(e, "siente"),
                getEmotionField(e, "dispara"),
                getEmotionField(e, "mensaje"),
                getEmotionField(e, "respuesta")
            ]
                .map(normalizeText)
                .join(" ");
            return haystack.includes(normalizedFilter);
        });

        if (!filtered.length) {
            const emptyState = document.createElement("div");
            emptyState.className = "bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-200";
            emptyState.innerHTML = `
                <p class="text-slate-700 font-bold mb-1">${t("emptyTitle")}</p>
                <p class="text-slate-500 text-sm">${t("emptyHint")}</p>
            `;
            grid.appendChild(emptyState);
            return;
        }

        filtered.forEach((e) => {
            const card = document.createElement("div");
            card.className = "emotion-card p-5 rounded-2xl shadow-sm cursor-pointer flex justify-between items-center bg-white";
            card.style.borderLeft = `8px solid ${e.color}`;
            card.tabIndex = 0;
            card.setAttribute("role", "button");
            card.setAttribute("aria-label", `${t("openDetailAria")} ${getDisplayName(e.nombre)}`);
            card.onclick = () => {
                setLastFocusedCard(card);
                showDetail(e);
            };
            card.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setLastFocusedCard(card);
                    showDetail(e);
                }
            });
            card.innerHTML = `
                <span class="font-bold text-lg text-slate-700">${getDisplayName(e.nombre)}</span>
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-400 uppercase tracking-wider">${t("openChip")}</span>
            `;
            grid.appendChild(card);
        });
    }

    function showDetail(e) {
        const quoteTextColor = getReadableTextColor(e.color);
        const quoteLabelColor = quoteTextColor === "#f8fafc" ? "rgba(248,250,252,0.9)" : "rgba(15,23,42,0.85)";

        const content = document.getElementById("modal-content");
        content.innerHTML = `
            <div class="inline-block px-4 py-1 rounded-full mb-2" style="background-color:${e.color}; color:${quoteTextColor}">
                <span class="text-xs font-black uppercase tracking-widest">${t("emotionTag")}</span>
            </div>
            <h2 id="modal-emotion-title" class="text-4xl font-black mb-6 text-slate-800">${getDisplayName(e.nombre)}</h2>

            <div class="space-y-6">
                <div class="grid grid-cols-1 gap-4">
                    <div class="bg-slate-50 p-4 rounded-2xl">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">${t("feelLabel")}</p>
                        <p class="text-slate-700 leading-relaxed font-medium">${getEmotionField(e, "siente")}</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-2xl">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">${t("triggerLabel")}</p>
                        <p class="text-slate-700 leading-relaxed font-medium">${getEmotionField(e, "dispara")}</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-2xl">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">${t("functionLabel")}</p>
                        <p class="text-slate-700 leading-relaxed font-medium">${getEmotionField(e, "funcion")}</p>
                    </div>
                </div>

                <div class="relative p-6 rounded-3xl overflow-hidden shadow-lg" style="background-color:${e.color}; color:${quoteTextColor}">
                    <svg class="absolute -top-2 -left-2 text-black/10 w-16 h-16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
                    <p class="text-[11px] font-black uppercase tracking-widest mb-2" style="color:${quoteLabelColor}">${t("messageLabel")}</p>
                    <p class="text-[1.45rem] sm:text-[1.65rem] font-serif italic leading-[1.35] sm:leading-snug" style="color:${quoteTextColor}">"${getEmotionField(e, "mensaje")}"</p>
                </div>

                <div>
                    <p class="text-[11px] font-black text-amber-600 uppercase tracking-widest mb-2 px-1">${t("impulseLabel")}</p>
                    <div class="bg-amber-50 border-2 border-amber-100 p-4 rounded-2xl">
                        <p class="text-amber-900 font-bold leading-relaxed">${getEmotionField(e, "impulso")}</p>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between mb-2 px-1">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest">${t("responseLabel")}</p>
                        <button id="copy-response-btn" type="button" class="flex items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors text-[11px] font-bold" aria-label="${t("copyButton")}">
                            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                            <span id="copy-response-label">${t("copyButton")}</span>
                        </button>
                    </div>
                    <div class="bg-emerald-50 border-2 border-emerald-100 p-4 rounded-2xl">
                        <p class="text-emerald-900 font-bold leading-relaxed">${getEmotionField(e, "respuesta")}</p>
                    </div>
                </div>
            </div>
        `;
        const modal = document.getElementById("modal");
        const panel = document.getElementById("modal-panel");
        modal.showModal();
        document.body.style.overflow = "hidden";
        requestAnimationFrame(() => {
            panel.classList.remove("translate-y-8", "sm:scale-95", "opacity-0");
        });
        saveRecentEmotion(e.nombre);

        const copyBtn = document.getElementById("copy-response-btn");
        const copyLabel = document.getElementById("copy-response-label");
        if (copyBtn && navigator.clipboard) {
            copyBtn.addEventListener("click", async () => {
                await navigator.clipboard.writeText(getEmotionField(e, "respuesta"));
                copyLabel.textContent = t("copiedFeedback");
                setTimeout(() => { copyLabel.textContent = t("copyButton"); }, 2000);
            });
        } else if (copyBtn) {
            copyBtn.remove();
        }

        const closeButton = document.getElementById("close-button");
        if (closeButton) closeButton.focus();
    }

    function closeModal() {
        const modal = document.getElementById("modal");
        const panel = document.getElementById("modal-panel");

        if (!modal.open || getIsClosingModal()) return;

        setIsClosingModal(true);
        panel.classList.add("translate-y-8", "sm:scale-95", "opacity-0");

        setTimeout(() => {
            modal.close();
            setIsClosingModal(false);
        }, modalAnimationMs);

        document.body.style.overflow = "auto";
        const lastFocusedCard = getLastFocusedCard();
        if (lastFocusedCard) lastFocusedCard.focus();
    }

    function bindBaseEvents() {
        const modal = document.getElementById("modal");
        const modalBackdrop = document.getElementById("modal-backdrop");
        const closeButton = document.getElementById("close-button");
        const search = document.getElementById("search");

        modalBackdrop.addEventListener("click", (event) => {
            if (event.target === modalBackdrop) closeModal();
        });

        modal.addEventListener("cancel", (event) => {
            event.preventDefault();
            closeModal();
        });

        closeButton.addEventListener("click", closeModal);
        search.addEventListener("input", (event) => renderEmociones(event.target.value));
    }

    return {
        renderRecentEmotions,
        renderEmociones,
        bindBaseEvents,
        closeModal
    };
}
