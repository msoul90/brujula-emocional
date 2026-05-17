import { emociones, MOOD_CATEGORIES, EMOTION_RELATIONS } from "./js/constants.js";
import { createI18n } from "./js/i18n.js";
import { createUI } from "./js/ui.js";
import { createQuiz } from "./js/quiz.js";
import { createDiary } from "./js/diary.js";
import { createEmotionMap } from "./js/emotionMap.js";
import { createCrisisFlow } from "./js/crisis.jsx";
import { initSettings } from "./js/settings.js";
import { initInstall } from "./js/install.js";
import { initOfflineBanner } from "./js/offlineBanner.js";
import { initServiceWorker } from "./js/serviceWorker.js";
import { on } from "./js/bus.js";
import { get, set } from "./js/store.js";
import { BUILD_VERSION } from "./js/version.js";

const reducedMotion = globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
const modalAnimationMs = reducedMotion ? 0 : 200;

let ui;
let diary;
let quiz;
let emotionMap;

const i18n = createI18n({
    getLang: () => get("currentLang"),
    setLang: (lang) => set("currentLang", lang),
    onLanguageChanged: () => {
        ui.renderCheckinTab();
        ui.renderRecentEmotions();
        ui.renderEmociones(document.getElementById("search")?.value ?? "");
        if (get("currentTab") === "diario") diary.renderForTab();
        emotionMap?.onLanguageChanged();
        const bannerText = document.getElementById("offline-banner-text");
        if (bannerText) bannerText.textContent = i18n.t("offlineBanner");
    }
});

diary = createDiary({
    t: i18n.t,
    getDisplayName: i18n.getDisplayName,
    emociones,
});

on("tab:switch", ({ tabId }) => switchTab(tabId));
on("quiz:open", () => quiz?.open());

ui = createUI({
    emociones,
    relaciones: EMOTION_RELATIONS,
    getDisplayName: i18n.getDisplayName,
    getEmotionField: i18n.getEmotionField,
    t: i18n.t,
    modalAnimationMs,
    moodCategories: MOOD_CATEGORIES,
    onAddToDiary: (nombre, note) => {
        diary.addEntry(nombre, note);
        if (get("currentTab") === "diario") diary.renderForTab();
    }
});

function switchTab(tabId) {
    const tabs = ["emociones", "checkin", "diario", "mapa"];
    for (const id of tabs) {
        document.getElementById(`tab-${id}`)?.classList.toggle("hidden", id !== tabId);
        const btn = document.getElementById(`nav-${id}`);
        if (btn) {
            btn.classList.toggle("text-blue-600", id === tabId);
            btn.classList.toggle("text-slate-400", id !== tabId);
            btn.classList.toggle("nav-active", id === tabId);
            if (id === tabId) {
                btn.setAttribute("aria-current", "page");
            } else {
                btn.removeAttribute("aria-current");
            }
        }
    }
    set("currentTab", tabId);
    if (tabId === "diario") diary.renderForTab();
    if (tabId === "mapa") emotionMap?.renderForTab();
}

function initTabNav() {
    for (const btn of document.querySelectorAll(".nav-tab")) {
        btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    }
}

function bootstrap() {
    set("currentLang", i18n.detectInitialLanguage());
    i18n.applyStaticTranslations();

    const versionEl = document.getElementById("build-version");
    if (versionEl) versionEl.textContent = BUILD_VERSION;

    initSettings({ setLanguage: i18n.setLanguage, getLang: () => get("currentLang") });
    initTabNav();
    ui.bindBaseEvents();

    emotionMap = createEmotionMap({
        emociones,
        getDisplayName: i18n.getDisplayName,
        t: i18n.t,
        showDetail: ui.showDetail,
    });

    quiz = createQuiz({
        emociones,
        getDisplayName: i18n.getDisplayName,
        t: i18n.t,
        showDetail: ui.showDetail,
        onShowAll: () => switchTab("emociones")
    });
    quiz.init();

    ui.renderCheckinTab();
    ui.renderRecentEmotions();
    ui.renderEmociones();

    const crisis = createCrisisFlow({ t: i18n.t });
    crisis.init();

    initOfflineBanner({ t: i18n.t });
    initInstall();
    initServiceWorker();
}

bootstrap();
