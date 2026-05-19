// @ts-check
import posthog from "posthog-js";

// ────────────────────────────────────────────────────────────────
// Configuration
// 1. Sign up at https://posthog.com (EU: https://eu.posthog.com)
// 2. Create a project and copy the project API key
// 3. Replace the placeholder below with your key
// 4. Run `npm run build` and redeploy
// ────────────────────────────────────────────────────────────────
const POSTHOG_KEY = "YOUR_POSTHOG_API_KEY";
const POSTHOG_HOST = "https://eu.i.posthog.com"; // change to https://us.i.posthog.com for US region

let active = false;

/**
 * @param {{ lang: string, version: string }} opts
 */
export function initAnalytics({ lang, version }) {
    if (POSTHOG_KEY === "YOUR_POSTHOG_API_KEY") return;

    posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        capture_pageview: true,
        autocapture: false,
        disable_session_recording: true,
        persistence: "localStorage",
    });

    // Super properties: sent with every event automatically
    posthog.register({ language: lang, app_version: version });
    active = true;
}

/** @param {string} tabId */
export function trackTabView(tabId) {
    if (!active) return;
    posthog.capture("tab_viewed", { tab: tabId });
}

/** @param {string} lang */
export function trackLanguageChange(lang) {
    if (!active) return;
    posthog.register({ language: lang });
    posthog.capture("language_changed", { language: lang });
}
