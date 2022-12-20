const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const mark = document.querySelector(".xmark");
const getBody = document.body;
const Items = document.querySelectorAll(".nav-bar .ax");
dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hide");
});
mark.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hide");
});
Items.forEach((n) => {
  n.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hide');
  });
});

// popup!!!

const body = document.querySelector("body");
const section = document.createElement("section");
body.appendChild(section);
section.innerHTML = `
  <div class="popup pophide">
  <div class="phead">
  <img src="images/pop.svg" alt="" class="pop-img">
  <span class="xsign"><img src="images/xicon.svg" alt=""></span>
  </div>
  <h2 class="phead">Keeping track of hundreds of
    components</h2>
    <ul class="plist">
      <li><a href="#" class="panc card-a4">Ruby on rails</a></li>
      <li><a href="#" class="panc card-a2">CSS</a></li>
      <li><a href="#" class="panc card-a3">Javscript</a></li>
    </ul>
  <p class="ptext">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <ul class="pbuttons">
  <button class="see" type="button" name="button">
  <span>See Live</span>
  <span><img src="images/upload.svg" alt=""></span>
  </button>
  <button class="see" type="button" name="button">
  <span>See Source</span>
  <span><img src="images/vector.svg" alt=""></span>
  </button>
  </ul>
  </div>
`;

const button = document.querySelectorAll(".see-button");
const popup = document.querySelector(".popup");
const sign = document.querySelector(".xsign");
button.forEach((item) => {
  item.addEventListener("click", () => {
    popup.classList.toggle("pophide");
  });
})
sign.addEventListener("click", () => {
  popup.classList.toggle("pophide");
});

// mediaquery
const madia = matchMedia('(min-width:600px)');
media.addEventListener("change", e => console.log(e));






// const open = document.querySelector(".see-button");
// open.addEventListener('click', ()=> {
//   const main = document.createElement('div');
//   main.className = 'main';
//   const popup = document.createElement('div');
//   popup.className = 'popup';
//   popup.innerHTML = `
//   <h2>Works</h2>
//   <img src="images/coding-modified.png" alt="">
//   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//   <button class="close" type="button" name="button">more</button>
//
//   `;
//   main.appendChild(popup);
//   body.appendChild(main);
//
//   const close = document.querySelector('.close');
//   close.addEventListener('click', ()=> {
//       body.removeChild(main);
//   })
// })
