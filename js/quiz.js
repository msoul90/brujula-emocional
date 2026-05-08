const QUIZ_STEPS = {
    q1: {
        textKey: "quizQ1",
        options: [
            { labelKey: "quizQ1A", next: "q2_high" },
            { labelKey: "quizQ1B", next: "q2_low" }
        ]
    },
    q2_high: {
        textKey: "quizQ2",
        options: [
            { labelKey: "quizQ2A", result: ["Entusiasmo", "Alegría"] },
            { labelKey: "quizQ2B", next: "q3_high_bad" }
        ]
    },
    q2_low: {
        textKey: "quizQ2",
        options: [
            { labelKey: "quizQ2A", result: ["Calma", "Felicidad", "Placer"] },
            { labelKey: "quizQ2B", next: "q3_low_bad" }
        ]
    },
    q3_high_bad: {
        textKey: "quizQ3",
        options: [
            { labelKey: "quizQ3A", result: ["Enojo", "Frustración", "Miedo", "Celos"] },
            { labelKey: "quizQ3B", result: ["Ansiedad", "Preocupación", "Irritabilidad"] }
        ]
    },
    q3_low_bad: {
        textKey: "quizQ3",
        options: [
            { labelKey: "quizQ3A", result: ["Tristeza", "Vergüenza", "Rechazo", "Culpa"] },
            { labelKey: "quizQ3B", result: ["Soledad", "Angustia", "Confusión"] }
        ]
    }
};

export function createQuiz({ emociones, getDisplayName, t, showDetail }) {
    let history = [];
    let currentStepKey = "q1";

    const dismiss = () => {
        document.getElementById("quiz-panel").close();
        document.getElementById("quiz-trigger")?.focus();
    };

    const open = () => {
        history = [];
        currentStepKey = "q1";
        document.getElementById("quiz-panel").showModal();
        render();
    };

    const pickOption = (option) => {
        if (option.result) {
            renderResult(option.result);
        } else {
            history.push(currentStepKey);
            currentStepKey = option.next;
            render();
        }
    };

    const headerHtml = () => `
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-xl font-black text-slate-800">${t("quizTitle")}</h2>
            <button id="quiz-close-btn" type="button" aria-label="Cerrar"
                class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>
        </div>
    `;

    const bindCloseBtn = (content) => {
        content.querySelector("#quiz-close-btn").addEventListener("click", dismiss);
    };

    const renderResult = (emotionNames) => {
        const emotions = emotionNames
            .map((nombre) => emociones.find((e) => e.nombre === nombre))
            .filter(Boolean);

        const content = document.getElementById("quiz-content");
        content.innerHTML = `
            ${headerHtml()}
            <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-4">${t("quizResultTitle")}</p>
            <div class="space-y-3">
                ${emotions.map((e) => `
                    <button type="button" data-emotion="${e.nombre}"
                        class="quiz-result-card w-full text-left p-4 rounded-2xl bg-white shadow-sm flex items-center gap-4 hover:shadow-md transition-all"
                        style="border-left: 6px solid ${e.color}">
                        <span class="font-bold text-slate-700">${getDisplayName(e.nombre)}</span>
                        <span class="ml-auto text-xs font-bold text-slate-400 shrink-0">Ver →</span>
                    </button>
                `).join("")}
            </div>
            <button id="quiz-restart-btn" type="button"
                class="mt-6 w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-2xl text-sm hover:bg-slate-200 transition-colors">
                ${t("quizRestart")}
            </button>
            <button id="quiz-close-result-btn" type="button"
                class="mt-2 w-full py-3 text-slate-400 text-sm font-medium">
                ${t("quizClose")}
            </button>
        `;

        bindCloseBtn(content);
        content.querySelector("#quiz-restart-btn").addEventListener("click", () => {
            history = [];
            currentStepKey = "q1";
            render();
        });
        content.querySelector("#quiz-close-result-btn").addEventListener("click", dismiss);

        for (const btn of content.querySelectorAll(".quiz-result-card")) {
            btn.addEventListener("click", () => {
                const emotion = emociones.find((e) => e.nombre === btn.dataset.emotion);
                if (emotion) { dismiss(); showDetail(emotion); }
            });
        }
        content.querySelector(".quiz-result-card")?.focus();
    };

    const render = () => {
        const step = QUIZ_STEPS[currentStepKey];
        const dotsHtml = ["q1", "q2", "q3"].map((_, i) => {
            const active = i <= history.length;
            return `<div class="w-2 h-2 rounded-full transition-colors ${active ? "bg-blue-500" : "bg-slate-200"}"></div>`;
        }).join("");

        const content = document.getElementById("quiz-content");
        content.innerHTML = `
            ${headerHtml()}
            <div class="flex gap-2 mb-8" aria-hidden="true">${dotsHtml}</div>
            <p class="text-2xl font-black text-slate-800 leading-snug mb-8">${t(step.textKey)}</p>
            <div class="space-y-3">
                ${step.options.map((opt, i) => `
                    <button type="button" data-option-index="${i}"
                        class="quiz-option w-full text-left p-5 bg-white rounded-2xl shadow-sm border-2 border-transparent hover:border-blue-300 hover:shadow-md transition-all font-medium text-slate-700">
                        ${t(opt.labelKey)}
                    </button>
                `).join("")}
            </div>
            ${history.length > 0 ? `
                <button id="quiz-back-btn" type="button"
                    class="mt-6 flex items-center gap-2 text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    ${t("quizBack")}
                </button>
            ` : ""}
        `;

        bindCloseBtn(content);
        if (history.length > 0) {
            content.querySelector("#quiz-back-btn").addEventListener("click", () => {
                currentStepKey = history.pop();
                render();
            });
        }
        for (const btn of content.querySelectorAll(".quiz-option")) {
            btn.addEventListener("click", () => pickOption(step.options[Number.parseInt(btn.dataset.optionIndex)]));
        }
        content.querySelector(".quiz-option")?.focus();
    };

    const init = () => {
        const trigger = document.getElementById("quiz-trigger");
        const panel = document.getElementById("quiz-panel");
        if (!trigger || !panel) return;

        trigger.addEventListener("click", open);
        panel.addEventListener("cancel", (e) => { e.preventDefault(); dismiss(); });
    };

    return { init };
}
