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
        const parts = key.split(".");
        if (parts.length === 1) {
            return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.es[key] ?? key;
        }
        let val = TRANSLATIONS[lang];
        for (const part of parts) val = val?.[part];
        if (val === undefined) {
            val = TRANSLATIONS.es;
            for (const part of parts) val = val?.[part];
        }
        return val !== undefined ? String(val) : key;
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
            "app-title":             (el) => { el.textContent = t("title"); },
            "app-subtitle":          (el) => { el.textContent = t("subtitle"); },
            "search":                (el) => { el.placeholder = t("searchPlaceholder"); },
            "recent-title":          (el) => { el.textContent = t("recentTitle"); },
            "close-button":          (el) => { el.textContent = t("closeButton"); },
            "share-btn":             (el) => { el.setAttribute("aria-label", t("shareButton")); },
            "share-btn-label":       (el) => { el.textContent = t("shareButton"); },
            "diary-add-btn":         (el) => { el.setAttribute("aria-label", t("diary.addShort")); },
            "diary-add-label":       (el) => { el.textContent = t("diary.addShort"); },
            "nav-label-emociones":   (el) => { el.textContent = t("nav.emociones"); },
            "nav-label-checkin":     (el) => { el.textContent = t("nav.checkin"); },
            "nav-label-diario":      (el) => { el.textContent = t("nav.diary"); },
            "nav-label-mapa":        (el) => { el.textContent = t("nav.mapa"); },
            "install-app-button":    (el) => { el.textContent = t("install.button"); },
            "ios-install-title":     (el) => { el.textContent = t("install.iosTitle"); },
            "ios-install-step-1":    (el) => { el.textContent = t("install.iosStep1"); },
            "ios-install-step-2":    (el) => { el.textContent = t("install.iosStep2"); },
            "ios-install-close":     (el) => { el.textContent = t("install.iosClose"); },
            "quiz-trigger-title":    (el) => { el.textContent = t("quiz.trigger"); },
            "quiz-trigger-sub":      (el) => { el.textContent = t("quiz.triggerSub"); },
            "crisis-trigger-title":  (el) => { el.textContent = t("crisis.triggerTitle"); },
            "crisis-trigger-sub":    (el) => { el.textContent = t("crisis.triggerSub"); },
            "crisis-trigger-btn-label": (el) => { el.textContent = t("crisis.triggerBtn"); },
            "crisis-panel-close":    (el) => { el.setAttribute("aria-label", t("crisis.close")); },
            "settings-btn":          (el) => { el.setAttribute("aria-label", t("settings.label")); },
            "settings-theme-label":  (el) => { el.textContent = t("settings.themeLabel"); },
            "settings-lang-label":   (el) => { el.textContent = t("langLabel"); },
            "theme-btn-light":       (el) => { el.setAttribute("aria-label", t("settings.themeLight")); el.setAttribute("title", t("settings.themeLight")); },
            "theme-btn-auto":        (el) => { el.setAttribute("aria-label", t("settings.themeAuto")); el.setAttribute("title", t("settings.themeAuto")); },
            "theme-btn-dark":        (el) => { el.setAttribute("aria-label", t("settings.themeDark")); el.setAttribute("title", t("settings.themeDark")); },
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
