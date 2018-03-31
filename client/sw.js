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
  "https://cdnjs.cloudflare.com/ajax/libs/turbolinks/5.1.1/turbolinks.js",
  "https://fonts.gstatic.com/s/firasans/v8/va9C4kDNxMZdWfMOD5VvkrjJYTLVdlTO.woff2"
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
