// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from "vitest";
import { createUI } from "../js/ui.jsx";
import { on, off } from "../js/bus.js";
import { emociones } from "../js/constants.js";

function buildDOM() {
    document.body.innerHTML = `
        <div id="recent-section" class="hidden"><div id="recent-grid"></div></div>
        <div id="emotion-grid"></div>
        <dialog id="modal">
            <div id="modal-panel">
                <div id="modal-content"></div>
                <div>
                    <button id="share-btn" type="button"></button>
                    <button id="diary-add-btn" type="button"></button>
                    <button id="close-button" type="button"></button>
                </div>
            </div>
        </dialog>
    `;
    const modal = document.getElementById("modal");
    modal.showModal = vi.fn();
    modal.close = vi.fn();
}

function makeUI() {
    return createUI({
        emociones,
        getDisplayName: (n) => n,
        getEmotionField: (e, f) => e[f] ?? "",
        t: (k) => ({
            "diary.noteLabel":      "Nota",
            "diary.notePlaceholder": "Nota opcional",
            "diary.tagLabel":       "Contexto",
            "diary.tagTrabajo":     "Trabajo",
            "diary.tagPareja":      "Pareja",
            "diary.tagFamilia":     "Familia",
            "diary.tagCuerpo":      "Cuerpo",
            "diary.tagDinero":      "Dinero",
            "diary.saveButton":     "Guardar",
            "diary.cancelButton":   "Cancelar",
            "diary.addedFeedback":  "Guardado",
        }[k] ?? k),
        modalAnimationMs: 0,
    });
}

describe("DiaryInlineForm — modal inline", () => {
    beforeEach(() => {
        buildDOM();
        vi.stubGlobal("requestAnimationFrame", (cb) => cb());
    });

    it("muestra los botones de tags al abrir el formulario inline", () => {
        const { showDetail } = makeUI();
        showDetail(emociones[0]);

        document.getElementById("diary-add-btn").click();

        const panel = document.getElementById("modal-panel");
        expect(panel.textContent).toContain("Trabajo");
        expect(panel.textContent).toContain("Familia");
    });

    it("emite diary:add con el tag seleccionado al guardar", async () => {
        const { showDetail } = makeUI();
        showDetail(emociones[0]);

        document.getElementById("diary-add-btn").click();

        const panel = document.getElementById("modal-panel");
        const tagBtn = [...panel.querySelectorAll("button")].find(
            (b) => b.textContent === "Trabajo"
        );
        tagBtn.click();

        // Wait for Preact to flush the state update and re-render the component
        await new Promise((r) => setTimeout(r, 0));

        const received = [];
        const handler = (payload) => received.push(payload);
        on("diary:add", handler);

        const saveBtn = [...panel.querySelectorAll("button")].find(
            (b) => b.textContent === "Guardar"
        );
        saveBtn.click();

        off("diary:add", handler);

        expect(received).toHaveLength(1);
        expect(received[0].nombre).toBe(emociones[0].nombre);
        expect(received[0].tags).toEqual(["trabajo"]);
    });

    it("emite diary:add con tags vacíos si no se selecciona ninguno", () => {
        const { showDetail } = makeUI();
        showDetail(emociones[0]);

        document.getElementById("diary-add-btn").click();

        const panel = document.getElementById("modal-panel");
        const received = [];
        const handler = (payload) => received.push(payload);
        on("diary:add", handler);

        const saveBtn = [...panel.querySelectorAll("button")].find(
            (b) => b.textContent === "Guardar"
        );
        saveBtn.click();

        off("diary:add", handler);

        expect(received[0].tags).toEqual([]);
    });

    it("cerrar el formulario inline elimina el nodo del DOM", () => {
        const { showDetail } = makeUI();
        showDetail(emociones[0]);

        document.getElementById("diary-add-btn").click();
        expect(document.getElementById("diary-inline-form")).not.toBeNull();

        const panel = document.getElementById("modal-panel");
        const cancelBtn = [...panel.querySelectorAll("button")].find(
            (b) => b.textContent === "Cancelar"
        );
        cancelBtn.click();

        expect(document.getElementById("diary-inline-form")).toBeNull();
    });
});
