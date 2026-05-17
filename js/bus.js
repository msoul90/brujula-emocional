// @ts-check
/**
 * Minimal typed event bus to decouple inter-module communication.
 *
 * Named events (non-exhaustive — store.js also emits `store:<key>` dynamically):
 *   "tab:switch"        — { tabId: string }
 *   "quiz:open"         — {}
 *   "diary:entry-added" — { nombre: string, note: string }
 *   "lang:changed"      — {}
 *   "store:<key>"       — { value: *, prev: * }
 *
 * @typedef {string} BusEvent
 */

/** @type {Record<string, Function[]>} */
const listeners = {};

/**
 * @param {BusEvent} event
 * @param {Function} fn
 */
export function on(event, fn) {
    (listeners[event] ??= []).push(fn);
}

/**
 * @param {BusEvent} event
 * @param {Function} fn
 */
export function off(event, fn) {
    if (!listeners[event]) return;
    listeners[event] = listeners[event].filter((l) => l !== fn);
}

/**
 * @param {BusEvent} event
 * @param {unknown} [data]
 */
export function emit(event, data) {
    listeners[event]?.forEach((fn) => fn(data));
}
