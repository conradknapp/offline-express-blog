const offlineBtn = document.querySelector(".PostBtn__Offline");
const flashMsg = document.querySelector(".Flash__Message");
const currentPath = window.location.pathname;
let title = document.querySelector(".Post__Title");

if (title) {
  title = document.querySelector(".Post__Title").innerText;
  document.addEventListener("DOMContentLoaded", () => {
    var ls_items = Object.values(localStorage);

    var ls = ls_items.reduce((acc, val) => {
      val = JSON.parse(val);

      if (val.title === title) {
        acc.push(val);
      }
      return acc;
    }, []);

    if (ls[0].title === title) {
      offlineBtn.innerText = "Post saved";
      offlineBtn.setAttribute("disabled", true);
    }
  });
}

if (offlineBtn) {
  offlineBtn.addEventListener("click", () => {
    const pageResources = [currentPath];

    caches.open("static").then(cache => {
      flashMsg.style.display = "grid";
      const updateCache = cache.addAll(pageResources);
      const linkData = { title, link: currentPath };
      localStorage.setItem(`ol-${title}`, JSON.stringify(linkData));

      updateCache
        .then(() => {
          offlineBtn.innerText = "Post saved";
          console.log("Post is now available offline.");
        })
        .catch(error => {
          console.error("Post could not be saved offline.");
        });
    });
  });
}

let toggleNav = document.querySelector(".toggleNav");

toggleNav.addEventListener("click", () => {
  let toggleMenu = document.querySelector(".Nav ul");
  toggleMenu.classList.toggle("open");
  toggleNav.classList.toggle("clicked");
});
