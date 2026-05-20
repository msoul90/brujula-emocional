// @ts-check
import { RECENT_KEY, LANGUAGE_KEY, THEME_KEY, DIARY_KEY, DIARY_CLOUD_USER_KEY } from "./constants.js";

/** @returns {string[]} */
export function getRecentEmotions() {
    try {
        const parsed = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
        return Array.isArray(parsed) ? parsed : [];
    } catch { return []; }
}

/** @param {string[]} names */
export function setRecentEmotions(names) {
    localStorage.setItem(RECENT_KEY, JSON.stringify(names));
}

/** @returns {string | null} */
export function getLanguage() {
    return localStorage.getItem(LANGUAGE_KEY);
}

/** @param {string} lang */
export function setLanguage(lang) {
    localStorage.setItem(LANGUAGE_KEY, lang);
}

/** @returns {string | null} */
export function getTheme() {
    return localStorage.getItem(THEME_KEY);
}

/** @param {string} theme */
export function setTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
}

/** @returns {any[]} */
export function getDiaryEntries() {
    try {
        const parsed = JSON.parse(localStorage.getItem(DIARY_KEY) || "[]");
        return Array.isArray(parsed) ? parsed : [];
    } catch { return []; }
}

/** @param {any[]} entries */
export function setDiaryEntries(entries) {
    localStorage.setItem(DIARY_KEY, JSON.stringify(entries));
}

/** @returns {string | null} */
export function getDiaryCloudUserId() {
    return localStorage.getItem(DIARY_CLOUD_USER_KEY);
}

/** @param {string | null} userId */
export function setDiaryCloudUserId(userId) {
    if (userId) {
        localStorage.setItem(DIARY_CLOUD_USER_KEY, userId);
        return;
    }
    localStorage.removeItem(DIARY_CLOUD_USER_KEY);
}
