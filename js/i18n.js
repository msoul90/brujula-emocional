// @ts-check
import {
    TRANSLATIONS,
    EMOTION_NAME_TRANSLATIONS,
    EMOTION_CONTENT_TRANSLATIONS,
} from "./constants.js";
import { getLanguage, setLanguage as persistLanguage } from "./persistence.js";

/** @returns {"es"|"en"} */
function detectInitialLanguage() {
    const saved = getLanguage();
    if (saved === "es" || saved === "en") return saved;

    const browserLang = globalThis.navigator?.language?.toLowerCase() ?? "es";
    return browserLang.startsWith("en") ? "en" : "es";
}

/**
 * @param {{ getLang: () => string, setLang: (lang: string) => void, onLanguageChanged: () => void }} options
 * @returns {{ t: (key: string) => string, getDisplayName: (nombre: string) => string, getEmotionField: (emotion: Record<string, string>, field: string) => string, detectInitialLanguage: () => string, applyStaticTranslations: () => void, setLanguage: (lang: string) => void }}
 */
export function createI18n({ getLang, setLang, onLanguageChanged }) {
    /** @param {string} key @returns {string} */
    function t(key) {
        const lang = getLang();
        const tr = /** @type {Record<string, Record<string, any>>} */ (TRANSLATIONS);
        const parts = key.split(".");
        if (parts.length === 1) {
            return tr[lang]?.[key] ?? tr.es[key] ?? key;
        }
        let val = /** @type {any} */ (tr[lang]);
        for (const part of parts) val = val?.[part];
        if (val === undefined) {
            val = tr.es;
            for (const part of parts) val = val?.[part];
        }
        if (val === undefined) return key;
        return String(val);
    }

    /** @param {string} nombre @returns {string} */
    function getDisplayName(nombre) {
        const nameMap = /** @type {Record<string, string>} */ (EMOTION_NAME_TRANSLATIONS);
        if (getLang() === "en") return nameMap[nombre] ?? nombre;
        return nombre;
    }

    /** @param {Record<string, string>} emotion @param {string} field @returns {string} */
    function getEmotionField(emotion, field) {
        const contentMap = /** @type {Record<string, Record<string, string>>} */ (EMOTION_CONTENT_TRANSLATIONS);
        if (getLang() === "en") return contentMap[emotion.nombre]?.[field] ?? emotion[field];
        return emotion[field];
    }

    function applyStaticTranslations() {
        document.documentElement.lang = getLang();

        /** @type {Record<string, (el: any) => void>} */
        const ids = {
            "app-title":             (el) => { el.textContent = t("title"); },
            "app-subtitle":          (el) => { el.textContent = t("subtitle"); },
            "search":                (el) => { el.placeholder = t("searchPlaceholder"); },
            "search-label":          (el) => { el.textContent = t("searchLabel"); },
            "recent-title":          (el) => { el.textContent = t("recentTitle"); },
            "close-button":          (el) => { el.textContent = t("closeButton"); },
            "share-btn":             (el) => { el.setAttribute("aria-label", t("shareButton")); },
            "share-btn-label":       (el) => { el.textContent = t("shareButton"); },
            "diary-add-btn":         (el) => { el.setAttribute("aria-label", t("diary.addShort")); },
            "diary-add-label":       (el) => { el.textContent = t("diary.addShort"); },
            "nav-label-emociones":   (el) => { el.textContent = t("nav.emociones"); },
            "nav-label-checkin":     (el) => { el.textContent = t("nav.checkin"); },
            "nav-label-diario":            (el) => { el.textContent = t("nav.diary"); },
            "nav-label-mapa":              (el) => { el.textContent = t("nav.mapa"); },
            "diary-subtab-entradas-label": (el) => { el.textContent = t("diary.tabEntradas"); },
            "diary-subtab-resumen-label":  (el) => { el.textContent = t("diary.tabResumen"); },
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

    /** @param {string} lang */
    function setLanguage(lang) {
        setLang(lang === "en" ? "en" : "es");
        persistLanguage(getLang());
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
