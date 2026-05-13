import { RECENT_KEY, RECENT_LIMIT } from "./constants.js";
import { normalizeText, getReadableTextColor, wrapTextLines } from "./utils.js";

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

function roundRectPath(ctx, x, y, w, h, radii) {
    const [tl, tr, br, bl] = Array.isArray(radii) ? radii : [radii, radii, radii, radii];
    ctx.moveTo(x + tl, y);
    ctx.lineTo(x + w - tr, y);
    ctx.arcTo(x + w, y, x + w, y + tr, tr);
    ctx.lineTo(x + w, y + h - br);
    ctx.arcTo(x + w, y + h, x + w - br, y + h, br);
    ctx.lineTo(x + bl, y + h);
    ctx.arcTo(x, y + h, x, y + h - bl, bl);
    ctx.lineTo(x, y + tl);
    ctx.arcTo(x, y, x + tl, y, tl);
    ctx.closePath();
}

async function buildEmotionCanvas(e, displayName, tagLabel, mensaje, responseLabel, respuesta) {
    await document.fonts.load('900 1px Inter').catch(() => {});
    const W = 1080, H = 1350, PAD = 84;
    const SANS = `'Inter', system-ui, -apple-system, sans-serif`;
    const SERIF = `Georgia, "Times New Roman", serif`;

    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");

    const textOnColor = getReadableTextColor(e.color);
    const tagAlpha = textOnColor === "#f8fafc" ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.4)";

    // Background
    ctx.fillStyle = "#f8fafc";
    ctx.beginPath();
    roundRectPath(ctx, 0, 0, W, H, 0);
    ctx.fill();

    // Colored accent top
    const ACCENT_H = 320;
    ctx.fillStyle = e.color;
    ctx.beginPath();
    roundRectPath(ctx, 0, 0, W, ACCENT_H, [0, 0, 0, 0]);
    ctx.fill();

    // Tag label
    ctx.fillStyle = tagAlpha;
    ctx.font = `600 26px ${SANS}`;
    ctx.fillText(tagLabel.toUpperCase(), PAD, 112);

    // Emotion name
    ctx.fillStyle = textOnColor;
    ctx.font = `900 92px ${SANS}`;
    ctx.fillText(displayName, PAD, 248);

    // Body content
    let y = ACCENT_H + 76;

    // Mensaje / quote
    ctx.fillStyle = "#475569";
    ctx.font = `italic 42px ${SERIF}`;
    const msgLines = wrapTextLines(ctx, `“${mensaje}”`, W - PAD * 2);
    for (const line of msgLines) {
        ctx.fillText(line, PAD, y);
        y += 64;
    }

    y += 48;

    // Divider
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(PAD, y);
    ctx.lineTo(W - PAD, y);
    ctx.stroke();

    y += 56;

    // Response label
    ctx.fillStyle = "#94a3b8";
    ctx.font = `700 22px ${SANS}`;
    ctx.fillText(responseLabel.toUpperCase(), PAD, y);
    y += 50;

    // Response text
    ctx.fillStyle = "#1e293b";
    ctx.font = `500 38px ${SANS}`;
    const respLines = wrapTextLines(ctx, respuesta, W - PAD * 2);
    for (const line of respLines) {
        ctx.fillText(line, PAD, y);
        y += 58;
    }

    // Decorative blobs — fill empty space below content
    const contentFloor = y + 20;
    if (contentFloor < H - 220) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, contentFloor, W, H - contentFloor);
        ctx.clip();
        ctx.fillStyle = e.color;
        // Large blob — right side, extends well into the empty area
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.arc(W * 0.85, H * 0.78, 380, 0, Math.PI * 2);
        ctx.fill();
        // Medium blob — bottom-left anchor
        ctx.globalAlpha = 0.14;
        ctx.beginPath();
        ctx.arc(W * 0.12, H * 0.92, 260, 0, Math.PI * 2);
        ctx.fill();
        // Small blob — center bottom
        ctx.globalAlpha = 0.1;
        ctx.beginPath();
        ctx.arc(W * 0.55, H * 0.96, 190, 0, Math.PI * 2);
        ctx.fill();
        // Fade top edge so blobs emerge gradually from the white area
        ctx.globalAlpha = 1;
        const fadeH = 80;
        const fade = ctx.createLinearGradient(0, contentFloor, 0, contentFloor + fadeH);
        fade.addColorStop(0, "#f8fafc");
        fade.addColorStop(1, "rgba(248,250,252,0)");
        ctx.fillStyle = fade;
        ctx.fillRect(0, contentFloor, W, fadeH);
        ctx.restore();
    }

    // Branding
    ctx.fillStyle = "#64748b";
    ctx.font = `400 26px ${SANS}`;
    const brand = "Brújula Emocional";
    ctx.fillText(brand, W - PAD - ctx.measureText(brand).width, H - 56);

    return canvas;
}

async function shareEmotionCard(canvas, filename) {
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    const file = new File([blob], `${filename}.png`, { type: "image/png" });

    if (navigator.canShare?.({ files: [file] })) {
        try {
            await navigator.share({ files: [file], title: filename });
        } catch {
            // user cancelled — ignore
        }
        return;
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function createUI({
    emociones,
    relaciones = [],
    getDisplayName,
    getEmotionField,
    t,
    getLastFocusedCard,
    setLastFocusedCard,
    getIsClosingModal,
    setIsClosingModal,
    modalAnimationMs,
    moodCategories = [],
    onAddToDiary = null
}) {
    let scrollCleanup = null;
    let activeCheckinCat = null;

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
            card.className = "emotion-card shrink-0 w-20 h-20 rounded-full shadow-sm bg-white border-4 flex items-center justify-center text-center px-2 text-[11px] font-bold leading-tight text-slate-700";
            card.style.borderColor = emotion.color;
            const displayName = getDisplayName(emotion.nombre);
            card.setAttribute("aria-label", `${t("openEmotionAria")} ${displayName}`);
            card.title = displayName;
            card.innerHTML = `<span>${shortRecentLabel(displayName)}</span>`;
            card.addEventListener("click", () => {
                setLastFocusedCard(card);
                showDetail(emotion);
            });
            grid.appendChild(card);
        });
    }

    function buildEmotionCardEl(e) {
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
            <svg class="w-4 h-4 text-slate-300 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
        `;
        return card;
    }

    const MOOD_SVGS = {
        agitado: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/>
            <line x1="26" y1="32" x2="34" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <line x1="54" y1="32" x2="46" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <circle cx="32" cy="42" r="2" fill="currentColor"/>
            <circle cx="48" cy="42" r="2" fill="currentColor"/>
            <path d="M30 54 L34 50 L38 54 L42 50 L46 54 L50 50" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        triste: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/>
            <path d="M28 40 C 30 44, 34 44, 36 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M44 40 C 46 44, 50 44, 52 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M32 56 C 36 50, 44 50, 48 56" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M34 48 C 33 52, 31 54, 32 56 C 33 56, 34 54, 34 48 Z" fill="currentColor"/>
        </svg>`,
        confundido: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/>
            <line x1="26" y1="34" x2="34" y2="32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <line x1="46" y1="32" x2="54" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <circle cx="32" cy="42" r="2" fill="currentColor"/>
            <circle cx="48" cy="42" r="2" fill="currentColor"/>
            <path d="M30 54 C 34 52, 38 56, 42 54 C 46 52, 48 56, 52 54" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
        bien: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/>
            <path d="M28 42 C 30 38, 34 38, 36 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M44 42 C 46 38, 50 38, 52 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M30 52 C 34 60, 46 60, 50 52" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
    };

    function renderCheckinTab() {
        const grid = document.getElementById("checkin-cards-grid");
        if (!grid || !moodCategories.length) return;

        grid.innerHTML = moodCategories.map((cat) => `
            <button type="button" data-mood="${cat.key}"
                class="checkin-card w-full p-5 rounded-2xl shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all active:scale-95"
                style="background-color:${cat.color};color:${cat.ink}">
                ${MOOD_SVGS[cat.key] ?? `<span class="text-3xl" aria-hidden="true">${cat.emoji}</span>`}
                <span class="font-black text-base leading-tight">${t(cat.labelKey)}</span>
            </button>
        `).join("");

        for (const btn of grid.querySelectorAll(".checkin-card")) {
            btn.addEventListener("click", () => renderCheckinEmotions(btn.dataset.mood));
        }

        if (activeCheckinCat) renderCheckinEmotions(activeCheckinCat);
    }

    function renderCheckinEmotions(catKey) {
        const cat = moodCategories.find((c) => c.key === catKey);
        if (!cat) return;

        activeCheckinCat = catKey;

        const section = document.getElementById("checkin-emotion-section");
        const label = document.getElementById("checkin-selected-label");
        const filteredGrid = document.getElementById("checkin-filtered-grid");
        const resetBtn = document.getElementById("checkin-reset-btn");
        if (!section || !filteredGrid) return;

        section.classList.remove("hidden");
        if (label) label.textContent = `${cat.emoji} ${t(cat.labelKey)}`;

        filteredGrid.innerHTML = "";
        for (const e of emociones.filter((em) => cat.emotions.includes(em.nombre))) {
            filteredGrid.appendChild(buildEmotionCardEl(e));
        }

        if (resetBtn) {
            const freshBtn = resetBtn.cloneNode(true);
            resetBtn.replaceWith(freshBtn);
            freshBtn.textContent = t("checkinReset");
            freshBtn.addEventListener("click", () => {
                activeCheckinCat = null;
                section.classList.add("hidden");
            });
        }

        section.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function renderEmociones(filter = "") {
        const grid = document.getElementById("emotion-grid");
        grid.innerHTML = "";
        const normalizedFilter = normalizeText(filter.trim());

        const filtered = emociones.filter((e) => {
            if (!normalizedFilter) return true;
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

        for (const e of filtered) {
            grid.appendChild(buildEmotionCardEl(e));
        }
    }

    function showDiaryForm(emotionNombre) {
        const existingForm = document.getElementById("diary-inline-form");
        if (existingForm) { existingForm.remove(); return; }

        const form = document.createElement("div");
        form.id = "diary-inline-form";
        form.className = "mt-4 border-t border-slate-100 pt-4";
        form.innerHTML = `
            <label for="diary-note-input" class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 block">${t("diaryNoteLabel")}</label>
            <textarea id="diary-note-input" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200" rows="2" placeholder="${t("diaryNotePlaceholder")}"></textarea>
            <div class="flex gap-2 mt-2">
                <button id="diary-note-save" type="button" class="flex-1 bg-slate-800 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors">${t("diarySaveButton")}</button>
                <button id="diary-note-cancel" type="button" class="flex-1 bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">${t("diaryCancelButton")}</button>
            </div>
        `;

        const panel = document.getElementById("modal-panel");
        panel.appendChild(form);
        form.querySelector("#diary-note-input").focus();
        panel.scrollTop = panel.scrollHeight;

        form.querySelector("#diary-note-save").addEventListener("click", () => {
            const note = form.querySelector("#diary-note-input").value;
            if (onAddToDiary) onAddToDiary(emotionNombre, note);
            form.innerHTML = `<p class="text-emerald-600 font-bold text-sm text-center py-2">✓ ${t("diaryAddedFeedback")}</p>`;
            setTimeout(() => form.remove(), 1800);
        });

        form.querySelector("#diary-note-cancel").addEventListener("click", () => form.remove());
    }

    function wireDiaryButton(emotionNombre) {
        const diaryAddBtn = document.getElementById("diary-add-btn");
        if (!diaryAddBtn || !onAddToDiary) return;
        const freshBtn = diaryAddBtn.cloneNode(true);
        diaryAddBtn.replaceWith(freshBtn);
        freshBtn.addEventListener("click", () => showDiaryForm(emotionNombre));
    }

    function showDetail(e) {
        document.getElementById("diary-inline-form")?.remove();

        const quoteTextColor = getReadableTextColor(e.color);
        const quoteLabelColor = quoteTextColor === "#f8fafc" ? "rgba(248,250,252,0.9)" : "rgba(15,23,42,0.85)";

        const maskedEmotions = relaciones
            .filter((r) => r.type === "enmascara" && r.from === e.nombre)
            .map((r) => emociones.find((em) => em.nombre === r.to))
            .filter(Boolean);

        const masksSection = maskedEmotions.length > 0 ? `
                <div class="border-t border-slate-100 pt-4">
                    <p class="text-[11px] font-black text-violet-500 uppercase tracking-widest mb-2 px-1">${t("mapRelEnmascara")}</p>
                    <div class="flex flex-wrap gap-2 mb-2">
                        ${maskedEmotions.map((m) => `
                            <button type="button" data-masked="${m.nombre}"
                                class="masked-chip px-3 py-1.5 rounded-full text-sm font-bold transition-opacity hover:opacity-80"
                                style="background-color:${m.color}; color:${getReadableTextColor(m.color)}">
                                ${getDisplayName(m.nombre)}
                            </button>
                        `).join("")}
                    </div>
                    <p class="text-xs text-slate-400 px-1">${t("masksHint")}</p>
                </div>
        ` : "";

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

                ${masksSection}
            </div>
        `;
        const modal = document.getElementById("modal");
        const panel = document.getElementById("modal-panel");
        if (!modal.open) modal.showModal();
        panel.scrollTop = 0;
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

        for (const chip of content.querySelectorAll(".masked-chip")) {
            chip.addEventListener("click", () => {
                const masked = emociones.find((em) => em.nombre === chip.dataset.masked);
                if (masked) showDetail(masked);
            });
        }

        const closeButton = document.getElementById("close-button");
        if (closeButton) closeButton.focus({ preventScroll: true });

        const shareBtn = document.getElementById("share-btn");
        if (shareBtn) {
            const freshShareBtn = shareBtn.cloneNode(true);
            shareBtn.replaceWith(freshShareBtn);
            freshShareBtn.addEventListener("click", async () => {
                const canvas = await buildEmotionCanvas(
                    e,
                    getDisplayName(e.nombre),
                    t("emotionTag"),
                    getEmotionField(e, "mensaje"),
                    t("responseLabel"),
                    getEmotionField(e, "respuesta")
                );
                shareEmotionCard(canvas, getDisplayName(e.nombre));
            });
        }

        wireDiaryButton(e.nombre);


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

        if (!modal.open || getIsClosingModal()) return;

        setIsClosingModal(true);
        panel.classList.add("translate-y-8", "sm:scale-95", "opacity-0");
        if (scrollCleanup) { scrollCleanup(); scrollCleanup = null; }

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
        renderCheckinTab,
        renderCheckinEmotions,
        bindBaseEvents,
        closeModal,
        showDetail
    };
}
