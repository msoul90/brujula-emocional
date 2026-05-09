// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from "vitest";
import { createUI } from "../js/ui.js";
import { emociones } from "../js/constants.js";

const ctx2d = {
    fillStyle: "",
    strokeStyle: "",
    lineWidth: 1,
    font: "",
    textAlign: "",
    globalAlpha: 1,
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    arcTo: vi.fn(),
    closePath: vi.fn(),
    fill: vi.fn(),
    stroke: vi.fn(),
    fillText: vi.fn(),
    fillRect: vi.fn(),
    rect: vi.fn(),
    arc: vi.fn(),
    clip: vi.fn(),
    save: vi.fn(),
    restore: vi.fn(),
    measureText: vi.fn(() => ({ width: 0 })),
    createLinearGradient: vi.fn(() => ({ addColorStop: vi.fn() })),
};

function buildDOM() {
    document.body.innerHTML = `
        <div id="recent-section" class="hidden"><div id="recent-grid"></div></div>
        <div id="emotion-grid"></div>
        <dialog id="modal">
            <div id="modal-panel">
                <div id="modal-content"></div>
                <div>
                    <button id="share-btn" type="button"></button>
                    <button id="close-button" type="button">Entendido</button>
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
        t: (k) => k,
        getLastFocusedCard: () => null,
        setLastFocusedCard: vi.fn(),
        getIsClosingModal: () => false,
        setIsClosingModal: vi.fn(),
        modalAnimationMs: 0,
    });
}

describe("share-btn — no acumula listeners entre emociones", () => {
    let shareSpy;

    beforeEach(() => {
        buildDOM();

        vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(ctx2d);
        vi.spyOn(HTMLCanvasElement.prototype, "toBlob").mockImplementation((cb) =>
            cb(new Blob([""], { type: "image/png" }))
        );

        Object.defineProperty(document, "fonts", {
            value: { load: vi.fn().mockResolvedValue([]) },
            configurable: true,
        });

        vi.stubGlobal("requestAnimationFrame", (cb) => cb());

        shareSpy = vi.fn().mockResolvedValue(undefined);
        Object.defineProperty(navigator, "share", { value: shareSpy, configurable: true });
        Object.defineProperty(navigator, "canShare", { value: () => true, configurable: true });
    });

    it("compartir solo se llama una vez al abrir dos emociones distintas", async () => {
        const { showDetail } = makeUI();
        const [e1, e2] = emociones;

        showDetail(e1);
        showDetail(e2);

        document.getElementById("share-btn").click();
        await new Promise((r) => setTimeout(r, 10));

        expect(shareSpy).toHaveBeenCalledTimes(1);
    });

    it("comparte los datos de la última emoción abierta", async () => {
        const { showDetail } = makeUI();
        const [e1, e2] = emociones;

        showDetail(e1);
        showDetail(e2);

        document.getElementById("share-btn").click();
        await new Promise((r) => setTimeout(r, 10));

        expect(shareSpy.mock.calls[0][0].title).toBe(e2.nombre);
    });

    it("compartir tres veces consecutivas usa siempre la emoción más reciente", async () => {
        const { showDetail } = makeUI();
        const [e1, e2, e3] = emociones;

        showDetail(e1);
        showDetail(e2);
        showDetail(e3);

        document.getElementById("share-btn").click();
        await new Promise((r) => setTimeout(r, 10));

        expect(shareSpy).toHaveBeenCalledTimes(1);
        expect(shareSpy.mock.calls[0][0].title).toBe(e3.nombre);
    });
});
