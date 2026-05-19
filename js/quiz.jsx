// @ts-check
import { render } from "preact";
import { createBodyMap } from "./bodyMap.jsx";
import { isDarkMode } from "./utils.js";
import { emit } from "./bus.js";
import { DEFAULT_TAB } from "./constants.js";

/**
 * @typedef {{ labelKey: string, next?: string, result?: string[] }} QuizOption
 * @typedef {{ textKey: string, options: QuizOption[] }} QuizStepData
 */

export const QUIZ_STEPS = {
    q1: {
        textKey: "quiz.q1",
        options: [
            { labelKey: "quiz.q1a", next: "q2_high" },
            { labelKey: "quiz.q1b", next: "q2_low" }
        ]
    },
    q2_high: {
        textKey: "quiz.q2",
        options: [
            { labelKey: "quiz.q2a", result: ["Entusiasmo", "Alegría", "Orgullo"] },
            { labelKey: "quiz.q2b", next: "q3_high_bad" }
        ]
    },
    q2_low: {
        textKey: "quiz.q2",
        options: [
            { labelKey: "quiz.q2a", result: ["Calma", "Felicidad", "Placer", "Gratitud", "Alivio", "Ternura"] },
            { labelKey: "quiz.q2b", next: "q3_low_bad" }
        ]
    },
    q3_high_bad: {
        textKey: "quiz.q3",
        options: [
            { labelKey: "quiz.q3a", result: ["Enojo", "Frustración", "Miedo", "Celos", "Envidia", "Disgusto"] },
            { labelKey: "quiz.q3b", result: ["Ansiedad", "Preocupación", "Irritabilidad"] }
        ]
    },
    q3_low_bad: {
        textKey: "quiz.q3",
        options: [
            { labelKey: "quiz.q3a", result: ["Tristeza", "Vergüenza", "Rechazo", "Culpa", "Decepción"] },
            { labelKey: "quiz.q3b", result: ["Soledad", "Angustia", "Confusión", "Nostalgia", "Aburrimiento"] }
        ]
    }
};

const CloseX = () => (
    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
);

/** @param {{ t: import('./types.js').TFn, dark: boolean, onDismiss: () => void }} props */
function QuizHeader({ t, dark, onDismiss }) {
    const titleC = dark ? "text-slate-100" : "text-slate-800";
    const closeC = dark ? "bg-slate-700 text-slate-400 hover:bg-slate-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
    return (
        <div class="flex items-center justify-between mb-8">
            <h2 class={`text-xl font-black ${titleC}`}>{t("quiz.title")}</h2>
            <button type="button" id="quiz-close-btn" aria-label="Cerrar" onClick={onDismiss}
                class={`w-8 h-8 flex items-center justify-center rounded-full ${closeC} transition-colors`}>
                <CloseX />
            </button>
        </div>
    );
}

/** @param {{ t: import('./types.js').TFn, dark: boolean, step: QuizStepData, historyLen: number, onPickOption: (opt: QuizOption) => void, onBack: () => void, onSwitchToBody: () => void }} props */
function QuizStep({ t, dark, step, historyLen, onPickOption, onBack, onSwitchToBody }) {
    const questionC   = dark ? "text-slate-100" : "text-slate-800";
    const optionC     = dark ? "bg-slate-800 text-slate-200 border-slate-700 hover:border-blue-400" : "bg-white text-slate-700 border-transparent hover:border-blue-300";
    const backC       = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
    const toBodyC     = dark ? "text-slate-300 border-slate-600 hover:border-slate-400 hover:bg-slate-800" : "text-slate-500 border-slate-300 hover:border-slate-400 hover:bg-slate-50";
    const inactiveDot = dark ? "bg-slate-700" : "bg-slate-200";
    return (
        <div>
            <div class="flex gap-2 mb-8" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                    <div key={i} class={`w-2 h-2 rounded-full transition-colors ${i <= historyLen ? "bg-blue-500" : inactiveDot}`} />
                ))}
            </div>
            <p class={`text-2xl font-black ${questionC} leading-snug mb-8`}>{t(step.textKey)}</p>
            <div class="space-y-3">
                {step.options.map((opt) => (
                    <button key={opt.labelKey} type="button"
                        class={`quiz-option w-full text-left p-5 rounded-2xl shadow-sm border-2 hover:shadow-md transition-all font-medium ${optionC}`}
                        onClick={() => onPickOption(opt)}>
                        {t(opt.labelKey)}
                    </button>
                ))}
            </div>
            {historyLen > 0 ? (
                <button type="button" onClick={onBack}
                    class={`mt-6 flex items-center gap-2 text-sm font-medium transition-colors ${backC}`}>
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                    </svg>
                    {t("quiz.back")}
                </button>
            ) : (
                <button type="button" onClick={onSwitchToBody}
                    class={`mt-6 w-full py-3 text-sm font-semibold transition-colors border rounded-2xl ${toBodyC}`}>
                    {t("quiz.tabBody")} →
                </button>
            )}
        </div>
    );
}

/**
 * @param {{ t: import('./types.js').TFn, dark: boolean, emotions: import('./data/emotions.js').Emotion[], getDisplayName: import('./types.js').GetDisplayNameFn, onRestart: () => void, onDismiss: () => void }} props
 */
function QuizResult({ t, dark, emotions, getDisplayName, onRestart, onDismiss }) {
    const titleC   = dark ? "text-slate-300" : "text-slate-500";
    const restartC = dark ? "bg-slate-800 text-slate-200 hover:bg-slate-700" : "bg-slate-100 text-slate-700 hover:bg-slate-200";
    const closeC   = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
    return (
        <div>
            <p class={`text-[11px] font-black ${titleC} uppercase tracking-widest mb-4`}>{t("quiz.resultTitle")}</p>
            <div class="space-y-3">
                {emotions.map((e) => (
                    <button key={e.nombre} type="button"
                        class="quiz-result-card w-full text-left p-4 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all"
                        style={`border-left:6px solid ${e.color}; background:${e.color}${dark ? "22" : "15"}`}
                        onClick={() => { onDismiss(); emit("emotion:select", { nombre: e.nombre }); }}>
                        <span class="font-bold" style={`color:${e.text}`}>{getDisplayName(e.nombre)}</span>
                        <span class="ml-auto text-xs font-bold opacity-70 shrink-0" style={`color:${e.text}`}>Ver →</span>
                    </button>
                ))}
            </div>
            <button type="button" id="quiz-restart-btn" onClick={onRestart}
                class={`mt-6 w-full py-3 font-bold rounded-2xl text-sm transition-colors ${restartC}`}>
                {t("quiz.restart")}
            </button>
            <button type="button" id="quiz-close-result-btn" onClick={() => { onDismiss(); emit("tab:switch", { tabId: DEFAULT_TAB }); }}
                class={`mt-2 w-full py-3 text-sm font-medium transition-colors ${closeC}`}>
                {t("quiz.close")}
            </button>
        </div>
    );
}

/**
 * @param {{ emociones: import('./data/emotions.js').Emotion[], getDisplayName: import('./types.js').GetDisplayNameFn, t: import('./types.js').TFn }} opts
 * @returns {{ init: () => void, open: () => void }}
 */
export function createQuiz({ emociones, getDisplayName, t }) {
    /** @type {string[]} */
    let history        = [];
    let currentStepKey = "q1";
    let showingResult  = false;
    /** @type {import('./data/emotions.js').Emotion[]} */
    let resultEmotions = [];
    /** @type {HTMLElement | null} */
    let contentEl      = null;

    const dismiss = () => {
        /** @type {HTMLDialogElement | null} */ (document.getElementById("quiz-panel"))?.close();
        document.getElementById("quiz-trigger")?.focus();
    };

    const bodyMap = createBodyMap({
        emociones, getDisplayName, t,
        onDismiss: dismiss,
        onSwitchToQuiz: () => {
            history = []; currentStepKey = "q1"; showingResult = false; resultEmotions = [];
            rerender();
        },
    });

    function rerender() {
        if (!contentEl) return;
        const dark = isDarkMode();
        if (showingResult) {
            render(
                <div>
                    <QuizHeader t={t} dark={dark} onDismiss={dismiss} />
                    <QuizResult t={t} dark={dark} emotions={resultEmotions}
                        getDisplayName={getDisplayName}
                        onRestart={() => { history = []; currentStepKey = "q1"; showingResult = false; resultEmotions = []; rerender(); }}
                        onDismiss={dismiss} />
                </div>,
                contentEl
            );
        } else {
            render(
                <div>
                    <QuizHeader t={t} dark={dark} onDismiss={dismiss} />
                    <QuizStep t={t} dark={dark} step={/** @type {Record<string, QuizStepData>} */ (QUIZ_STEPS)[currentStepKey]}
                        historyLen={history.length}
                        onPickOption={pickOption}
                        onBack={() => { currentStepKey = history.pop() ?? "q1"; rerender(); }}
                        onSwitchToBody={() => bodyMap.render()} />
                </div>,
                contentEl
            );
        }
    }

    /** @param {QuizOption} option */
    function pickOption(option) {
        if (option.result) {
            resultEmotions = /** @type {import('./data/emotions.js').Emotion[]} */ (
                option.result
                    .map((nombre) => emociones.find((e) => e.nombre === nombre))
                    .filter(Boolean)
            );
            showingResult = true;
        } else {
            history.push(currentStepKey);
            currentStepKey = option.next;
        }
        rerender();
    }

    const open = () => {
        history = []; currentStepKey = "q1"; showingResult = false; resultEmotions = [];
        contentEl = document.getElementById("quiz-content");
        /** @type {HTMLDialogElement | null} */ (document.getElementById("quiz-panel"))?.showModal();
        rerender();
    };

    const init = () => {
        const trigger = document.getElementById("quiz-trigger");
        const panel   = document.getElementById("quiz-panel");
        if (!trigger || !panel) return;
        trigger.addEventListener("click", open);
        panel.addEventListener("cancel", (e) => { e.preventDefault(); dismiss(); });
    };

    return { init, open };
}
