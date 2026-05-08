(function () {
    var script = document.createElement("script");
    if (location.protocol === "file:") {
        script.src = "dist/app.bundle.js";
        script.defer = true;

        var warning = document.createElement("div");
        warning.className = "fixed top-0 inset-x-0 z-[60] bg-amber-100 border-b border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold px-4 py-2 text-center";
        warning.textContent = "Modo local (file://): para instalación y PWA completa usa http://localhost.";
        document.body.prepend(warning);
        document.body.classList.add("pt-10");
    } else {
        script.type = "module";
        script.src = "app.js";
    }
    document.body.appendChild(script);
})();
