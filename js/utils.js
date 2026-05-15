export function isDarkMode() {
    return document.documentElement.classList.contains("dark");
}

export function normalizeText(value) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replaceAll(/[̀-ͯ]/g, "");
}

export function getReadableTextColor(hexColor) {
    const safeHex = (hexColor || "").replace("#", "");
    if (safeHex.length !== 6) return "#0f172a";

    const r = Number.parseInt(safeHex.slice(0, 2), 16);
    const g = Number.parseInt(safeHex.slice(2, 4), 16);
    const b = Number.parseInt(safeHex.slice(4, 6), 16);

    if ([r, g, b].some(Number.isNaN)) return "#0f172a";

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.52 ? "#f8fafc" : "#0f172a";
}

export function wrapTextLines(ctx, text, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let line = "";
    for (const word of words) {
        const test = line ? `${line} ${word}` : word;
        if (ctx.measureText(test).width > maxWidth && line) {
            lines.push(line);
            line = word;
        } else {
            line = test;
        }
    }
    if (line) lines.push(line);
    return lines;
}
