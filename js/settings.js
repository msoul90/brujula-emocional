// @ts-check
import { getTheme as getPersistedTheme, setTheme as persistTheme } from "./persistence.js";
import { render, h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";

/** @typedef {"light" | "auto" | "dark"} Theme */
/** @typedef {"es" | "en"} Language */

const THEMES = ["light", "auto", "dark"];
const LANGUAGES = ["es", "en"];

/**
 * @param {string | null | undefined} theme
 * @returns {theme is Theme}
 */
function isTheme(theme) {
    return typeof theme === "string" && THEMES.includes(theme);
}

/**
 * @param {string | null | undefined} lang
 * @returns {lang is Language}
 */
function isLanguage(lang) {
    return typeof lang === "string" && LANGUAGES.includes(lang);
}

/** @returns {Theme} */
function getTheme() {
    const theme = getPersistedTheme();
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
    persistTheme(theme);
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

const turnstileSiteKey = /** @type {Record<string, unknown>} */ (globalThis)["__TURNSTILE_SITE_KEY__"];
const TURNSTILE_SITE_KEY = typeof turnstileSiteKey === "string" ? turnstileSiteKey : "";

/**
 * @param {{ email: string | null, t: (key: string) => string, onSignIn: (email: string, captchaToken?: string) => Promise<{error: Error|null}>, onSignOut: () => Promise<void> }} props
 */
function AuthSection({ email, t, onSignIn, onSignOut }) {
    const [inputEmail, setInputEmail]     = useState("");
    const [captchaToken, setCaptchaToken] = useState("");
    const [status, setStatus]             = useState(/** @type {"idle"|"sending"|"sent"|"error"} */ ("idle"));
    const [isSigningOut, setIsSigningOut] = useState(false);
    const [signOutError, setSignOutError] = useState(false);
    const turnstileContainer              = useRef(/** @type {HTMLDivElement|null} */ (null));

    useEffect(() => {
        if (!TURNSTILE_SITE_KEY || email) return;
        const win = /** @type {any} */ (globalThis);
        /** @type {string|undefined} */
        let widgetId;
        let active = true;

        function mountWidget() {
            if (!active || !win.turnstile || !turnstileContainer.current) return;
            widgetId = win.turnstile.render(turnstileContainer.current, {
                sitekey: TURNSTILE_SITE_KEY,
                theme: "light",
                size: "compact",
                callback: (/** @type {string} */ token) => { if (active) setCaptchaToken(token); },
                "expired-callback": () => { if (active) setCaptchaToken(""); },
            });
        }

        if (win.turnstile) {
            mountWidget();
        } else {
            const prev = win.__onTurnstileLoad;
            win.__onTurnstileLoad = () => {
                mountWidget();
                if (typeof prev === "function") prev();
            };
        }

        return () => {
            active = false;
            if (widgetId !== undefined) {
                try {
                    win.turnstile?.remove(widgetId);
                } catch (error) {
                    // Avoid breaking unmount if Turnstile widget is already gone.
                    console.warn("Turnstile cleanup failed", error);
                }
                widgetId = undefined;
            }
        };
    }, [email]);

    if (email) {
        async function handleSignOutClick() {
            if (isSigningOut) return;
            setSignOutError(false);
            setIsSigningOut(true);
            try {
                await onSignOut();
            } catch (error) {
                console.warn("Sign out failed", error);
                setSignOutError(true);
                setIsSigningOut(false);
            }
        }

        const signOutLabel = isSigningOut ? t("auth.signingOut") : t("auth.signOutButton");

        return h("div", { class: "min-w-[15rem]" },
            h("p", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-2" }, t("auth.sectionTitle")),
            h("div", { class: "flex items-center gap-1.5 mb-1" },
                h("span", { class: "w-2 h-2 rounded-full bg-emerald-500 shrink-0", "aria-hidden": "true" }),
                h("p", { class: "text-[11px] text-emerald-600 font-semibold" }, t("auth.cloudBackupOn"))
            ),
            h("p", { class: "text-[11px] text-slate-500 mb-3 truncate" }, email),
            h("button", {
                type: "button",
                onClick: handleSignOutClick,
                disabled: isSigningOut,
                class: "auth-signout-btn w-full text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 py-2.5 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed",
            }, signOutLabel),
            signOutError && h("p", { class: "text-xs text-rose-500 mt-1" }, t("auth.signOutError"))
        );
    }

    const captchaReady = !TURNSTILE_SITE_KEY || captchaToken;

    /** @param {Event} e */
    async function handleSubmit(e) {
        e.preventDefault();
        if (!inputEmail || !captchaReady) return;
        setStatus("sending");
        try {
            const { error } = await onSignIn(inputEmail, captchaToken || undefined);
            setStatus(error ? "error" : "sent");
        } catch (error) {
            console.warn("Magic link request failed", error);
            setStatus("error");
        }
    }

    if (status === "sent") {
        return h("div", { class: "min-w-[15rem]" },
            h("p", { class: "text-sm text-emerald-600 font-medium" }, t("auth.checkEmail"))
        );
    }

    const btnLabel = status === "sending" ? t("auth.sending") : t("auth.sendLinkButton");

    return h("div", { class: "min-w-[15rem]" },
        h("p", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1.5" }, t("auth.sectionTitle")),
        h("p", { class: "text-[11px] text-slate-400 mb-2.5" }, t("auth.cloudBackupOff")),
        h("form", { onSubmit: handleSubmit, class: "flex flex-col gap-2" },
            h("input", {
                type: "email",
                required: true,
                value: inputEmail,
                onInput: (/** @type {any} */ e) => setInputEmail(e.target.value),
                placeholder: t("auth.emailPlaceholder"),
                class: "auth-email-input w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-violet-300",
                disabled: status === "sending",
            }),
            h("button", {
                type: "submit",
                disabled: status === "sending" || !captchaReady,
                class: "w-full text-sm font-bold bg-violet-600 text-white py-2.5 rounded-xl hover:bg-violet-700 transition-colors disabled:opacity-50",
            }, btnLabel),
            TURNSTILE_SITE_KEY && h("div", { ref: turnstileContainer })
        ),
        status === "error" && h("p", { class: "text-xs text-rose-500 mt-1" }, t("auth.sendError"))
    );
}

/**
 * @param {{ setLanguage: (lang: Language) => void, getLang: () => Language, getSession: () => Promise<import("@supabase/supabase-js").Session|null>, onAuthStateChange: (cb: (event: string, session: import("@supabase/supabase-js").Session|null) => void) => () => void, signIn: (email: string, captchaToken?: string) => Promise<{error: Error|null}>, signOut: () => Promise<void>, t: (key: string) => string }} opts
 * @returns {{ applyTheme: (theme: Theme) => void, getTheme: () => Theme, updateActiveStates: (theme: Theme, lang: Language) => void } | undefined}
 */
export function initSettings({ setLanguage, getLang, getSession, onAuthStateChange, signIn, signOut, t }) {
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

    const authContainer = document.getElementById("auth-section");
    if (authContainer && getSession) {
        function renderAuthSection(/** @type {import("@supabase/supabase-js").Session|null} */ session) {
            const email = session?.user?.email ?? null;
            const handleSignOut = async () => {
                await signOut();
                renderAuthSection(null);
            };
            render(h(AuthSection, { email, t, onSignIn: signIn, onSignOut: handleSignOut }), authContainer);
        }
        renderAuthSection(null);
        getSession()
            .then(session => { if (session) renderAuthSection(session); })
            .catch((error) => {
                console.warn("Unable to restore auth session", error);
            });
        if (onAuthStateChange) {
            onAuthStateChange((_event, session) => renderAuthSection(session));
        }
    }

    return { applyTheme: (theme) => applyTheme(theme, getLang), getTheme, updateActiveStates };
}
