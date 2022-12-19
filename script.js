const dropdownButton = document.querySelector(".dropdown__button");
const dropdownMenu = document.queryselector(".dropdown__menu");

dropdownButton.addEventListner("click",() => {

  dropdownMenu.classList.toggle("hide");
});
