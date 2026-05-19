import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

const posthogInit = vi.fn();
const posthogCapture = vi.fn();

vi.mock("posthog-js", () => ({
    default: {
        init: posthogInit,
        capture: posthogCapture,
    },
}));

const originalDocument = globalThis.document;
const originalLocation = globalThis.location;
const originalEnv = {
    enabled: process.env.POSTHOG_ENABLED,
    apiKey: process.env.POSTHOG_API_KEY,
    host: process.env.POSTHOG_HOST,
};

function setGlobal(name, value) {
    Object.defineProperty(globalThis, name, {
        configurable: true,
        writable: true,
        value,
    });
}

function setCsp(content) {
    setGlobal("document", {
        querySelector: (selector) => {
            if (selector !== 'meta[http-equiv="Content-Security-Policy"]' || !content) return null;
            return { getAttribute: () => content };
        },
    });
}

beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    process.env.POSTHOG_ENABLED = "true";
    process.env.POSTHOG_API_KEY = "test-key";
    process.env.POSTHOG_HOST = "https://us.i.posthog.com";
    setGlobal("location", {
        href: "https://brujula.test/app",
        origin: "https://brujula.test",
    });
    setCsp(null);
});

afterEach(() => {
    process.env.POSTHOG_ENABLED = originalEnv.enabled;
    process.env.POSTHOG_API_KEY = originalEnv.apiKey;
    process.env.POSTHOG_HOST = originalEnv.host;
    setGlobal("document", originalDocument);
    setGlobal("location", originalLocation);
});

describe("analytics", () => {
    it("inicializa analytics y permite capture sin CSP", async () => {
        const { initAnalytics, capture } = await import("../js/analytics.js");
        initAnalytics();
        capture("app_loaded", { lang: "es" });

        expect(posthogInit).toHaveBeenCalledTimes(1);
        expect(posthogCapture).toHaveBeenCalledWith("app_loaded", { lang: "es" });
    });

    it("no inicializa cuando connect-src bloquea el host", async () => {
        setCsp("default-src 'self'; connect-src 'self';");
        const { initAnalytics } = await import("../js/analytics.js");

        initAnalytics();

        expect(posthogInit).not.toHaveBeenCalled();
    });

    it("inicializa cuando no hay connect-src aunque default-src sea self", async () => {
        setCsp("default-src 'self'; script-src 'self';");
        const { initAnalytics } = await import("../js/analytics.js");

        initAnalytics();

        expect(posthogInit).toHaveBeenCalledTimes(1);
    });

    it("expone isAllowedByCsp para hosts permitidos", async () => {
        setCsp("default-src 'self'; connect-src 'self' https://us.i.posthog.com;");
        const { isAllowedByCsp } = await import("../js/analytics.js");

        expect(isAllowedByCsp("https://us.i.posthog.com")).toBe(true);
        expect(isAllowedByCsp("https://eu.i.posthog.com")).toBe(false);
    });
});
