
function toggleMenu() {
  const nav = document.getElementById("navigation");
  const button = document.querySelector(".menu-btn");

  const isOpen = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", isOpen);
}

function closeMenu() {
  const nav = document.getElementById("navigation");
  const button = document.querySelector(".menu-btn");

  nav.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
}
