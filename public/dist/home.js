var toggleNav = document.querySelector(".toggleNav");

if (toggleNav) {
  toggleNav.addEventListener("click", () => {
    let toggleMenu = document.querySelector(".Nav ul");
    toggleMenu.classList.toggle("open");
    toggleNav.classList.toggle("clicked");
  });
}
