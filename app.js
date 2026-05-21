import { emociones, MOOD_CATEGORIES, EMOTION_RELATIONS, APP_TABS, DEFAULT_TAB } from "./js/constants.js";
import { createI18n } from "./js/i18n.js";
import { createUI } from "./js/ui.jsx";
import { createQuiz } from "./js/quiz.jsx";
import { createDiary } from "./js/diary.jsx";
import { createEmotionMap } from "./js/emotionMap.jsx";
import { createCrisisFlow } from "./js/crisis.jsx";
import { createReports } from "./js/reports.jsx";
import { initSettings } from "./js/settings.js";
import { initInstall } from "./js/install.js";
import { initOfflineBanner } from "./js/offlineBanner.js";
import { initServiceWorker } from "./js/serviceWorker.js";
import { migrateStorageSchema } from "./js/storageSchema.js";
import { on } from "./js/bus.js";
import { get, set } from "./js/store.js";
import { getDiaryEntries, setDiaryEntries, getDiaryCloudUserId, setDiaryCloudUserId } from "./js/persistence.js";
import { BUILD_VERSION } from "./js/version.js";
import { initAnalytics, capture } from "./js/analytics.js";
import { completeMagicLinkSignIn, getSession, onAuthStateChange, signInWithMagicLink, signOut } from "./js/auth.js";
import { syncEntriesToCloud, fetchEntriesFromCloud, mergeEntries, syncOnCreate as cloudSyncOnCreate, syncOnDelete as cloudSyncOnDelete } from "./js/cloudSync.js";
import { flushQueue } from "./js/offlineQueue.js";

const reducedMotion = globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
const modalAnimationMs = reducedMotion ? 0 : 200;

let ui;
let diary;
let quiz;
let emotionMap;
let reports;
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
        if (get("currentTab") === "reportes") reports?.renderForTab();
        emotionMap?.onLanguageChanged();
        const bannerText = document.getElementById("offline-banner-text");
        if (bannerText) bannerText.textContent = i18n.t("offlineBanner");
    }
});

diary = createDiary({
    t: i18n.t,
    getDisplayName: i18n.getDisplayName,
    emociones,
    getSession,
    cloudSync: { syncOnCreate: cloudSyncOnCreate, syncOnDelete: cloudSyncOnDelete },
});

on("tab:switch", ({ tabId }) => {
    switchTab(tabId);
    capture("tab_switched", { tab: tabId });
});
on("quiz:open", () => {
    quiz?.open();
    capture("quiz_opened");
});
on("emotion:select", ({ nombre }) => capture("emotion_viewed", { emotion: nombre }));
on("diary:add", ({ nombre }) => capture("diary_entry_created", { emotion: nombre }));

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
    if (nextTab === "diario") diary.renderForTab();
    if (nextTab === "mapa") emotionMap?.renderForTab();
    if (nextTab === "reportes") reports?.renderForTab();
}

function initTabNav() {
    for (const btn of document.querySelectorAll(".nav-tab")) {
        btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    }
}

async function bootstrap() {
    migrateStorageSchema();

    try {
        await completeMagicLinkSignIn();
    } catch (error) {
        console.warn("Magic link completion failed", error);
    }

    set("currentLang", i18n.detectInitialLanguage());
    i18n.applyStaticTranslations();

    const versionEl = document.getElementById("build-version");
    if (versionEl) versionEl.textContent = BUILD_VERSION;

    async function handleSignOut() {
        await signOut();
        diary.setIsCloud(false);
    }

    initSettings({
        setLanguage: i18n.setLanguage,
        getLang: () => get("currentLang"),
        getSession,
        onAuthStateChange,
        signIn: signInWithMagicLink,
        signOut: handleSignOut,
        t: i18n.t,
    });
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

    reports = createReports({
        t: i18n.t,
        getDisplayName: i18n.getDisplayName,
        emociones,
    });

    const cloudSyncOpts = { syncOnCreate: cloudSyncOnCreate, syncOnDelete: cloudSyncOnDelete };

    async function syncDiaryForSession(session) {
        if (!session?.user?.id) return;
        try {
            diary.setIsCloud(true);
            await flushQueue(cloudSyncOpts, getSession);
            const previousUserId = getDiaryCloudUserId();
            const remote = await fetchEntriesFromCloud();
            if (previousUserId && previousUserId !== session.user.id) {
                setDiaryEntries(remote);
                setDiaryCloudUserId(session.user.id);
                if (get("currentTab") === "diario") diary.renderForTab();
                if (get("currentTab") === "reportes") reports?.renderForTab();
                return;
            }
            const local  = getDiaryEntries();
            const merged = mergeEntries(local, remote);
            setDiaryEntries(merged);
            setDiaryCloudUserId(session.user.id);
            await syncEntriesToCloud(merged);
            if (get("currentTab") === "diario") diary.renderForTab();
            if (get("currentTab") === "reportes") reports?.renderForTab();
        } catch (error) {
            console.error("Cloud diary sync failed", error);
        }
    }

    getSession().then((session) => {
        if (session) void syncDiaryForSession(session);
    });

    onAuthStateChange(async (event, session) => {
        if (event === "SIGNED_IN" && session) {
            await syncDiaryForSession(session);
        } else if (event === "SIGNED_OUT") {
            diary.setIsCloud(false);
        }
    });

    globalThis.addEventListener("online", async () => {
        const session = await getSession();
        if (session) await flushQueue(cloudSyncOpts, getSession);
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
    initAnalytics();
    capture("$pageview");
    capture("app_loaded", { lang: get("currentLang") });
}

void bootstrap();
