import { emociones } from "./js/constants.js";
import { createI18n } from "./js/i18n.js";
import { createUI } from "./js/ui.js";

const state = {
    currentLang: "es",
    lastFocusedCard: null,
    isClosingModal: false
};

const reducedMotion = globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
const modalAnimationMs = reducedMotion ? 0 : 200;

let ui;

const i18n = createI18n({
    getLang: () => state.currentLang,
    setLang: (lang) => {
        state.currentLang = lang;
    },
    onLanguageChanged: () => {
        ui.renderRecentEmotions();
        ui.renderEmociones(document.getElementById("search").value);
    }
});

ui = createUI({
    emociones,
    getDisplayName: i18n.getDisplayName,
    getEmotionField: i18n.getEmotionField,
    t: i18n.t,
    getLastFocusedCard: () => state.lastFocusedCard,
    setLastFocusedCard: (card) => {
        state.lastFocusedCard = card;
    },
    getIsClosingModal: () => state.isClosingModal,
    setIsClosingModal: (value) => {
        state.isClosingModal = value;
    },
    modalAnimationMs
});

function initLanguageSelector() {
    const languageSelect = document.getElementById("language-select");
    languageSelect.addEventListener("change", (event) => {
        i18n.setLanguage(event.target.value);
    });
}

function initServiceWorker() {
    if (!("serviceWorker" in navigator)) return;

    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(() => {
            // Keep app functional even if service worker registration fails.
        });
    });
}

function bootstrap() {
    state.currentLang = i18n.detectInitialLanguage();
    i18n.applyStaticTranslations();

    initLanguageSelector();
    ui.bindBaseEvents();

    ui.renderRecentEmotions();
    ui.renderEmociones();

    initServiceWorker();
}

bootstrap();
