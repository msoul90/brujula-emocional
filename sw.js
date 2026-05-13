// Actualizar CACHE_NAME al desplegar cambios en assets cacheados.
const CACHE_NAME = "brujula-emocional-mp4l314j";

const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./dist/tailwind.css",
  "./theme-init.js",
  "./loader.js",
  "./app.js",
  "./js/quiz.js",
  "./js/emotionMap.js",
  "./pwa/manifest.webmanifest",
  "./pwa/icons/icon-192.svg",
  "./pwa/icons/icon-512.svg",
  "./pwa/fonts/inter.woff2",
  "./js/version.js"
];

globalThis.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => globalThis.skipWaiting())
  );
});

globalThis.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  globalThis.clients.claim();
});

globalThis.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") return;

  event.respondWith(
    (async () => {
      const cached = await caches.match(request, { cacheName: CACHE_NAME });
      if (cached) return cached;

      const response = await fetch(request);
      if (response?.status === 200 && response.type === "basic") {
        const cloned = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
      }
      return response;
    })()
  );
});
