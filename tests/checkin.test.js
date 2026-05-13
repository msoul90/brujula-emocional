import { describe, it, expect } from "vitest";
import { MOOD_CATEGORIES, TRANSLATIONS, emociones } from "../js/constants.js";

const emotionNames = new Set(emociones.map((e) => e.nombre));

describe("MOOD_CATEGORIES estructura", () => {
    it("hay al menos 2 categorías definidas", () => {
        expect(MOOD_CATEGORIES.length).toBeGreaterThanOrEqual(2);
    });

    it("cada categoría tiene los campos requeridos", () => {
        for (const cat of MOOD_CATEGORIES) {
            expect(typeof cat.key, `${cat.key}.key`).toBe("string");
            expect(typeof cat.labelKey, `${cat.key}.labelKey`).toBe("string");
            expect(typeof cat.emoji, `${cat.key}.emoji`).toBe("string");
            expect(typeof cat.color, `${cat.key}.color`).toBe("string");
            expect(Array.isArray(cat.emotions), `${cat.key}.emotions`).toBe(true);
            expect(cat.emotions.length, `${cat.key} debe tener emociones`).toBeGreaterThan(0);
        }
    });

    it("todas las emociones referenciadas existen en constants.js", () => {
        for (const cat of MOOD_CATEGORIES) {
            for (const nombre of cat.emotions) {
                expect(
                    emotionNames.has(nombre),
                    `${cat.key}: "${nombre}" no existe en emociones`
                ).toBe(true);
            }
        }
    });

    it("los keys de categoría son únicos", () => {
        const keys = MOOD_CATEGORIES.map((c) => c.key);
        expect(new Set(keys).size).toBe(keys.length);
    });
});

describe("MOOD_CATEGORIES traducciones", () => {
    it("todos los labelKey tienen traducción en español", () => {
        for (const cat of MOOD_CATEGORIES) {
            expect(
                TRANSLATIONS.es[cat.labelKey],
                `es: falta "${cat.labelKey}"`
            ).toBeTruthy();
        }
    });

    it("todos los labelKey tienen traducción en inglés", () => {
        for (const cat of MOOD_CATEGORIES) {
            expect(
                TRANSLATIONS.en[cat.labelKey],
                `en: falta "${cat.labelKey}"`
            ).toBeTruthy();
        }
    });
});

describe("Nuevas emociones en constants.js", () => {
    const nuevas = ["Envidia", "Gratitud", "Orgullo", "Nostalgia", "Alivio", "Aburrimiento", "Disgusto", "Decepción", "Ternura"];

    it("todas las nuevas emociones están en el array emociones", () => {
        for (const nombre of nuevas) {
            expect(emotionNames.has(nombre), `"${nombre}" no encontrada`).toBe(true);
        }
    });

    it("cada nueva emoción tiene todos los campos requeridos", () => {
        const campos = ["nombre", "color", "text", "siente", "dispara", "funcion", "mensaje", "impulso", "respuesta"];
        for (const nombre of nuevas) {
            const e = emociones.find((em) => em.nombre === nombre);
            for (const campo of campos) {
                expect(typeof e[campo], `${nombre}.${campo}`).toBe("string");
                expect(e[campo].length, `${nombre}.${campo} no debe estar vacío`).toBeGreaterThan(0);
            }
        }
    });
});
