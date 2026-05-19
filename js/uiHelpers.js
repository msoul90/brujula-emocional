// @ts-check
import { normalizeText } from "./utils.js";

/**
 * @param {string} nombre
 * @returns {string}
 */
export function shortRecentLabel(nombre) {
    return nombre.length > 9 ? `${nombre.slice(0, 9)}...` : nombre;
}

/**
 * @param {any[]} emociones
 * @param {string} filter
 * @param {(nombre: string) => string} getDisplayName
 * @param {(e: any, field: string) => string} getEmotionField
 * @returns {any[]}
 */
export function filterEmotions(emociones, filter, getDisplayName, getEmotionField) {
    const normalized = normalizeText(filter.trim());
    if (!normalized) return emociones;
    return emociones.filter((e) => {
        const searchText = [
            e.nombre, getDisplayName(e.nombre),
            e.siente, e.dispara, e.mensaje,
            getEmotionField(e, "siente"), getEmotionField(e, "dispara"),
            getEmotionField(e, "mensaje"), getEmotionField(e, "respuesta"),
        ].map(normalizeText).join(" ");
        return searchText.includes(normalized);
    });
}

/**
 * @param {Array<{type: string, from: string, to: string}>} relaciones
 * @param {string} emocionNombre
 * @param {any[]} emociones
 * @returns {any[]}
 */
export function filterMaskedEmotions(relaciones, emocionNombre, emociones) {
    return relaciones
        .filter((r) => r.type === "enmascara" && r.from === emocionNombre)
        .map((r) => emociones.find((em) => em.nombre === r.to))
        .filter(Boolean);
}
