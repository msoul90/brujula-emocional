// @ts-check
import { THEME_KEY } from "./constants.js";

/** @typedef {"light" | "auto" | "dark"} Theme */
/** @typedef {"es" | "en"} Language */

const THEMES = /** @type {const} */ (["light", "auto", "dark"]);
const LANGUAGES = /** @type {const} */ (["es", "en"]);

/**
 * @param {string | null | undefined} theme
 * @returns {theme is Theme}
 */
function isTheme(theme) {
    return THEMES.includes(/** @type {Theme} */ (theme));
}

/**
 * @param {string | null | undefined} lang
 * @returns {lang is Language}
 */
function isLanguage(lang) {
    return LANGUAGES.includes(/** @type {Language} */ (lang));
}

/** @returns {Theme} */
function getTheme() {
    const theme = localStorage.getItem(THEME_KEY);
    return isTheme(theme) ? theme : "auto";
}

/** @param {Theme} theme @param {() => Language} getLang */
function applyTheme(theme, getLang) {
    const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "dark" || (theme === "auto" && prefersDark)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(THEME_KEY, theme);
    updateActiveStates(theme, getLang());
}

/** @param {Theme} theme @param {Language} lang */
function updateActiveStates(theme, lang) {
    for (const t of THEMES) {
        document.getElementById(`theme-btn-${t}`)?.classList.toggle("settings-option-active", t === theme);
    }
    for (const l of LANGUAGES) {
        document.getElementById(`lang-btn-${l}`)?.classList.toggle("settings-option-active", l === lang);
    }
}

/**
 * @param {{ setLanguage: (lang: Language) => void, getLang: () => Language }} opts
 * @returns {{ applyTheme: (theme: Theme) => void, getTheme: () => Theme, updateActiveStates: (theme: Theme, lang: Language) => void } | undefined}
 */
export function initSettings({ setLanguage, getLang }) {
    const settingsBtn = document.getElementById("settings-btn");
    const settingsPanel = document.getElementById("settings-panel");
    if (!settingsBtn || !settingsPanel) return;

    const closePanel = () => {
        settingsPanel.classList.add("hidden");
        settingsBtn.setAttribute("aria-expanded", "false");
    };

    settingsBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = !settingsPanel.classList.contains("hidden");
        settingsPanel.classList.toggle("hidden", isOpen);
        settingsBtn.setAttribute("aria-expanded", String(!isOpen));
    });

    document.addEventListener("click", (event) => {
        if (!settingsPanel.classList.contains("hidden") && !settingsPanel.contains(/** @type {Node | null} */ (event.target))) {
            closePanel();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !settingsPanel.classList.contains("hidden")) {
            closePanel();
            settingsBtn.focus();
        }
    });

    for (const btn of /** @type {NodeListOf<HTMLElement>} */ (settingsPanel.querySelectorAll("[data-theme-btn]"))) {
        btn.addEventListener("click", () => {
            const theme = btn.dataset.themeBtn;
            if (!isTheme(theme)) return;
            applyTheme(theme, getLang);
        });
    }

    for (const btn of /** @type {NodeListOf<HTMLElement>} */ (settingsPanel.querySelectorAll("[data-lang-btn]"))) {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.langBtn;
            if (!isLanguage(lang)) return;
            setLanguage(lang);
            updateActiveStates(getTheme(), getLang());
        });
    }

    globalThis.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        if (getTheme() === "auto") applyTheme("auto", getLang);
    });

    updateActiveStates(getTheme(), getLang());
    return { applyTheme: (theme) => applyTheme(theme, getLang), getTheme, updateActiveStates };
}
