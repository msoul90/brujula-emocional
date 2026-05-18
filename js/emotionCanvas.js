// @ts-check
import { getReadableTextColor, wrapTextLines } from "./utils.js";

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {number | [number, number, number, number]} radii
 */
function roundRectPath(ctx, x, y, w, h, radii) {
    const [tl, tr, br, bl] = Array.isArray(radii) ? radii : [radii, radii, radii, radii];
    ctx.moveTo(x + tl, y);
    ctx.lineTo(x + w - tr, y);
    ctx.arcTo(x + w, y, x + w, y + tr, tr);
    ctx.lineTo(x + w, y + h - br);
    ctx.arcTo(x + w, y + h, x + w - br, y + h, br);
    ctx.lineTo(x + bl, y + h);
    ctx.arcTo(x, y + h, x, y + h - bl, bl);
    ctx.lineTo(x, y + tl);
    ctx.arcTo(x, y, x + tl, y, tl);
    ctx.closePath();
}

/**
 * @param {import('./data/emotions.js').Emotion} e
 * @param {string} displayName
 * @param {string} tagLabel
 * @param {string} mensaje
 * @param {string} responseLabel
 * @param {string} respuesta
 * @returns {Promise<HTMLCanvasElement>}
 */
export async function buildEmotionCanvas(e, displayName, tagLabel, mensaje, responseLabel, respuesta) {
    await document.fonts.load("900 1px Inter").catch(() => {});

    const W = 1080;
    const H = 1350;
    const PAD = 84;
    const SANS = "'Inter', system-ui, -apple-system, sans-serif";
    const SERIF = "Georgia, \"Times New Roman\", serif";

    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;

    const ctx = canvas.getContext("2d");
    if (!ctx) return canvas;

    const textOnColor = getReadableTextColor(e.color);
    const tagAlpha = textOnColor === "#f8fafc" ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.4)";

    ctx.fillStyle = "#f8fafc";
    ctx.beginPath();
    roundRectPath(ctx, 0, 0, W, H, 0);
    ctx.fill();

    const ACCENT_H = 320;
    ctx.fillStyle = e.color;
    ctx.beginPath();
    roundRectPath(ctx, 0, 0, W, ACCENT_H, [0, 0, 0, 0]);
    ctx.fill();

    ctx.fillStyle = tagAlpha;
    ctx.font = `600 26px ${SANS}`;
    ctx.fillText(tagLabel.toUpperCase(), PAD, 112);

    ctx.fillStyle = textOnColor;
    ctx.font = `900 92px ${SANS}`;
    ctx.fillText(displayName, PAD, 248);

    let y = ACCENT_H + 76;
    ctx.fillStyle = "#475569";
    ctx.font = `italic 42px ${SERIF}`;
    const msgLines = wrapTextLines(ctx, `"${mensaje}"`, W - PAD * 2);
    for (const line of msgLines) {
        ctx.fillText(line, PAD, y);
        y += 64;
    }

    y += 48;
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(PAD, y);
    ctx.lineTo(W - PAD, y);
    ctx.stroke();

    y += 56;
    ctx.fillStyle = "#94a3b8";
    ctx.font = `700 22px ${SANS}`;
    ctx.fillText(responseLabel.toUpperCase(), PAD, y);

    y += 50;
    ctx.fillStyle = "#1e293b";
    ctx.font = `500 38px ${SANS}`;
    const respLines = wrapTextLines(ctx, respuesta, W - PAD * 2);
    for (const line of respLines) {
        ctx.fillText(line, PAD, y);
        y += 58;
    }

    const contentFloor = y + 20;
    if (contentFloor < H - 220) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, contentFloor, W, H - contentFloor);
        ctx.clip();

        ctx.fillStyle = e.color;
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.arc(W * 0.85, H * 0.78, 380, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 0.14;
        ctx.beginPath();
        ctx.arc(W * 0.12, H * 0.92, 260, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 0.1;
        ctx.beginPath();
        ctx.arc(W * 0.55, H * 0.96, 190, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 1;
        const fadeH = 80;
        const fade = ctx.createLinearGradient(0, contentFloor, 0, contentFloor + fadeH);
        fade.addColorStop(0, "#f8fafc");
        fade.addColorStop(1, "rgba(248,250,252,0)");
        ctx.fillStyle = fade;
        ctx.fillRect(0, contentFloor, W, fadeH);
        ctx.restore();
    }

    const brand = "Brújula Emocional";
    ctx.font = `500 26px ${SANS}`;
    const brandW = ctx.measureText(brand).width;
    const brandX = W - PAD - brandW;
    const brandY = H - 64;

    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(brandX, brandY - 24);
    ctx.lineTo(W - PAD, brandY - 24);
    ctx.stroke();

    ctx.fillStyle = "#475569";
    ctx.fillText(brand, brandX, brandY);

    return canvas;
}
