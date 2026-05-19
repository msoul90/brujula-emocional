import { describe, it, expect } from "vitest";
import {
    escHtml, escAttr,
    graphHeightFor,
    hasNodeMatch,
    buildGroupedRelations,
} from "../js/emotionMap.logic.js";

describe("escHtml", () => {
    it("escapa & < >", () => {
        expect(escHtml("<b>AT&T</b>")).toBe("&lt;b&gt;AT&amp;T&lt;/b&gt;");
    });

    it("convierte números a string", () => {
        expect(escHtml(42)).toBe("42");
    });

    it("devuelve string vacío para null", () => {
        expect(escHtml(null)).toBe("");
    });

    it("devuelve string vacío para undefined", () => {
        expect(escHtml(undefined)).toBe("");
    });

    it("no escapa comillas dobles", () => {
        expect(escHtml('"hola"')).toBe('"hola"');
    });
});

describe("escAttr", () => {
    it("escapa comillas dobles y simples además de < > &", () => {
        expect(escAttr('<a href="x">it\'s</a>')).toBe("&lt;a href=&quot;x&quot;&gt;it&#39;s&lt;/a&gt;");
    });

    it("delega a escHtml para el resto", () => {
        expect(escAttr("<b>")).toBe("&lt;b&gt;");
    });
});

// Constantes internas: GRAPH_H_NARROW=430, GRAPH_H_SMALL=410, GRAPH_H_DEFAULT=460
// BP_NARROW=360, BP_SMALL=420, MIN_H=420, MAX_H=560
describe("graphHeightFor", () => {
    it("usa altura estrecha para anchos pequeños (< 360)", () => {
        const h = graphHeightFor(300, 20, 28);
        expect(h).toBe(430);
    });

    it("usa base estrecha para anchos medianos (360 ≤ w < 420), con piso de 420", () => {
        const h = graphHeightFor(390, 20, 28);
        expect(h).toBe(420);
    });

    it("usa altura por defecto para anchos normales (≥ 420)", () => {
        const h = graphHeightFor(500, 20, 28);
        expect(h).toBe(460);
    });

    it("incrementa la altura con más nodos", () => {
        const base = graphHeightFor(500, 20, 28);
        const more = graphHeightFor(500, 30, 28);
        expect(more).toBeGreaterThan(base);
    });

    it("no supera el máximo de 560", () => {
        expect(graphHeightFor(500, 200, 200)).toBeLessThanOrEqual(560);
    });

    it("no baja del mínimo de 420", () => {
        expect(graphHeightFor(500, 0, 0)).toBeGreaterThanOrEqual(420);
    });
});

const nodes = [
    { nombre: "Calma",    label: "Calma",    color: "#abc", x: 0, y: 0 },
    { nombre: "Ansiedad", label: "Anxiety",  color: "#def", x: 1, y: 1 },
    { nombre: "Alegría",  label: "Alegría",  color: "#f00", x: 2, y: 2 },
];

describe("hasNodeMatch", () => {
    it("devuelve true si hay un nodo seleccionado (sin importar el filtro)", () => {
        expect(hasNodeMatch(nodes, "xyz", "Calma")).toBe(true);
    });

    it("devuelve true si el filtro está vacío", () => {
        expect(hasNodeMatch(nodes, "", null)).toBe(true);
    });

    it("devuelve true si algún label coincide con el filtro", () => {
        expect(hasNodeMatch(nodes, "Calma", null)).toBe(true);
    });

    it("devuelve true con coincidencia parcial insensible a mayúsculas", () => {
        expect(hasNodeMatch(nodes, "anxiety", null)).toBe(true);
    });

    it("devuelve false si ningún label coincide", () => {
        expect(hasNodeMatch(nodes, "zzz_noexiste", null)).toBe(false);
    });
});

const edges = [
    { ai: 0, bi: 1, type: "coexiste"  },
    { ai: 0, bi: 2, type: "escala_a"  },
    { ai: 1, bi: 2, type: "enmascara" },
];

describe("buildGroupedRelations", () => {
    it("devuelve null si no hay nodo seleccionado", () => {
        expect(buildGroupedRelations(null, nodes, edges)).toBeNull();
    });

    it("agrupa relaciones por tipo para el nodo seleccionado", () => {
        const result = buildGroupedRelations("Calma", nodes, edges);
        expect(result).not.toBeNull();
        expect(result.coexiste).toContain("Anxiety");
        expect(result.escala_a).toContain("Alegría");
    });

    it("no incluye relaciones que no pertenecen al nodo seleccionado", () => {
        const result = buildGroupedRelations("Calma", nodes, edges);
        expect(result.enmascara).toBeUndefined();
    });

    it("devuelve objeto vacío si el nodo no tiene edges", () => {
        const isolatedNodes = [{ nombre: "Solo", label: "Solo", color: "#000", x: 0, y: 0 }];
        const result = buildGroupedRelations("Solo", isolatedNodes, []);
        expect(result).toEqual({});
    });
});
