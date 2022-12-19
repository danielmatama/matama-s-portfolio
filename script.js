const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const mark = document.querySelector(".xmark");
dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hide");
});
mark.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hide");
});
