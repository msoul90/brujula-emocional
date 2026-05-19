import { describe, it, expect } from "vitest";
import { shortRecentLabel, filterEmotions, filterMaskedEmotions } from "../js/uiHelpers.js";

const identity = (nombre) => nombre;
const noField = (_e, field) => _e[field] ?? "";

describe("shortRecentLabel", () => {
    it("devuelve el nombre sin cambios si tiene 9 caracteres o menos", () => {
        expect(shortRecentLabel("Calma")).toBe("Calma");
        expect(shortRecentLabel("123456789")).toBe("123456789");
    });

    it("trunca a 9 caracteres con puntos suspensivos si es más largo", () => {
        expect(shortRecentLabel("Vergüenza")).toBe("Vergüenza");
        expect(shortRecentLabel("Aburrimiento")).toBe("Aburrimie...");
    });

    it("maneja string vacío", () => {
        expect(shortRecentLabel("")).toBe("");
    });
});

const emociones = [
    { nombre: "Calma", color: "#abc", siente: "relajación", dispara: "silencio", mensaje: "paz interior" },
    { nombre: "Ansiedad", color: "#def", siente: "tensión", dispara: "incertidumbre", mensaje: "alerta" },
    { nombre: "Alegría", color: "#f00", siente: "ligereza", dispara: "logros", mensaje: "disfruta" },
];

describe("filterEmotions", () => {
    it("devuelve todas las emociones cuando el filtro está vacío", () => {
        expect(filterEmotions(emociones, "", identity, noField)).toHaveLength(3);
    });

    it("devuelve todas cuando el filtro es solo espacios", () => {
        expect(filterEmotions(emociones, "   ", identity, noField)).toHaveLength(3);
    });

    it("filtra por nombre (case-insensitive)", () => {
        const result = filterEmotions(emociones, "calma", identity, noField);
        expect(result).toHaveLength(1);
        expect(result[0].nombre).toBe("Calma");
    });

    it("filtra por contenido del campo siente", () => {
        const result = filterEmotions(emociones, "tensión", identity, noField);
        expect(result).toHaveLength(1);
        expect(result[0].nombre).toBe("Ansiedad");
    });

    it("filtra ignorando acentos (normalización)", () => {
        const result = filterEmotions(emociones, "tension", identity, noField);
        expect(result).toHaveLength(1);
        expect(result[0].nombre).toBe("Ansiedad");
    });

    it("devuelve array vacío si no hay coincidencias", () => {
        expect(filterEmotions(emociones, "zzz_no_existe", identity, noField)).toHaveLength(0);
    });
});

const relaciones = [
    { type: "enmascara", from: "Ansiedad", to: "Miedo" },
    { type: "enmascara", from: "Ansiedad", to: "Calma" },
    { type: "coexiste",  from: "Ansiedad", to: "Alegría" },
    { type: "enmascara", from: "Alegría",  to: "Calma" },
];

describe("filterMaskedEmotions", () => {
    it("devuelve las emociones enmascaradas por la emoción dada", () => {
        const result = filterMaskedEmotions(relaciones, "Ansiedad", emociones);
        expect(result).toHaveLength(1);
        expect(result[0].nombre).toBe("Calma");
    });

    it("ignora relaciones de otros tipos", () => {
        const result = filterMaskedEmotions(relaciones, "Ansiedad", emociones);
        const nombres = result.map((e) => e.nombre);
        expect(nombres).not.toContain("Alegría");
    });

    it("devuelve array vacío si la emoción no enmascara ninguna", () => {
        expect(filterMaskedEmotions(relaciones, "Calma", emociones)).toHaveLength(0);
    });

    it("no mezcla enmascaramientos de otras emociones", () => {
        const result = filterMaskedEmotions(relaciones, "Alegría", emociones);
        expect(result).toHaveLength(1);
        expect(result[0].nombre).toBe("Calma");
    });
});
