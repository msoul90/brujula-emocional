import { emociones, MOOD_CATEGORIES, EMOTION_RELATIONS, APP_TABS, DEFAULT_TAB } from "./js/constants.js";
import { createI18n } from "./js/i18n.js";
import { createUI } from "./js/ui.jsx";
import { createQuiz } from "./js/quiz.jsx";
import { createDiary } from "./js/diary.jsx";
import { createEmotionMap } from "./js/emotionMap.jsx";
import { createCrisisFlow } from "./js/crisis.jsx";
import { initSettings } from "./js/settings.js";
import { initInstall } from "./js/install.js";
import { initOfflineBanner } from "./js/offlineBanner.js";
import { initServiceWorker } from "./js/serviceWorker.js";
import { migrateStorageSchema } from "./js/storageSchema.js";
import { on } from "./js/bus.js";
import { get, set } from "./js/store.js";
import { BUILD_VERSION } from "./js/version.js";
import { initAnalytics, trackTabView, trackLanguageChange } from "./js/analytics.js";

const reducedMotion = globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
const modalAnimationMs = reducedMotion ? 0 : 200;

let ui;
let diary;
let quiz;
let emotionMap;
let searchInput;
let searchQuery = "";

const i18n = createI18n({
    getLang: () => get("currentLang"),
    setLang: (lang) => set("currentLang", lang),
    onLanguageChanged: () => {
        searchQuery = searchInput?.value ?? "";
        ui.renderCheckinTab();
        ui.renderRecentEmotions();
        ui.renderEmociones(searchQuery);
        if (get("currentTab") === "diario") diary.renderForTab();
        emotionMap?.onLanguageChanged();
        const bannerText = document.getElementById("offline-banner-text");
        if (bannerText) bannerText.textContent = i18n.t("offlineBanner");
        trackLanguageChange(get("currentLang"));
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
});

function switchTab(tabId) {
    const nextTab = APP_TABS.includes(tabId) ? tabId : DEFAULT_TAB;
    for (const id of APP_TABS) {
        document.getElementById(`tab-${id}`)?.classList.toggle("hidden", id !== nextTab);
        const btn = document.getElementById(`nav-${id}`);
        if (btn) {
            btn.classList.toggle("text-slate-400", id !== nextTab);
            btn.classList.toggle("nav-active", id === nextTab);
            if (id === nextTab) {
                btn.setAttribute("aria-current", "page");
            } else {
                btn.removeAttribute("aria-current");
            }
        }
    }
    set("currentTab", nextTab);
    trackTabView(nextTab);
    if (nextTab === "diario") diary.renderForTab();
    if (nextTab === "mapa") emotionMap?.renderForTab();
}

function initTabNav() {
    for (const btn of document.querySelectorAll(".nav-tab")) {
        btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    }
}

function bootstrap() {
    migrateStorageSchema();

    set("currentLang", i18n.detectInitialLanguage());
    i18n.applyStaticTranslations();
    initAnalytics({ lang: get("currentLang"), version: BUILD_VERSION });

    const versionEl = document.getElementById("build-version");
    if (versionEl) versionEl.textContent = BUILD_VERSION;

    initSettings({ setLanguage: i18n.setLanguage, getLang: () => get("currentLang") });
    initTabNav();
    ui.bindBaseEvents();
    searchInput = /** @type {HTMLInputElement | null} */ (document.getElementById("search"));
    searchQuery = searchInput?.value ?? "";
    searchInput?.addEventListener("input", (e) => {
        searchQuery = /** @type {HTMLInputElement} */ (e.target).value;
    });

    emotionMap = createEmotionMap({
        emociones,
        getDisplayName: i18n.getDisplayName,
        t: i18n.t,
    });

    quiz = createQuiz({
        emociones,
        getDisplayName: i18n.getDisplayName,
        t: i18n.t,
    });
    quiz.init();

    ui.renderCheckinTab();
    ui.renderRecentEmotions();
    ui.renderEmociones(searchQuery);

    const crisis = createCrisisFlow({ t: i18n.t });
    crisis.init();

    initOfflineBanner({ t: i18n.t });
    initInstall();
    initServiceWorker();
}

bootstrap();
