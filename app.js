const toggle_btn = document.querySelector(".toggle_btn");
const toggle_btnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdownMenu");

toggle_btn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  toggle_btn.classList = isOpen
    ? "fa-solid fa-x-mark"
    : "fa-solid fa-bars";
};