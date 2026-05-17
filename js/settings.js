import { THEME_KEY } from "./constants.js";

function getTheme() {
    return localStorage.getItem(THEME_KEY) || "auto";
}

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

function updateActiveStates(theme, lang) {
    for (const t of ["light", "auto", "dark"]) {
        document.getElementById(`theme-btn-${t}`)?.classList.toggle("settings-option-active", t === theme);
    }
    for (const l of ["es", "en"]) {
        document.getElementById(`lang-btn-${l}`)?.classList.toggle("settings-option-active", l === lang);
    }
}

/**
 * @param {{ setLanguage: (lang: string) => void, getLang: () => string }} opts
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
        if (!settingsPanel.classList.contains("hidden") && !settingsPanel.contains(event.target)) {
            closePanel();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !settingsPanel.classList.contains("hidden")) {
            closePanel();
            settingsBtn.focus();
        }
    });

    for (const btn of settingsPanel.querySelectorAll("[data-theme-btn]")) {
        btn.addEventListener("click", () => applyTheme(btn.dataset.themeBtn, getLang));
    }

    for (const btn of settingsPanel.querySelectorAll("[data-lang-btn]")) {
        btn.addEventListener("click", () => {
            setLanguage(btn.dataset.langBtn);
            updateActiveStates(getTheme(), getLang());
        });
    }

    globalThis.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        if (getTheme() === "auto") applyTheme("auto", getLang);
    });

    updateActiveStates(getTheme(), getLang());
    return { applyTheme: (theme) => applyTheme(theme, getLang), getTheme, updateActiveStates };
}
