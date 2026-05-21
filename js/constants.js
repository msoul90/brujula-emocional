// @ts-check
// Storage keys and app config
/** @type {string} */ export const RECENT_KEY = "brujulaRecientes";
/** @type {string} */ export const LANGUAGE_KEY = "brujulaIdioma";
/** @type {string} */ export const THEME_KEY = "brujulaThema";
/** @type {string} */ export const DIARY_KEY = "brujulaDiario";
/** @type {string} */ export const DIARY_CLOUD_USER_KEY = "brujulaDiarioCloudUserId";
/** @type {string} */ export const OFFLINE_QUEUE_KEY = "brujulaOfflineQueue";
/** @type {string} */ export const STORAGE_SCHEMA_KEY = "brujulaSchemaVersion";
/** @type {number} */ export const STORAGE_SCHEMA_VERSION = 1;
/** @type {number} */ export const RECENT_LIMIT = 5;

/** @type {string[]} */
export const DIARY_TAGS = ["trabajo", "pareja", "familia", "cuerpo", "dinero"];

/** @type {readonly ["emociones", "checkin", "diario", "mapa", "reportes"]} */
export const APP_TABS = ["emociones", "checkin", "diario", "mapa", "reportes"];
/** @typedef {(typeof APP_TABS)[number]} TabId */
/** @type {TabId} */
export const DEFAULT_TAB = APP_TABS[0];

export { emociones, EMOTION_NAME_TRANSLATIONS, EMOTION_CONTENT_TRANSLATIONS, EMOTION_RELATIONS, MOOD_CATEGORIES } from "./data/emotions.js";
export { REGULATION_TECHNIQUES } from "./data/techniques.js";
export { BODY_ZONES, SIMPLE_ZONE_GROUPS, BODY_ZONE_EMOTIONS } from "./data/bodyMap.data.js";

import { es } from "./i18n/es.js";
import { en } from "./i18n/en.js";
export const TRANSLATIONS = { es, en };
