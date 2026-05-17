function isIosDevice() {
    const ua = navigator.userAgent.toLowerCase();
    const touchMac = ua.includes("macintosh") && navigator.maxTouchPoints > 1;
    return /iphone|ipad|ipod/.test(ua) || touchMac;
}

function isStandalone() {
    return globalThis.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
}

export function initInstall() {
    const installButton = document.getElementById("install-app-button");
    const iosModal = document.getElementById("ios-install-modal");
    const iosClose = document.getElementById("ios-install-close");
    const isiOS = isIosDevice();
    let deferredPrompt = null;

    if (!installButton || !iosModal || !iosClose) return;

    const closeIosModal = () => {
        iosModal.classList.add("hidden");
        document.body.style.overflow = "auto";
    };

    const showIosModal = () => {
        iosModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    };

    const updateInstallVisibility = () => {
        const showAndroidInstall = deferredPrompt && !isStandalone();
        const showIosGuide = isiOS && !isStandalone();
        if (showAndroidInstall || showIosGuide) {
            installButton.classList.remove("hidden");
        } else {
            installButton.classList.add("hidden");
        }
    };

    globalThis.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        deferredPrompt = event;
        updateInstallVisibility();
    });

    globalThis.addEventListener("appinstalled", () => {
        deferredPrompt = null;
        closeIosModal();
        updateInstallVisibility();
    });

    installButton.addEventListener("click", async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            try {
                await deferredPrompt.userChoice;
            } catch {
                // ignore prompt cancellation
            }
            deferredPrompt = null;
            updateInstallVisibility();
            return;
        }

        if (isiOS && !isStandalone()) {
            showIosModal();
        }
    });

    iosClose.addEventListener("click", closeIosModal);
    iosModal.addEventListener("click", (event) => {
        if (event.target.id === "ios-install-modal") closeIosModal();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !iosModal.classList.contains("hidden")) {
            closeIosModal();
        }
    });

    updateInstallVisibility();
}
