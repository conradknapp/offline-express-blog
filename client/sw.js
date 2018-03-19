const CACHED_ITEMS = [
  "/",
  "dist/style.css",
  "dist/main.js",
  "/sw.js",
  "dist/home.js",
  "/offline.html",
  "dist/technical-difficulties.jpg"
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
