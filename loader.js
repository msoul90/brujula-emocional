(function () {
    const turnstileUrl = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=__onTurnstileLoad&render=explicit";

    function appendScript(src, options) {
        const script = document.createElement("script");
        script.src = src;
        script.defer = options?.defer ?? true;
        script.async = options?.async ?? false;
        document.body.appendChild(script);
    }

    function loadTurnstile() {
        const parsedUrl = new URL(turnstileUrl);
        if (parsedUrl.protocol !== "https:" || parsedUrl.hostname !== "challenges.cloudflare.com") {
            return;
        }

        appendScript(turnstileUrl, { async: true, defer: true });
    }

    const script = document.createElement("script");
    script.src = "dist/app.bundle.js";
    script.defer = true;

    if (location.protocol === "file:") {
        const warning = document.createElement("div");
        warning.className = "fixed top-0 inset-x-0 z-[60] bg-amber-100 border-b border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold px-4 py-2 text-center";
        warning.textContent = "Modo local (file://): para instalación y PWA completa usa http://localhost.";
        document.body.prepend(warning);
        document.body.classList.add("pt-10");
    }

    loadTurnstile();
    document.body.appendChild(script);
})();
