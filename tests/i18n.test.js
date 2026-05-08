import { describe, it, expect } from "vitest";
import { createI18n } from "../js/i18n.js";
import { emociones } from "../js/constants.js";

function makeI18n(lang = "es") {
    let current = lang;
    return createI18n({
        getLang: () => current,
        setLang: (l) => { current = l; },
        onLanguageChanged: () => {},
    });
}

describe("t()", () => {
    it("devuelve la traducción en español", () => {
        const { t } = makeI18n("es");
        expect(t("closeButton")).toBe("Entendido");
        expect(t("searchPlaceholder")).toContain("sientes");
    });

    it("devuelve la traducción en inglés", () => {
        const { t } = makeI18n("en");
        expect(t("closeButton")).toBe("Got it");
        expect(t("searchPlaceholder")).toContain("feel");
    });

    it("devuelve la clave si no existe la traducción", () => {
        const { t } = makeI18n("es");
        expect(t("claveInexistente")).toBe("claveInexistente");
    });
});

describe("getDisplayName()", () => {
    it("devuelve el nombre original en español", () => {
        const { getDisplayName } = makeI18n("es");
        expect(getDisplayName("Tristeza")).toBe("Tristeza");
        expect(getDisplayName("Miedo")).toBe("Miedo");
    });

    it("devuelve la traducción en inglés", () => {
        const { getDisplayName } = makeI18n("en");
        expect(getDisplayName("Tristeza")).toBe("Sadness");
        expect(getDisplayName("Miedo")).toBe("Fear");
        expect(getDisplayName("Alegría")).toBe("Joy");
    });

    it("fallback al nombre original si no tiene traducción en inglés", () => {
        const { getDisplayName } = makeI18n("en");
        expect(getDisplayName("EmociónSinTraducir")).toBe("EmociónSinTraducir");
    });
});

describe("getEmotionField()", () => {
    const tristeza = emociones.find((e) => e.nombre === "Tristeza");

    it("devuelve el campo original en español", () => {
        const { getEmotionField } = makeI18n("es");
        expect(getEmotionField(tristeza, "respuesta")).toBe(tristeza.respuesta);
    });

    it("devuelve el campo traducido en inglés si existe", () => {
        const { getEmotionField } = makeI18n("en");
        const respuesta = getEmotionField(tristeza, "respuesta");
        expect(typeof respuesta).toBe("string");
        expect(respuesta.length).toBeGreaterThan(0);
    });
});
