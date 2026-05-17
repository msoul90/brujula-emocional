import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { createI18n } from "../js/i18n.js";
import { emociones } from "../js/constants.js";

const originalLocalStorage = globalThis.localStorage;
const originalNavigator = globalThis.navigator;
const originalDocument = globalThis.document;

function setGlobal(name, value) {
    Object.defineProperty(globalThis, name, {
        configurable: true,
        writable: true,
        value,
    });
}

function createMemoryStorage() {
    const store = new Map();
    return {
        getItem: (key) => (store.has(key) ? store.get(key) : null),
        setItem: (key, value) => { store.set(key, String(value)); },
        removeItem: (key) => { store.delete(key); },
        clear: () => { store.clear(); },
    };
}

beforeEach(() => {
    setGlobal("localStorage", createMemoryStorage());
    setGlobal("document", {
        documentElement: { lang: "es" },
        getElementById: () => null,
    });
});

afterEach(() => {
    setGlobal("localStorage", originalLocalStorage);
    setGlobal("document", originalDocument);
    // Navigator is read-only in this runtime; keep original untouched.
    void originalNavigator;
});

function makeI18n(lang = "es") {
    let current = lang;
    return createI18n({
        getLang: () => current,
        setLang: (l) => { current = l; },
        onLanguageChanged: () => {},
    });
}

function makeI18nWithSpy(lang = "es") {
    let current = lang;
    let changed = 0;
    const i18n = createI18n({
        getLang: () => current,
        setLang: (l) => { current = l; },
        onLanguageChanged: () => { changed += 1; },
    });
    return {
        ...i18n,
        getLangValue: () => current,
        getChangedCount: () => changed,
    };
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

    it("resuelve claves anidadas", () => {
        const { t } = makeI18n("es");
        expect(t("nav.diary")).toBe("Diario");
    });

    it("hace fallback a es para idioma no soportado", () => {
        const { t } = makeI18n("fr");
        expect(t("nav.mapa")).toBe("Mapa");
    });
});

describe("detectInitialLanguage()", () => {
    it("usa idioma guardado en localStorage", () => {
        localStorage.setItem("brujulaIdioma", "en");
        const { detectInitialLanguage } = makeI18n("es");
        expect(detectInitialLanguage()).toBe("en");
        localStorage.removeItem("brujulaIdioma");
    });

    it("usa navegador como fallback", () => {
        localStorage.removeItem("brujulaIdioma");
        const { detectInitialLanguage } = makeI18n("es");
        const expected = (globalThis.navigator?.language?.toLowerCase() ?? "es").startsWith("en") ? "en" : "es";
        expect(detectInitialLanguage()).toBe(expected);
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

    it("hace fallback al campo original si no existe traducción", () => {
        const { getEmotionField } = makeI18n("en");
        const custom = { nombre: "NoExiste", respuesta: "Respuesta original" };
        expect(getEmotionField(custom, "respuesta")).toBe("Respuesta original");
    });
});

describe("setLanguage()", () => {
    it("normaliza idioma, persiste y dispara callback", () => {
        const i18n = makeI18nWithSpy("es");
        i18n.setLanguage("fr");
        expect(i18n.getLangValue()).toBe("es");
        expect(localStorage.getItem("brujulaIdioma")).toBe("es");
        expect(i18n.getChangedCount()).toBe(1);
    });
});
