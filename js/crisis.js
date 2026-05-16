function closeCrisis() {
    document.getElementById("crisis-panel")?.close();
    document.getElementById("crisis-trigger-btn")?.focus();
}

export function createCrisisFlow({ t }) {
    const TOTAL_STEPS = 3;

    function buildStep1() {
        return `
            <div class="text-center mb-8">
                <div class="text-5xl mb-4" aria-hidden="true">🌊</div>
                <h3 class="text-2xl font-black text-slate-800 mb-3">${t("crisisStep1Title")}</h3>
                <p class="text-slate-600 leading-relaxed">${t("crisisStep1Body")}</p>
            </div>
            <button id="crisis-next-btn" type="button"
                class="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors">
                ${t("crisisNext")}
            </button>
        `;
    }

    function buildStep2() {
        const items = t("crisisStep2Items").split("|");
        const listItems = items.map((item, i) => `
            <li class="flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0">
                <span class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black flex items-center justify-center shrink-0">${items.length - i}</span>
                <span class="text-slate-700 font-medium text-sm">${item}</span>
            </li>
        `).join("");

        return `
            <div class="mb-6">
                <h3 class="text-2xl font-black text-slate-800 mb-1">${t("crisisStep2Title")}</h3>
                <p class="text-slate-500 text-sm mb-4">${t("crisisStep2Intro")}</p>
                <ul class="divide-y divide-slate-100">${listItems}</ul>
            </div>
            <button id="crisis-next-btn" type="button"
                class="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors">
                ${t("crisisDone")}
            </button>
        `;
    }

    function buildStep3() {
        const actions = t("crisisStep3Actions").split("|");
        const actionItems = actions.map((action, i) => `
            <label class="flex items-center gap-3 py-3 cursor-pointer group">
                <input type="radio" name="crisis-action" value="${i}"
                    class="w-4 h-4 accent-slate-800 shrink-0">
                <span class="text-slate-700 font-medium text-sm group-hover:text-slate-900 transition-colors">${action}</span>
            </label>
        `).join("");

        return `
            <div class="mb-6">
                <h3 class="text-2xl font-black text-slate-800 mb-1">${t("crisisStep3Title")}</h3>
                <p class="text-slate-500 text-sm mb-4">${t("crisisStep3Intro")}</p>
                <div class="divide-y divide-slate-100">${actionItems}</div>
            </div>
            <p class="text-slate-400 text-xs text-center mb-4">${t("crisisStep3End")}</p>
            <button id="crisis-close-btn" type="button"
                class="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors">
                ${t("crisisClose")}
            </button>
        `;
    }

    function getStepBody(step) {
        if (step === 1) return buildStep1();
        if (step === 2) return buildStep2();
        return buildStep3();
    }

    function renderStep(panel, step) {
        const progressHtml = `
            <div class="flex items-center justify-between mb-6">
                <span class="text-xs font-bold text-slate-400">${t("crisisStep")} ${step} ${t("crisisOf")} ${TOTAL_STEPS}</span>
                <div class="flex gap-1.5">
                    ${Array.from({ length: TOTAL_STEPS }, (_, i) => `
                        <div class="h-1.5 w-8 rounded-full ${i < step ? "bg-slate-800" : "bg-slate-200"}"></div>
                    `).join("")}
                </div>
            </div>
        `;

        panel.innerHTML = progressHtml + getStepBody(step);

        panel.querySelector("#crisis-next-btn")?.addEventListener("click", () => renderStep(panel, step + 1));
        panel.querySelector("#crisis-close-btn")?.addEventListener("click", closeCrisis);
    }

    function open() {
        const dialog = document.getElementById("crisis-panel");
        const panel = document.getElementById("crisis-content");
        if (!dialog || !panel) return;
        renderStep(panel, 1);
        dialog.showModal();
    }

    function init() {
        document.getElementById("crisis-trigger-btn")?.addEventListener("click", open);
        document.getElementById("crisis-panel-close")?.addEventListener("click", closeCrisis);

        const dialog = document.getElementById("crisis-panel");
        dialog?.addEventListener("click", (ev) => {
            if (ev.target === dialog) closeCrisis();
        });
        dialog?.addEventListener("cancel", (ev) => {
            ev.preventDefault();
            closeCrisis();
        });
    }

    return { init };
}
