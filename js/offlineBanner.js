// @ts-check
/**
 * @param {{ t: (key: string) => string }} opts
 */
export function initOfflineBanner({ t }) {
    const banner = document.getElementById("offline-banner");
    const text = document.getElementById("offline-banner-text");
    if (!banner || !text) return;

    const update = () => {
        text.textContent = t("offlineBanner");
        banner.classList.toggle("hidden", navigator.onLine);
        banner.classList.toggle("flex", !navigator.onLine);
    };

    globalThis.addEventListener("online", update);
    globalThis.addEventListener("offline", update);
    update();
}
