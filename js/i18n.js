import {
    TRANSLATIONS,
    EMOTION_NAME_TRANSLATIONS,
    EMOTION_CONTENT_TRANSLATIONS,
    LANGUAGE_KEY
} from "./constants.js";

export function createI18n({ getLang, setLang, onLanguageChanged }) {
    function t(key) {
        const lang = getLang();
        return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.es[key] ?? key;
    }

    function getDisplayName(nombre) {
        if (getLang() === "en") return EMOTION_NAME_TRANSLATIONS[nombre] ?? nombre;
        return nombre;
    }

    function getEmotionField(emotion, field) {
        if (getLang() !== "en") return emotion[field];
        return EMOTION_CONTENT_TRANSLATIONS[emotion.nombre]?.[field] ?? emotion[field];
    }

    function detectInitialLanguage() {
        const saved = localStorage.getItem(LANGUAGE_KEY);
        if (saved === "es" || saved === "en") return saved;

        const browserLang = globalThis.navigator?.language?.toLowerCase() ?? "es";
        return browserLang.startsWith("en") ? "en" : "es";
    }

    function applyStaticTranslations() {
        document.documentElement.lang = getLang();

        const appTitle = document.getElementById("app-title");
        const appSubtitle = document.getElementById("app-subtitle");
        const search = document.getElementById("search");
        const recentTitle = document.getElementById("recent-title");
        const closeButton = document.getElementById("close-button");
        const languageSelect = document.getElementById("language-select");

        if (appTitle) appTitle.textContent = t("title");
        if (appSubtitle) appSubtitle.textContent = t("subtitle");
        if (search) search.placeholder = t("searchPlaceholder");
        if (recentTitle) recentTitle.textContent = t("recentTitle");
        if (closeButton) closeButton.textContent = t("closeButton");
        if (languageSelect) {
            languageSelect.value = getLang();
            languageSelect.setAttribute("aria-label", t("langLabel"));
        }
    }

    function setLanguage(lang) {
        setLang(lang === "en" ? "en" : "es");
        localStorage.setItem(LANGUAGE_KEY, getLang());
        applyStaticTranslations();
        onLanguageChanged();
    }

    return {
        t,
        getDisplayName,
        getEmotionField,
        detectInitialLanguage,
        applyStaticTranslations,
        setLanguage
    };
}
