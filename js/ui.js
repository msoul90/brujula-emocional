import { RECENT_KEY, RECENT_LIMIT } from "./constants.js";

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

    function saveRecentEmotion(nombre) {
        const existing = loadRecentEmotions().filter((item) => item !== nombre);
        const next = [nombre, ...existing].slice(0, RECENT_LIMIT);
        localStorage.setItem(RECENT_KEY, JSON.stringify(next));
        renderRecentEmotions();
    }

    function shortRecentLabel(nombre) {
        return nombre.length > 9 ? `${nombre.slice(0, 9)}...` : nombre;
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
                <span class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-800 text-white text-[10px] flex items-center justify-center sm:hidden shadow" aria-hidden="true">
                    <i class="fa-solid fa-eye"></i>
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
        const content = document.getElementById("modal-content");
        content.innerHTML = `
            <div class="inline-block px-4 py-1 rounded-full mb-2" style="background-color:${e.color}; color:${e.text}">
                <span class="text-xs font-black uppercase tracking-widest">${t("emotionTag")}</span>
            </div>
            <h2 class="text-4xl font-black mb-6 text-slate-800">${getDisplayName(e.nombre)}</h2>

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
                </div>

                <div class="relative p-6 rounded-3xl text-white overflow-hidden shadow-lg" style="background-color:${e.color}; color:${e.text}">
                     <i class="fa-solid fa-quote-left absolute -top-2 -left-2 text-black/10 text-6xl"></i>
                     <p class="text-[11px] font-black opacity-80 uppercase tracking-widest mb-2">${t("messageLabel")}</p>
                    <p class="text-[1.45rem] sm:text-[1.65rem] font-serif italic leading-[1.35] sm:leading-snug" style="color: rgba(0,0,0,0.78)">"${getEmotionField(e, "mensaje")}"</p>
                </div>

                <div>
                    <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 px-1">${t("responseLabel")}</p>
                    <div class="bg-emerald-50 border-2 border-emerald-100 p-4 rounded-2xl">
                        <p class="text-emerald-900 font-bold leading-relaxed">${getEmotionField(e, "respuesta")}</p>
                    </div>
                </div>
            </div>
        `;
        const modal = document.getElementById("modal");
        const panel = document.getElementById("modal-panel");
        modal.classList.remove("hidden");
        requestAnimationFrame(() => {
            modal.classList.remove("opacity-0");
            panel.classList.remove("translate-y-8", "sm:scale-95", "opacity-0");
        });
        document.body.style.overflow = "hidden";
        saveRecentEmotion(e.nombre);
        const closeButton = document.getElementById("close-button");
        if (closeButton) closeButton.focus();
    }

    function closeModal() {
        const modal = document.getElementById("modal");
        const panel = document.getElementById("modal-panel");

        if (modal.classList.contains("hidden") || getIsClosingModal()) return;

        setIsClosingModal(true);
        modal.classList.add("opacity-0");
        panel.classList.add("translate-y-8", "sm:scale-95", "opacity-0");

        setTimeout(() => {
            modal.classList.add("hidden");
            setIsClosingModal(false);
        }, modalAnimationMs);

        document.body.style.overflow = "auto";
        const lastFocusedCard = getLastFocusedCard();
        if (lastFocusedCard) lastFocusedCard.focus();
    }

    function bindBaseEvents() {
        const modal = document.getElementById("modal");
        const closeButton = document.getElementById("close-button");
        const search = document.getElementById("search");

        modal.addEventListener("click", (event) => {
            if (event.target.id === "modal") closeModal();
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && !modal.classList.contains("hidden")) {
                closeModal();
            }
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
