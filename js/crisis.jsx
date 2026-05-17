import { render } from "preact";

const TOTAL_STEPS = 3;

function Progress({ t, step }) {
    return (
        <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-bold text-slate-400">
                {t("crisis.step")} {step} {t("crisis.of")} {TOTAL_STEPS}
            </span>
            <div class="flex gap-1.5">
                {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                    <div class={`h-1.5 w-8 rounded-full ${i < step ? "bg-slate-800" : "bg-slate-200"}`} />
                ))}
            </div>
        </div>
    );
}

function Step1({ t, onNext }) {
    return (
        <div>
            <div class="text-center mb-8">
                <div class="text-5xl mb-4" aria-hidden="true">🌊</div>
                <h3 class="text-2xl font-black text-slate-800 mb-3">{t("crisis.step1Title")}</h3>
                <p class="text-slate-600 leading-relaxed">{t("crisis.step1Body")}</p>
            </div>
            <button id="crisis-next-btn" type="button" onClick={onNext}
                class="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors">
                {t("crisis.next")}
            </button>
        </div>
    );
}

function Step2({ t, onNext }) {
    const items = t("crisis.step2Items").split("|");
    return (
        <div>
            <div class="mb-6">
                <h3 class="text-2xl font-black text-slate-800 mb-1">{t("crisis.step2Title")}</h3>
                <p class="text-slate-500 text-sm mb-4">{t("crisis.step2Intro")}</p>
                <ul class="divide-y divide-slate-100">
                    {items.map((item, i) => (
                        <li key={i} class="flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0">
                            <span class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black flex items-center justify-center shrink-0">
                                {items.length - i}
                            </span>
                            <span class="text-slate-700 font-medium text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <button id="crisis-next-btn" type="button" onClick={onNext}
                class="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors">
                {t("crisis.done")}
            </button>
        </div>
    );
}

function Step3({ t, onClose }) {
    const actions = t("crisis.step3Actions").split("|");
    return (
        <div>
            <div class="mb-6">
                <h3 class="text-2xl font-black text-slate-800 mb-1">{t("crisis.step3Title")}</h3>
                <p class="text-slate-500 text-sm mb-4">{t("crisis.step3Intro")}</p>
                <div class="divide-y divide-slate-100">
                    {actions.map((action, i) => (
                        <label key={i} class="flex items-center gap-3 py-3 cursor-pointer group">
                            <input type="radio" name="crisis-action" value={String(i)}
                                class="w-4 h-4 accent-slate-800 shrink-0" />
                            <span class="text-slate-700 font-medium text-sm group-hover:text-slate-900 transition-colors">
                                {action}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
            <p class="text-slate-400 text-xs text-center mb-4">{t("crisis.step3End")}</p>
            <button id="crisis-close-btn" type="button" onClick={onClose}
                class="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors">
                {t("crisis.close")}
            </button>
        </div>
    );
}

function CrisisFlow({ t, step, onNext, onClose }) {
    return (
        <div>
            <Progress t={t} step={step} />
            {step === 1 && <Step1 t={t} onNext={onNext} />}
            {step === 2 && <Step2 t={t} onNext={onNext} />}
            {step === 3 && <Step3 t={t} onClose={onClose} />}
        </div>
    );
}

function closeCrisis() {
    document.getElementById("crisis-panel")?.close();
    document.getElementById("crisis-trigger-btn")?.focus();
}

export function createCrisisFlow({ t }) {
    let step = 1;
    let contentEl = null;

    function rerender() {
        render(
            <CrisisFlow t={t} step={step} onNext={handleNext} onClose={closeCrisis} />,
            contentEl
        );
    }

    function handleNext() {
        if (step >= TOTAL_STEPS) return;
        step++;
        rerender();
    }

    function open() {
        const dialog = document.getElementById("crisis-panel");
        contentEl = document.getElementById("crisis-content");
        if (!dialog || !contentEl) return;
        step = 1;
        rerender();
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
