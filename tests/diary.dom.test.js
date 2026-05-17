// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";
import { createDiary } from "../js/diary.jsx";
import { DIARY_KEY } from "../js/constants.js";

const MOCK_EMOCIONES = [
    { nombre: "Alegría",  color: "#facc15", text: "#1e293b" },
    { nombre: "Tristeza", color: "#60a5fa", text: "#1e293b" },
];

const T = {
    "diary.title":         "Diario emocional",
    "diary.privacyNote":   "Solo en este dispositivo",
    "diary.newEntry":      "Nueva entrada",
    "diary.exportButton":  "Exportar",
    "diary.emptyPrompt":   "Aún no hay entradas.",
    "diary.emptyAction1":  "Hacer check-in",
    "diary.emptyAction2":  "Descubrir qué siento",
    "diary.todayLabel":    "Hoy",
    "diary.deleteButton":  "Eliminar entrada",
    "diary.clearAll":      "Borrar todas las entradas",
    "diary.clearConfirm":  "¿Borrar todo?",
    "diary.pickEmotion":   "¿Qué sentiste?",
    "diary.notePlaceholder": "Nota (opcional)",
    "diary.tagLabel":      "Contexto",
    "diary.tagTrabajo":    "Trabajo",
    "diary.tagPareja":     "Pareja",
    "diary.tagFamilia":    "Familia",
    "diary.tagCuerpo":     "Cuerpo",
    "diary.tagDinero":     "Dinero",
    "diary.saveButton":    "Guardar",
    "diary.cancelButton":  "Cancelar",
    "diary.addedFeedback": "Guardado en tu diario",
    "diary.noteLabel":     "Nota",
};
const t = (key) => T[key] ?? key;
const getDisplayName = (nombre) => nombre;

function buildDOM() {
    document.body.innerHTML = `<div id="diary-content"></div>`;
}

function makeEntry(overrides = {}) {
    return {
        id: Date.now(),
        date: new Date().toISOString(),
        emotion: "Alegría",
        note: "",
        tags: [],
        ...overrides,
    };
}

describe("diary — DOM (estado vacío)", () => {
    let diary;

    beforeEach(() => {
        localStorage.clear();
        buildDOM();
        diary = createDiary({ t, getDisplayName, emociones: MOCK_EMOCIONES });
    });

    it("renderForTab muestra el título del diario", () => {
        diary.renderForTab();
        expect(document.getElementById("diary-content").textContent).toContain("Diario emocional");
    });

    it("estado vacío muestra el mensaje de bienvenida", () => {
        diary.renderForTab();
        expect(document.getElementById("diary-content").textContent).toContain("Aún no hay entradas.");
    });

    it("estado vacío muestra el botón de check-in", () => {
        diary.renderForTab();
        const btn = document.getElementById("diary-content").querySelector("#diary-empty-checkin");
        expect(btn).not.toBeNull();
        expect(btn.textContent.trim()).toBe("Hacer check-in");
    });

    it("estado vacío muestra el botón de quiz", () => {
        diary.renderForTab();
        const btn = document.getElementById("diary-content").querySelector("#diary-empty-quiz");
        expect(btn).not.toBeNull();
        expect(btn.textContent.trim()).toBe("Descubrir qué siento");
    });

    it("sin entradas no muestra el botón de exportar", () => {
        diary.renderForTab();
        expect(document.getElementById("diary-content").querySelector("#diary-export-btn")).toBeNull();
    });

    it("siempre muestra el botón de nueva entrada", () => {
        diary.renderForTab();
        expect(document.getElementById("diary-content").querySelector("#diary-new-btn")).not.toBeNull();
    });
});

describe("diary — DOM (con entradas)", () => {
    let diary;

    beforeEach(() => {
        localStorage.clear();
        buildDOM();
        diary = createDiary({ t, getDisplayName, emociones: MOCK_EMOCIONES });
    });

    it("con entradas muestra el nombre de la emoción", () => {
        localStorage.setItem(DIARY_KEY, JSON.stringify([makeEntry({ emotion: "Alegría" })]));
        diary.renderForTab();
        expect(document.getElementById("diary-content").textContent).toContain("Alegría");
    });

    it("con entradas muestra el botón de exportar", () => {
        localStorage.setItem(DIARY_KEY, JSON.stringify([makeEntry()]));
        diary.renderForTab();
        expect(document.getElementById("diary-content").querySelector("#diary-export-btn")).not.toBeNull();
    });

    it("el botón de borrar entrada tiene aria-label correcto", () => {
        localStorage.setItem(DIARY_KEY, JSON.stringify([makeEntry()]));
        diary.renderForTab();
        const deleteBtn = document.getElementById("diary-content").querySelector(".diary-delete-btn");
        expect(deleteBtn).not.toBeNull();
        expect(deleteBtn.getAttribute("aria-label")).toBe("Eliminar entrada");
    });

    it("las notas de usuario son escapadas (XSS)", () => {
        const xssNote = '<img src=x onerror="alert(1)">';
        localStorage.setItem(DIARY_KEY, JSON.stringify([makeEntry({ note: xssNote })]));
        diary.renderForTab();
        const content = document.getElementById("diary-content");
        expect(content.querySelector("img")).toBeNull();
        expect(content.innerHTML).toContain("&lt;img");
    });

    it("las etiquetas se renderizan con el texto traducido", () => {
        localStorage.setItem(DIARY_KEY, JSON.stringify([makeEntry({ tags: ["trabajo", "familia"] })]));
        diary.renderForTab();
        const content = document.getElementById("diary-content").textContent;
        expect(content).toContain("Trabajo");
        expect(content).toContain("Familia");
    });

    it("click en Borrar entrada la elimina de la vista", () => {
        const entry = makeEntry({ id: 42 });
        localStorage.setItem(DIARY_KEY, JSON.stringify([entry]));
        diary.renderForTab();
        document.getElementById("diary-content").querySelector(".diary-delete-btn").click();
        expect(document.getElementById("diary-content").textContent).not.toContain("Alegría");
    });

    it("con más de una entrada muestra el botón de borrar todo", () => {
        localStorage.setItem(DIARY_KEY, JSON.stringify([makeEntry({ id: 1 }), makeEntry({ id: 2 })]));
        diary.renderForTab();
        expect(document.getElementById("diary-content").querySelector("#diary-clear-btn")).not.toBeNull();
    });

    it("con una sola entrada no muestra el botón de borrar todo", () => {
        localStorage.setItem(DIARY_KEY, JSON.stringify([makeEntry()]));
        diary.renderForTab();
        expect(document.getElementById("diary-content").querySelector("#diary-clear-btn")).toBeNull();
    });
});

describe("diary — DOM (formulario nueva entrada)", () => {
    let diary;

    beforeEach(() => {
        localStorage.clear();
        buildDOM();
        diary = createDiary({ t, getDisplayName, emociones: MOCK_EMOCIONES });
    });

    it("click en Nueva entrada abre el formulario", () => {
        diary.renderForTab();
        document.getElementById("diary-content").querySelector("#diary-new-btn").click();
        expect(document.getElementById("diary-content").querySelector("#diary-add-form")).not.toBeNull();
    });

    it("el formulario contiene el buscador de emociones", () => {
        diary.renderForTab();
        document.getElementById("diary-content").querySelector("#diary-new-btn").click();
        expect(document.getElementById("diary-content").querySelector("#diary-emotion-search")).not.toBeNull();
    });

    it("el formulario contiene el textarea de nota", () => {
        diary.renderForTab();
        document.getElementById("diary-content").querySelector("#diary-new-btn").click();
        expect(document.getElementById("diary-content").querySelector("#diary-note-input")).not.toBeNull();
    });

    it("el formulario muestra las 5 etiquetas de contexto", () => {
        diary.renderForTab();
        document.getElementById("diary-content").querySelector("#diary-new-btn").click();
        const tagBtns = document.getElementById("diary-content").querySelectorAll(".diary-tag-btn");
        expect(tagBtns.length).toBe(5);
    });

    it("click en Cancelar oculta el formulario", () => {
        diary.renderForTab();
        const content = document.getElementById("diary-content");
        content.querySelector("#diary-new-btn").click();
        content.querySelector("#diary-form-cancel").click();
        expect(content.querySelector("#diary-add-form")).toBeNull();
    });

    it("segundo click en Nueva entrada oculta el formulario (toggle)", () => {
        diary.renderForTab();
        const content = document.getElementById("diary-content");
        content.querySelector("#diary-new-btn").click();
        expect(content.querySelector("#diary-add-form")).not.toBeNull();
        content.querySelector("#diary-new-btn").click();
        expect(content.querySelector("#diary-add-form")).toBeNull();
    });
});
