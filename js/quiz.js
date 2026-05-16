import { createBodyMap } from "./bodyMap.js";
import { isDarkMode } from "./utils.js";

export const QUIZ_STEPS = {
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
            { labelKey: "quizQ2A", result: ["Entusiasmo", "Alegría", "Orgullo"] },
            { labelKey: "quizQ2B", next: "q3_high_bad" }
        ]
    },
    q2_low: {
        textKey: "quizQ2",
        options: [
            { labelKey: "quizQ2A", result: ["Calma", "Felicidad", "Placer", "Gratitud", "Alivio", "Ternura"] },
            { labelKey: "quizQ2B", next: "q3_low_bad" }
        ]
    },
    q3_high_bad: {
        textKey: "quizQ3",
        options: [
            { labelKey: "quizQ3A", result: ["Enojo", "Frustración", "Miedo", "Celos", "Envidia", "Disgusto"] },
            { labelKey: "quizQ3B", result: ["Ansiedad", "Preocupación", "Irritabilidad"] }
        ]
    },
    q3_low_bad: {
        textKey: "quizQ3",
        options: [
            { labelKey: "quizQ3A", result: ["Tristeza", "Vergüenza", "Rechazo", "Culpa", "Decepción"] },
            { labelKey: "quizQ3B", result: ["Soledad", "Angustia", "Confusión", "Nostalgia", "Aburrimiento"] }
        ]
    }
};

export function createQuiz({ emociones, getDisplayName, t, showDetail, onShowAll }) {
    let history = [];
    let currentStepKey = "q1";

    const dismiss = () => {
        document.getElementById("quiz-panel").close();
        document.getElementById("quiz-trigger")?.focus();
    };

    const bodyMap = createBodyMap({
        emociones, getDisplayName, t, showDetail,
        onDismiss: dismiss,
        onSwitchToQuiz: () => { history = []; currentStepKey = "q1"; renderQuiz(); },
    });

    const open = () => {
        history = [];
        currentStepKey = "q1";
        document.getElementById("quiz-panel").showModal();
        renderQuiz();
    };

    const pickOption = (option) => {
        if (option.result) {
            renderResult(option.result);
        } else {
            history.push(currentStepKey);
            currentStepKey = option.next;
            renderQuiz();
        }
    };

    const headerHtml = (dark) => {
        const titleC = dark ? "text-slate-100" : "text-slate-800";
        const closeC = dark ? "bg-slate-700 text-slate-400 hover:bg-slate-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
        return `
            <div class="flex items-center justify-between mb-8">
                <h2 class="text-xl font-black ${titleC}">${t("quizTitle")}</h2>
                <button id="quiz-close-btn" type="button" aria-label="Cerrar"
                    class="w-8 h-8 flex items-center justify-center rounded-full ${closeC} transition-colors">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
            </div>
        `;
    };

    const bindCloseBtn = (content) => {
        content.querySelector("#quiz-close-btn").addEventListener("click", dismiss);
    };

    const renderResult = (emotionNames) => {
        const dark = isDarkMode();
        const emotions = emotionNames
            .map((nombre) => emociones.find((e) => e.nombre === nombre))
            .filter(Boolean);

        const titleC      = dark ? "text-slate-300" : "text-slate-500";
        const restartC    = dark ? "bg-slate-800 text-slate-200 hover:bg-slate-700" : "bg-slate-100 text-slate-700 hover:bg-slate-200";
        const closeResC   = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";

        const content = document.getElementById("quiz-content");
        content.innerHTML = `
            ${headerHtml(dark)}
            <p class="text-[11px] font-black ${titleC} uppercase tracking-widest mb-4">${t("quizResultTitle")}</p>
            <div class="space-y-3">
                ${emotions.map((e) => `
                    <button type="button" data-emotion="${e.nombre}"
                        class="quiz-result-card w-full text-left p-4 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all"
                        style="border-left:6px solid ${e.color}; background:${e.color}${dark ? "22" : "15"}">
                        <span class="font-bold" style="color:${e.text}">${getDisplayName(e.nombre)}</span>
                        <span class="ml-auto text-xs font-bold opacity-70 shrink-0" style="color:${e.text}">Ver →</span>
                    </button>
                `).join("")}
            </div>
            <button id="quiz-restart-btn" type="button"
                class="mt-6 w-full py-3 font-bold rounded-2xl text-sm transition-colors ${restartC}">
                ${t("quizRestart")}
            </button>
            <button id="quiz-close-result-btn" type="button"
                class="mt-2 w-full py-3 text-sm font-medium transition-colors ${closeResC}">
                ${t("quizClose")}
            </button>
        `;

        bindCloseBtn(content);
        content.querySelector("#quiz-restart-btn").addEventListener("click", () => {
            history = [];
            currentStepKey = "q1";
            renderQuiz();
        });
        content.querySelector("#quiz-close-result-btn").addEventListener("click", () => {
            dismiss();
            if (onShowAll) onShowAll();
        });

        for (const btn of content.querySelectorAll(".quiz-result-card")) {
            btn.addEventListener("click", () => {
                const emotion = emociones.find((e) => e.nombre === btn.dataset.emotion);
                if (emotion) { dismiss(); showDetail(emotion); }
            });
        }
        content.querySelector(".quiz-result-card")?.focus();
    };

    const renderQuiz = () => {
        const dark = isDarkMode();
        const step = QUIZ_STEPS[currentStepKey];
        const inactiveDot = dark ? "bg-slate-700" : "bg-slate-200";
        const dotsHtml = ["q1", "q2", "q3"].map((_, i) => {
            const active = i <= history.length;
            return `<div class="w-2 h-2 rounded-full transition-colors ${active ? "bg-blue-500" : inactiveDot}"></div>`;
        }).join("");

        const questionC = dark ? "text-slate-100" : "text-slate-800";
        const optionC   = dark ? "bg-slate-800 text-slate-200 border-slate-700 hover:border-blue-400" : "bg-white text-slate-700 border-transparent hover:border-blue-300";
        const backC     = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
        const toBodyC   = dark ? "text-slate-300 border-slate-600 hover:border-slate-400 hover:bg-slate-800" : "text-slate-500 border-slate-300 hover:border-slate-400 hover:bg-slate-50";

        const content = document.getElementById("quiz-content");
        content.innerHTML = `
            ${headerHtml(dark)}
            <div class="flex gap-2 mb-8" aria-hidden="true">${dotsHtml}</div>
            <p class="text-2xl font-black ${questionC} leading-snug mb-8">${t(step.textKey)}</p>
            <div class="space-y-3">
                ${step.options.map((opt, i) => `
                    <button type="button" data-option-index="${i}"
                        class="quiz-option w-full text-left p-5 rounded-2xl shadow-sm border-2 hover:shadow-md transition-all font-medium ${optionC}">
                        ${t(opt.labelKey)}
                    </button>
                `).join("")}
            </div>
            ${history.length > 0 ? `
                <button id="quiz-back-btn" type="button"
                    class="mt-6 flex items-center gap-2 text-sm font-medium transition-colors ${backC}">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    ${t("quizBack")}
                </button>
            ` : `
                <button id="quiz-to-body-btn" type="button"
                    class="mt-6 w-full py-3 text-sm font-semibold transition-colors border rounded-2xl ${toBodyC}">
                    ${t("quizTabBody")} →
                </button>
            `}
        `;

        bindCloseBtn(content);
        if (history.length > 0) {
            content.querySelector("#quiz-back-btn").addEventListener("click", () => {
                currentStepKey = history.pop();
                renderQuiz();
            });
        } else {
            content.querySelector("#quiz-to-body-btn").addEventListener("click", () => {
                bodyMap.render();
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

    return { init, open };
}
