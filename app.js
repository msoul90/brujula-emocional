import { emociones, THEME_KEY } from "./js/constants.js";
import { createI18n } from "./js/i18n.js";
import { createUI } from "./js/ui.js";
import { createQuiz } from "./js/quiz.js";
import { BUILD_VERSION } from "./js/version.js";

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

function getTheme() {
    return localStorage.getItem(THEME_KEY) || "auto";
}

function applyTheme(theme) {
    const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "dark" || (theme === "auto" && prefersDark)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(THEME_KEY, theme);
    updateSettingsActiveStates(theme, state.currentLang);
}

function updateSettingsActiveStates(theme, lang) {
    for (const t of ["light", "auto", "dark"]) {
        document.getElementById(`theme-btn-${t}`)?.classList.toggle("settings-option-active", t === theme);
    }
    for (const l of ["es", "en"]) {
        document.getElementById(`lang-btn-${l}`)?.classList.toggle("settings-option-active", l === lang);
    }
}

function initSettingsPanel() {
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
        btn.addEventListener("click", () => applyTheme(btn.dataset.themeBtn));
    }

    for (const btn of settingsPanel.querySelectorAll("[data-lang-btn]")) {
        btn.addEventListener("click", () => {
            i18n.setLanguage(btn.dataset.langBtn);
            updateSettingsActiveStates(getTheme(), state.currentLang);
        });
    }

    globalThis.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        if (getTheme() === "auto") applyTheme("auto");
    });

    updateSettingsActiveStates(getTheme(), state.currentLang);
}

function initServiceWorker() {
    if (!("serviceWorker" in navigator)) return;

    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(() => {
            // Keep app functional even if service worker registration fails.
        });
    });
}

function isIosDevice() {
    const ua = navigator.userAgent.toLowerCase();
    const touchMac = ua.includes("macintosh") && navigator.maxTouchPoints > 1;
    return /iphone|ipad|ipod/.test(ua) || touchMac;
}

function isStandalone() {
    return globalThis.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
}

function initSmartInstallButton() {
    const installButton = document.getElementById("install-app-button");
    const iosModal = document.getElementById("ios-install-modal");
    const iosClose = document.getElementById("ios-install-close");
    const isiOS = isIosDevice();
    let deferredPrompt = null;

    if (!installButton || !iosModal || !iosClose) return;

    const closeIosModal = () => {
        iosModal.classList.add("hidden");
        document.body.style.overflow = "auto";
    };

    const showIosModal = () => {
        iosModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    };

    const updateInstallVisibility = () => {
        const showAndroidInstall = deferredPrompt && !isStandalone();
        const showIosGuide = isiOS && !isStandalone();
        if (showAndroidInstall || showIosGuide) {
            installButton.classList.remove("hidden");
        } else {
            installButton.classList.add("hidden");
        }
    };

    globalThis.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        deferredPrompt = event;
        updateInstallVisibility();
    });

    globalThis.addEventListener("appinstalled", () => {
        deferredPrompt = null;
        closeIosModal();
        updateInstallVisibility();
    });

    installButton.addEventListener("click", async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            try {
                await deferredPrompt.userChoice;
            } catch {
                // ignore prompt cancellation
            }
            deferredPrompt = null;
            updateInstallVisibility();
            return;
        }

        if (isiOS && !isStandalone()) {
            showIosModal();
        }
    });

    iosClose.addEventListener("click", closeIosModal);
    iosModal.addEventListener("click", (event) => {
        if (event.target.id === "ios-install-modal") closeIosModal();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !iosModal.classList.contains("hidden")) {
            closeIosModal();
        }
    });

    updateInstallVisibility();
}

function bootstrap() {
    state.currentLang = i18n.detectInitialLanguage();
    i18n.applyStaticTranslations();

    const versionEl = document.getElementById("build-version");
    if (versionEl) versionEl.textContent = BUILD_VERSION;

    initSettingsPanel();
    ui.bindBaseEvents();

    const quiz = createQuiz({
        emociones,
        getDisplayName: i18n.getDisplayName,
        t: i18n.t,
        showDetail: ui.showDetail
    });
    quiz.init();

    ui.renderRecentEmotions();
    ui.renderEmociones();

    initSmartInstallButton();
    initServiceWorker();
}

bootstrap();
