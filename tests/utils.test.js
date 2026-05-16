import { describe, it, expect } from "vitest";
import { escapeHtml, normalizeText, getReadableTextColor, wrapTextLines } from "../js/utils.js";

describe("escapeHtml", () => {
    it("escapa el carácter &", () => {
        expect(escapeHtml("a & b")).toBe("a &amp; b");
    });

    it("escapa los caracteres < y >", () => {
        expect(escapeHtml("<script>")).toBe("&lt;script&gt;");
    });

    it("escapa las comillas dobles", () => {
        expect(escapeHtml('"hola"')).toBe("&quot;hola&quot;");
    });

    it("escapa las comillas simples", () => {
        expect(escapeHtml("it's")).toBe("it&#39;s");
    });

    it("combina múltiples caracteres especiales", () => {
        expect(escapeHtml('<a href="x">O\'Reilly & Sons</a>')).toBe(
            "&lt;a href=&quot;x&quot;&gt;O&#39;Reilly &amp; Sons&lt;/a&gt;"
        );
    });

    it("devuelve la cadena sin cambios cuando no hay caracteres especiales", () => {
        expect(escapeHtml("Alegría normal")).toBe("Alegría normal");
    });
});

describe("normalizeText", () => {
    it("convierte a minúsculas", () => {
        expect(normalizeText("ANSIEDAD")).toBe("ansiedad");
    });

    it("elimina tildes", () => {
        expect(normalizeText("Frustración")).toBe("frustracion");
        expect(normalizeText("Alegría")).toBe("alegria");
        expect(normalizeText("Vergüenza")).toBe("verguenza");
    });

    it("normaliza combinación de mayúsculas y tildes", () => {
        expect(normalizeText("Miedo")).toBe("miedo");
        expect(normalizeText("Soledad")).toBe("soledad");
    });
});

describe("getReadableTextColor", () => {
    it("devuelve texto oscuro para colores claros", () => {
        expect(getReadableTextColor("#ffffff")).toBe("#0f172a"); // blanco
        expect(getReadableTextColor("#fbbf24")).toBe("#0f172a"); // amarillo
        expect(getReadableTextColor("#bfdbfe")).toBe("#0f172a"); // azul claro
    });

    it("devuelve texto claro para colores oscuros", () => {
        expect(getReadableTextColor("#0f172a")).toBe("#f8fafc"); // casi negro
        expect(getReadableTextColor("#7c3aed")).toBe("#f8fafc"); // violeta oscuro
    });

    it("fallback a oscuro para hex inválido", () => {
        expect(getReadableTextColor("")).toBe("#0f172a");
        expect(getReadableTextColor("#abc")).toBe("#0f172a");
        expect(getReadableTextColor(null)).toBe("#0f172a");
    });
});

describe("wrapTextLines", () => {
    const mockCtx = { measureText: (text) => ({ width: text.length * 10 }) };

    it("texto corto cabe en una línea", () => {
        const lines = wrapTextLines(mockCtx, "Hola mundo", 500);
        expect(lines).toEqual(["Hola mundo"]);
    });

    it("rompe en múltiples líneas cuando supera maxWidth", () => {
        // Cada char = 10px, maxWidth = 80px → máx 8 chars por línea
        const lines = wrapTextLines(mockCtx, "uno dos tres cuatro", 80);
        expect(lines.length).toBeGreaterThan(1);
        for (const line of lines) {
            expect(line.length * 10).toBeLessThanOrEqual(80);
        }
    });

    it("una sola palabra larga nunca se parte", () => {
        const lines = wrapTextLines(mockCtx, "Superlargapalabra", 50);
        expect(lines).toEqual(["Superlargapalabra"]);
    });
});
