import { emociones, THEME_KEY, MOOD_CATEGORIES, EMOTION_RELATIONS } from "./js/constants.js";
import { createI18n } from "./js/i18n.js";
import { createUI } from "./js/ui.js";
import { createQuiz } from "./js/quiz.js";
import { createDiary } from "./js/diary.js";
import { createEmotionMap } from "./js/emotionMap.js";
import { BUILD_VERSION } from "./js/version.js";

const state = {
    currentLang: "es",
    currentTab: "emociones",
    lastFocusedCard: null,
    isClosingModal: false
};

const reducedMotion = globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
const modalAnimationMs = reducedMotion ? 0 : 200;

let ui;
let diary;
let emotionMap;

const i18n = createI18n({
    getLang: () => state.currentLang,
    setLang: (lang) => {
        state.currentLang = lang;
    },
    onLanguageChanged: () => {
        ui.renderCheckinTab();
        ui.renderRecentEmotions();
        ui.renderEmociones(document.getElementById("search")?.value ?? "");
        if (state.currentTab === "diario") diary.renderForTab();
        emotionMap?.onLanguageChanged();
        document.getElementById("offline-banner-text").textContent = i18n.t("offlineBanner");
    }
});

diary = createDiary({
    t: i18n.t,
    getDisplayName: i18n.getDisplayName,
    emociones
});

ui = createUI({
    emociones,
    relaciones: EMOTION_RELATIONS,
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
    modalAnimationMs,
    moodCategories: MOOD_CATEGORIES,
    onAddToDiary: (nombre, note) => {
        diary.addEntry(nombre, note);
        if (state.currentTab === "diario") diary.renderForTab();
    }
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
        navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).catch(() => {
            // Keep app functional even if service worker registration fails.
        });
    });

    // Reload once when a new SW takes control so users always get fresh assets.
    navigator.serviceWorker.addEventListener("controllerchange", () => {
        globalThis.location.reload();
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
    state.currentTab = tabId;
    if (tabId === "diario") diary.renderForTab();
    if (tabId === "mapa") emotionMap?.renderForTab();
}

function initOfflineBanner() {
    const banner = document.getElementById("offline-banner");
    const text = document.getElementById("offline-banner-text");
    if (!banner || !text) return;

    const update = () => {
        text.textContent = i18n.t("offlineBanner");
        banner.classList.toggle("hidden", navigator.onLine);
        banner.classList.toggle("flex", !navigator.onLine);
    };

    globalThis.addEventListener("online", update);
    globalThis.addEventListener("offline", update);
    update();
}

function initTabNav() {
    for (const btn of document.querySelectorAll(".nav-tab")) {
        btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    }
}

function bootstrap() {
    state.currentLang = i18n.detectInitialLanguage();
    i18n.applyStaticTranslations();

    const versionEl = document.getElementById("build-version");
    if (versionEl) versionEl.textContent = BUILD_VERSION;

    initSettingsPanel();
    initTabNav();
    ui.bindBaseEvents();

    emotionMap = createEmotionMap({
        emociones,
        getDisplayName: i18n.getDisplayName,
        t: i18n.t,
        showDetail: ui.showDetail,
    });

    const quiz = createQuiz({
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

    initOfflineBanner();
    initSmartInstallButton();
    initServiceWorker();
}

bootstrap();
