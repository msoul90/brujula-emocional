// @ts-check
export function initServiceWorker() {
    if (!("serviceWorker" in navigator)) return;

    globalThis.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).catch(() => {
            // Keep app functional even if service worker registration fails.
        });
    });

    // Reload once when a new SW takes control so users always get fresh assets.
    navigator.serviceWorker.addEventListener("controllerchange", () => {
        globalThis.location.reload();
    });
}
