var offlineBtn = document.querySelector(".PostBtn__Offline");
var flashMsg = document.querySelector(".Flash__Message");
var currentPath = window.location.pathname;
var title = document.querySelector(".Post__Title");

title = document.querySelector(".Post__Title").innerText;
var ls_items = Object.values(localStorage);

var ls = ls_items.reduce((acc, val) => {
  val = JSON.parse(val);

  if (val.title == title) {
    acc = title;
  }
  return acc;
}, "");

if (ls == title) {
  offlineBtn.innerText = "Post saved";
  offlineBtn.setAttribute("disabled", true);
}

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

if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(res => {
      if (res.installing) {
        console.log("SW Installing");
      } else if (res.waiting) {
        console.log("SW Installed");
      } else if (res.active) {
        console.log("SW Active");
      }
    })
    .catch(err => console.log(err));
}

hljs.initHighlightingOnLoad();

document.querySelectorAll("pre").forEach(node => hljs.highlightBlock(node));

var deleteBtn = document.querySelector(".PostBtn__Delete");

if (deleteBtn) {
  deleteBtn.addEventListener("click", event => {
    const postId = event.target.dataset.src;
    const res = fetch(`/posts/${postId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(() => (window.location.href = "/"));
  });
}
