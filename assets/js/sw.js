importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);
workbox.precaching.precacheAndRoute([
    { url: "/index.html", revision: "383676" },
    { url: "/assets/js/manifest.json", revision: null },
    { url: "/assets/js/app.js", revision: null },
    { url: "/assets/js/sw.js", revision: null },
]);

workbox.routing.registerRoute(
    new RegExp("\\.html"),
    new workbox.strategies.CacheFirst({
        cacheName: "CacheHTML",
    })
);
workbox.routing.registerRoute(
    new RegExp("\\.json"),
    new workbox.strategies.NetworkFirst()
);
// workbox.routing.setCatchHandler(async context=>{
//     console.log(context);
//     console.log(context.request);
//     if(context.request.url.pathname === '"/"')

// })

// // Files to cache
// const cacheName = "appV1";

// const contentToCache = [
//     "index.html",
//     "app.js",
//     "sw.js",
//     "manifest.webmanifest",
//     "css/bootstrap.css",
//     "js/bootstrap.js",
//     "img/1.jpg",
//     "img/2.jpg",
//     "img/3.jpg",
//     "img/4.jpg",
//     "icon/favicon.ico",
//     "icon/favicon-32x32.png",
//     "icon/android-icon-144x144.png",
// ];

// // Installing Service Worker
// self.addEventListener("install", (e) => {
//     console.log("[Service Worker] Install");
//     e.waitUntil(
//         (async() => {
//             const cache = await caches.open(cacheName);
//             console.log("[Service Worker] Caching all: app shell and content");
//             // await cache.addAll(contentToCache);
//         })()
//     );
// });

// // Fetching content using Service Worker
// self.addEventListener("fetch", (e) => {
//     e.respondWith(
//         (async() => {
//             const r = await caches.match(e.request);
//             console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
//             if (r) return r;
//             const response = await fetch(e.request);
//             const cache = await caches.open(cacheName);
//             console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
//             cache.put(e.request, response.clone());
//             // console.log(response);
//             return response;
//         })()
//     );
// });