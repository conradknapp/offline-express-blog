const offlineBtn = document.querySelector(".PostBtn__Offline");
const flashMsg = document.querySelector(".Flash__Message");
const currentPath = window.location.pathname;
const title = document.querySelector('h1[class="Title__Underline"]').innerText;

offlineBtn.addEventListener("click", () => {
  const pageResources = [currentPath];

  caches.open("static").then(cache => {
    flashMsg.style.display = "grid";
    const updateCache = cache.addAll(pageResources);
    const linkData = { title, link: currentPath };
    localStorage.setItem(`ol-${title}`, JSON.stringify(linkData));

    updateCache.then(() => {
      offlineBtn.innerText = "Post saved";
      console.log("Post is now available offline.");
    });

    updateCache.catch(error => {
      console.error("Post could not be saved offline.");
    });
  });
});
