// @ts-check
import {
    DIARY_KEY,
    DIARY_TAGS,
    LANGUAGE_KEY,
    RECENT_KEY,
    RECENT_LIMIT,
    STORAGE_SCHEMA_KEY,
    STORAGE_SCHEMA_VERSION,
    THEME_KEY,
} from "./constants.js";

const LEGACY_THEME_KEY = "brujulaTheme";
const VALID_THEMES = new Set(["light", "dark", "auto"]);

/** @param {unknown} value @returns {value is Record<string, unknown>} */
function isRecord(value) {
    return typeof value === "object" && value !== null;
}

/** @param {string | null} raw @returns {unknown} */
function parseJson(raw) {
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

/** @param {unknown} value @returns {string[]} */
function sanitizeRecent(value) {
    if (!Array.isArray(value)) return [];
    const out = [];
    const seen = new Set();
    for (const item of value) {
        if (typeof item !== "string") continue;
        const trimmed = item.trim();
        if (!trimmed || seen.has(trimmed)) continue;
        out.push(trimmed);
        seen.add(trimmed);
        if (out.length >= RECENT_LIMIT) break;
    }
    return out;
}

/** @param {unknown} value @returns {Array<{ id: number, date: string, emotion: string, note: string, tags: string[] }>} */
function sanitizeDiary(value) {
    if (!Array.isArray(value)) return [];
    const now = Date.now();
    const out = [];

    for (let i = 0; i < value.length; i++) {
        const entry = value[i];
        if (!isRecord(entry)) continue;

        const emotion = typeof entry.emotion === "string" ? entry.emotion.trim() : "";
        if (!emotion) continue;

        const idNum = Number(entry.id);
        const id = Number.isFinite(idNum) ? idNum : now + i;

        const dateRaw = typeof entry.date === "string" ? entry.date : "";
        const date = Number.isNaN(Date.parse(dateRaw)) ? new Date(id).toISOString() : dateRaw;

        const note = typeof entry.note === "string" ? entry.note.trim() : "";
        const tags = Array.isArray(entry.tags)
            ? entry.tags.filter((tag) => typeof tag === "string" && DIARY_TAGS.includes(tag))
            : [];

        out.push({ id, date, emotion, note, tags });
    }

    return out;
}

function migrateToV1() {
    const lang = localStorage.getItem(LANGUAGE_KEY);
    if (lang && lang !== "es" && lang !== "en") {
        localStorage.setItem(LANGUAGE_KEY, "es");
    }

    let theme = localStorage.getItem(THEME_KEY);
    if (!theme) {
        const typoTheme = localStorage.getItem("brujulaThema");
        if (typoTheme) {
            theme = typoTheme;
            localStorage.setItem(THEME_KEY, typoTheme);
            localStorage.removeItem("brujulaThema");
        } else {
            const legacyTheme = localStorage.getItem(LEGACY_THEME_KEY);
            if (legacyTheme) {
                theme = legacyTheme;
                localStorage.setItem(THEME_KEY, legacyTheme);
                localStorage.removeItem(LEGACY_THEME_KEY);
            }
        }
    }
    if (theme && !VALID_THEMES.has(theme)) {
        localStorage.removeItem(THEME_KEY);
    }

    const recent = sanitizeRecent(parseJson(localStorage.getItem(RECENT_KEY)));
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent));

    const diary = sanitizeDiary(parseJson(localStorage.getItem(DIARY_KEY)));
    localStorage.setItem(DIARY_KEY, JSON.stringify(diary));
}

/**
 * Ensure localStorage data follows the current app schema.
 * Safe to call on every bootstrap.
 */
export function migrateStorageSchema() {
    try {
        const rawVersion = localStorage.getItem(STORAGE_SCHEMA_KEY);
        const parsedVersion = Number.parseInt(rawVersion ?? "0", 10);
        let currentVersion = Number.isFinite(parsedVersion) ? parsedVersion : 0;

        if (currentVersion < 1) {
            migrateToV1();
            currentVersion = 1;
        }

        if (currentVersion !== STORAGE_SCHEMA_VERSION) {
            localStorage.setItem(STORAGE_SCHEMA_KEY, String(STORAGE_SCHEMA_VERSION));
        }
    } catch {
        // Ignore storage migration failures in restricted environments.
    }
}

export const __internal = {
    sanitizeRecent,
    sanitizeDiary,
};
