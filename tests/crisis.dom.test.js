// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";
import { createCrisisFlow } from "../js/crisis.js";

const T = {
    "crisis.step1Title": "Paso 1",
    "crisis.step1Body": "Cuerpo del paso 1",
    "crisis.next": "Sigo aquí →",
    "crisis.step2Title": "Anclaje",
    "crisis.step2Intro": "Mira alrededor",
    "crisis.step2Items": "5 cosas que ves|4 cosas que tocas|3 cosas que escuchas|2 cosas que hueles|1 cosa que sabores",
    "crisis.done": "Lo hice →",
    "crisis.step3Title": "Una acción",
    "crisis.step3Intro": "Elige algo pequeño",
    "crisis.step3Actions": "Tomar agua|Salir 5 minutos|Escribir|Llamar a alguien",
    "crisis.step3End": "Eso es todo lo que necesitas ahora.",
    "crisis.close": "Cerrar",
    "crisis.step": "Paso",
    "crisis.of": "de",
};
const t = (key) => T[key] ?? key;

function buildDOM() {
    document.body.innerHTML = `
        <button id="crisis-trigger-btn">Necesito ayuda</button>
        <dialog id="crisis-panel">
            <button id="crisis-panel-close" aria-label="Cerrar">×</button>
            <div id="crisis-content"></div>
        </dialog>
    `;
    // jsdom doesn't implement HTMLDialogElement.showModal/close — polyfill
    const dialog = document.getElementById("crisis-panel");
    dialog.showModal = function () { this.open = true; };
    dialog.close    = function () { this.open = false; };
}

function advanceSteps(n) {
    for (let i = 0; i < n; i++) {
        document.getElementById("crisis-content").querySelector("#crisis-next-btn").click();
    }
}

describe("crisis flow — DOM", () => {
    let crisis;

    beforeEach(() => {
        buildDOM();
        crisis = createCrisisFlow({ t });
        crisis.init();
    });

    it("click en el botón disparador abre el diálogo", () => {
        document.getElementById("crisis-trigger-btn").click();
        expect(document.getElementById("crisis-panel").open).toBe(true);
    });

    it("step 1 muestra título y cuerpo del paso", () => {
        document.getElementById("crisis-trigger-btn").click();
        const content = document.getElementById("crisis-content");
        expect(content.textContent).toContain("Paso 1");
        expect(content.textContent).toContain("Cuerpo del paso 1");
    });

    it("step 1 tiene botón Siguiente", () => {
        document.getElementById("crisis-trigger-btn").click();
        const btn = document.getElementById("crisis-content").querySelector("#crisis-next-btn");
        expect(btn).not.toBeNull();
        expect(btn.textContent.trim()).toBe("Sigo aquí →");
    });

    it("el indicador de progreso muestra 'Paso 1 de 3'", () => {
        document.getElementById("crisis-trigger-btn").click();
        expect(document.getElementById("crisis-content").textContent).toContain("Paso 1 de 3");
    });

    it("click en Siguiente avanza al paso 2", () => {
        document.getElementById("crisis-trigger-btn").click();
        advanceSteps(1);
        const content = document.getElementById("crisis-content");
        expect(content.textContent).toContain("Anclaje");
        expect(content.textContent).toContain("Paso 2 de 3");
    });

    it("step 2 muestra los ítems de anclaje como lista", () => {
        document.getElementById("crisis-trigger-btn").click();
        advanceSteps(1);
        const items = document.getElementById("crisis-content").querySelectorAll("li");
        expect(items.length).toBe(5);
    });

    it("step 2 tiene botón 'Lo hice'", () => {
        document.getElementById("crisis-trigger-btn").click();
        advanceSteps(1);
        const btn = document.getElementById("crisis-content").querySelector("#crisis-next-btn");
        expect(btn.textContent.trim()).toBe("Lo hice →");
    });

    it("click en 'Lo hice' avanza al paso 3", () => {
        document.getElementById("crisis-trigger-btn").click();
        advanceSteps(2);
        const content = document.getElementById("crisis-content");
        expect(content.textContent).toContain("Una acción");
        expect(content.textContent).toContain("Paso 3 de 3");
    });

    it("step 3 muestra acciones como radio buttons", () => {
        document.getElementById("crisis-trigger-btn").click();
        advanceSteps(2);
        const radios = document.getElementById("crisis-content").querySelectorAll('input[type="radio"]');
        expect(radios.length).toBe(4);
    });

    it("step 3 tiene botón Cerrar", () => {
        document.getElementById("crisis-trigger-btn").click();
        advanceSteps(2);
        const btn = document.getElementById("crisis-content").querySelector("#crisis-close-btn");
        expect(btn).not.toBeNull();
        expect(btn.textContent.trim()).toBe("Cerrar");
    });

    it("click en Cerrar (paso 3) cierra el diálogo", () => {
        document.getElementById("crisis-trigger-btn").click();
        advanceSteps(2);
        document.getElementById("crisis-content").querySelector("#crisis-close-btn").click();
        expect(document.getElementById("crisis-panel").open).toBe(false);
    });

    it("botón × del encabezado cierra el diálogo desde cualquier paso", () => {
        document.getElementById("crisis-trigger-btn").click();
        advanceSteps(1);
        document.getElementById("crisis-panel-close").click();
        expect(document.getElementById("crisis-panel").open).toBe(false);
    });

    it("evento cancel cierra el diálogo (Escape)", () => {
        document.getElementById("crisis-trigger-btn").click();
        const dialog = document.getElementById("crisis-panel");
        const ev = new Event("cancel", { bubbles: true, cancelable: true });
        dialog.dispatchEvent(ev);
        expect(dialog.open).toBe(false);
    });

    it("click en el backdrop (target === dialog) cierra el diálogo", () => {
        document.getElementById("crisis-trigger-btn").click();
        const dialog = document.getElementById("crisis-panel");
        dialog.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(dialog.open).toBe(false);
    });

    it("abriendo de nuevo reinicia desde paso 1", () => {
        document.getElementById("crisis-trigger-btn").click();
        advanceSteps(2);
        document.getElementById("crisis-content").querySelector("#crisis-close-btn").click();
        document.getElementById("crisis-trigger-btn").click();
        expect(document.getElementById("crisis-content").textContent).toContain("Paso 1 de 3");
    });
});
