if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js");
}

const deleteBtn = document.querySelector(".delete");

deleteBtn.addEventListener("click", e => {
  const postId = e.target.dataset.src;
  const res = fetch(`/posts/${postId}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(() => (window.location.href = "/"));
});
