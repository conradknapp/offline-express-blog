const CACHED_ITEMS = [
  "/",
  "/public/dist/style.css",
  "/public/dist/main.js",
  "/sw.js",
  "/public/dist/home.js",
  "/offline.html",
  "/public/dist/technical-difficulties.jpg",
  "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css",
  "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js",
  "https://d33wubrfki0l68.cloudfront.net/f65bedd364a41e3d4a38b57bea908e0318fefbc9/2e1a2/assets/fonts/firasans-ultralightitalic.woff",
  "https://d33wubrfki0l68.cloudfront.net/63e088b1bd7e895530d1fef8192b6cc043a9e806/30dc3/assets/fonts/firasans-ultralightitalic.woff2"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(CACHED_ITEMS);
    })
  );
});

addEventListener("activate", () => {
  console.log("SW Activated");
});

self.addEventListener("fetch", event => {
  var isPostsRoute = /posts/.test(event.request.url);

  if (!isPostsRoute) {
    event.respondWith(
      fetch(event.request).catch(error => {
        console.info(
          "%c Fetch failed; returning offline page instead.",
          "background: #222; color: #bada55",
          error
        );
        return caches.match("/offline.html");
      })
    );
  } else {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
  }
});
