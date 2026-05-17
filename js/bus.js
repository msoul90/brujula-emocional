/**
 * Minimal typed event bus to decouple inter-module communication.
 *
 * Supported events:
 *   "tab:switch"        — { tabId: string }
 *   "quiz:open"         — {}
 *   "diary:entry-added" — { nombre: string, note: string }
 *   "lang:changed"      — {}
 *
 * @typedef {"tab:switch"|"quiz:open"|"diary:entry-added"|"lang:changed"} BusEvent
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
