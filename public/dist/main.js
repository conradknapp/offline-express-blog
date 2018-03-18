if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/" })
    .then(res => {
      if (res.installing) {
        console.log("SW Installing");
      } else if (res.waiting) {
        console.log("SW Installed");
      } else if (res.active) {
        console.log("SW Active");
      }
    })
    .catch(err => {
      console.log(err);
    });
}

const deleteBtn = document.querySelector(".PostBtn__Delete");

deleteBtn.addEventListener("click", e => {
  const postId = e.target.dataset.src;
  const res = fetch(`/posts/${postId}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(() => (window.location.href = "/"));
});
