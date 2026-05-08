(function () {
    var t = localStorage.getItem("brujulaThema") || "auto";
    if (t === "dark" || (t === "auto" && matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
    }
})();
