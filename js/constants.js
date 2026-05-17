// @ts-check
// Storage keys and app config
/** @type {string} */ export const RECENT_KEY = "brujulaRecientes";
/** @type {string} */ export const LANGUAGE_KEY = "brujulaIdioma";
/** @type {string} */ export const THEME_KEY = "brujulaThema";
/** @type {string} */ export const DIARY_KEY = "brujulaDiario";
/** @type {number} */ export const RECENT_LIMIT = 5;

/** @type {string[]} */
export const DIARY_TAGS = ["trabajo", "pareja", "familia", "cuerpo", "dinero"];

export { emociones, EMOTION_NAME_TRANSLATIONS, EMOTION_CONTENT_TRANSLATIONS, EMOTION_RELATIONS, MOOD_CATEGORIES } from "./data/emotions.js";
export { REGULATION_TECHNIQUES } from "./data/techniques.js";
export { BODY_ZONES, SIMPLE_ZONE_GROUPS, BODY_ZONE_EMOTIONS } from "./data/bodyMap.data.js";

import { es } from "./i18n/es.js";
import { en } from "./i18n/en.js";
export const TRANSLATIONS = { es, en };
