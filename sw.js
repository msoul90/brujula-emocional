// Actualizar CACHE_NAME al desplegar cambios en assets cacheados.
const CACHE_NAME = "brujula-emocional-v2";
const CDN_CACHE  = "brujula-cdn-v1";

const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./loader.js",
  "./app.js",
  "./pwa/manifest.webmanifest",
  "./pwa/icons/icon-192.svg",
  "./pwa/icons/icon-512.svg"
];

const CDN_URLS = [
  "https://cdn.tailwindcss.com"
];

globalThis.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
      caches.open(CDN_CACHE).then((cache) =>
        Promise.all(
          CDN_URLS.map((url) =>
            fetch(url, { mode: "cors" })
              .then((res) => { if (res.ok) cache.put(url, res); })
              .catch(() => {})
          )
        )
      )
    ])
  );
  globalThis.skipWaiting();
});

globalThis.addEventListener("activate", (event) => {
  const validCaches = new Set([CACHE_NAME, CDN_CACHE]);
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !validCaches.has(key))
          .map((key) => caches.delete(key))
      )
    )
  );
  globalThis.clients.claim();
});

globalThis.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") return;

  const isCDN = CDN_URLS.some((url) => request.url.startsWith(url));

  event.respondWith(
    (async () => {
      const cacheName = isCDN ? CDN_CACHE : CACHE_NAME;
      const cached = await caches.match(request, { cacheName });
      if (cached) return cached;

      const response = await fetch(request);
      const isCacheable =
        response?.status === 200 &&
        (response.type === "basic" || (isCDN && response.type === "cors"));

      if (isCacheable) {
        const cloned = response.clone();
        caches.open(cacheName).then((cache) => cache.put(request, cloned));
      }
      return response;
    })()
  );
});
