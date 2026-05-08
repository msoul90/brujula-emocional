import {
    TRANSLATIONS,
    EMOTION_NAME_TRANSLATIONS,
    EMOTION_CONTENT_TRANSLATIONS,
    LANGUAGE_KEY
} from "./constants.js";

function detectInitialLanguage() {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved === "es" || saved === "en") return saved;

    const browserLang = globalThis.navigator?.language?.toLowerCase() ?? "es";
    return browserLang.startsWith("en") ? "en" : "es";
}

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

    function applyStaticTranslations() {
        document.documentElement.lang = getLang();

        const ids = {
            "app-title":          (el) => { el.textContent = t("title"); },
            "app-subtitle":       (el) => { el.textContent = t("subtitle"); },
            "search":             (el) => { el.placeholder = t("searchPlaceholder"); },
            "recent-title":       (el) => { el.textContent = t("recentTitle"); },
            "close-button":       (el) => { el.textContent = t("closeButton"); },
            "install-app-button": (el) => { el.textContent = t("installButton"); },
            "ios-install-title":  (el) => { el.textContent = t("iosInstallTitle"); },
            "ios-install-step-1": (el) => { el.textContent = t("iosInstallStep1"); },
            "ios-install-step-2": (el) => { el.textContent = t("iosInstallStep2"); },
            "ios-install-close":  (el) => { el.textContent = t("iosInstallClose"); },
            "settings-btn":       (el) => { el.setAttribute("aria-label", t("settingsLabel")); },
            "settings-theme-label": (el) => { el.textContent = t("themeLabel"); },
            "settings-lang-label":  (el) => { el.textContent = t("langLabel"); },
            "theme-btn-light":    (el) => { el.textContent = t("themeLight"); },
            "theme-btn-auto":     (el) => { el.textContent = t("themeAuto"); },
            "theme-btn-dark":     (el) => { el.textContent = t("themeDark"); },
        };

        for (const [id, apply] of Object.entries(ids)) {
            const el = document.getElementById(id);
            if (el) apply(el);
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
