const offlineBtn = document.querySelector(".offline");
const currentPath = window.location.pathname;
const title = document.querySelector('h1[class="Underline"]').innerText;

offlineBtn.addEventListener("click", () => {
  const pageResources = [currentPath];

  caches.open("static").then(cache => {
    const updateCache = cache.addAll(pageResources);
    const linkData = { title, link: currentPath };
    localStorage.setItem(`ol-${Date.now()}`, JSON.stringify(linkData));

    updateCache.then(() => {
      offlineBtn.innerText = "Post saved";
      console.log("Post is now available offline.");
    });

    updateCache.catch(error => {
      console.error("Post could not be saved offline.");
    });
  });
});
