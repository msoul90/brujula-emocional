import posthog from "posthog-js";

/**
 * Typed env access for browser code without requiring Node typings.
 * Values are replaced at build-time and available in tests via Node's process.env.
 * @type {{ POSTHOG_API_KEY?: string, POSTHOG_HOST?: string, POSTHOG_ENABLED?: string }}
 */
const env = /** @type {any} */ (globalThis).process?.env ?? {};

const apiKey = env.POSTHOG_API_KEY;
const host = env.POSTHOG_HOST;
const isEnabled = env.POSTHOG_ENABLED === "true";
let isInitialized = false;

function getCspContent() {
    const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    return cspMeta?.getAttribute("content") ?? "";
}

function getDirectiveSources(csp, directiveName) {
    const directives = csp
        .split(";")
        .map((part) => part.trim())
        .filter(Boolean);

    const directive = directives.find((part) => part.toLowerCase().startsWith(`${directiveName} `));
    if (!directive) return null;
    return directive
        .slice(directiveName.length)
        .trim()
        .split(/\s+/)
        .filter(Boolean);
}

function isSameOrigin(target) {
    try {
        const targetUrl = new URL(target, location.href);
        return targetUrl.origin === location.origin;
    } catch {
        return false;
    }
}

export function isAllowedByCsp(target) {
    const csp = getCspContent();
    if (!csp) return true;

    const connectSources = getDirectiveSources(csp, "connect-src");
    if (!connectSources || connectSources.length === 0) return true;

    if (connectSources.includes("*")) return true;
    if (connectSources.includes("'self'") && isSameOrigin(target)) return true;

    try {
        const origin = new URL(target, location.href).origin;
        return connectSources.some((source) => source === origin || source === target);
    } catch {
        return false;
    }
}

export function initAnalytics() {
    if (!isEnabled || !apiKey || !host) return;
    if (!isAllowedByCsp(host)) return;

    posthog.init(apiKey, {
        api_host: host,
        person_profiles: "identified_only",
        capture_pageview: false,
        autocapture: false,
    });
    isInitialized = true;
}

export function capture(event, properties) {
    if (!isInitialized) return;
    posthog.capture(event, properties);
}
