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


  <div class="popupdesk pophidedesk">
  <div class = pheaddesk>
  <span class="xsigndesk"><img src="images/desk.svg" alt=""></span>
  <img src="images/desktop.svg" alt="" class="popdesk-img">
  </div>
  <div class="textdesk">
  <h2 class="pheaddesk">Keeping track of hundreds of
    components</h2>
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
    <ul class="plist">
      <li><a href="#" class="panc card-a4">Codekit</a></li>
      <li><a href="#" class="panc card-a2">Github</a></li>
      <li><a href="#" class="panc card-a3">Javscript</a></li>
      <li><a href="#" class="panc card-a3">Bootstrap</a></li>
      <li><a href="#" class="panc card-a3">Terminal</a></li>
    </ul>
  <p class="ptext">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  </div>
`;

const projectDetails = [
  {
    name: 'Multi-post stories',
    description: 'This is a dicription of my works.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
];


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
window.addEventListener("resize", () => {
  if (window.innerWidth >=768) {
    popup.classList.toggle("pophide");
  }
});
const popupdesk = document.querySelector(".popupdesk");
window.addEventListener("resize", () => {
  if (window.innerWidth >=768) {
    popupdesk.classList.toggle("pophidedesk");
  }
});
const signdesk = document.querySelector(".xsigndesk");
signdesk.addEventListener("click", () => {
  popupdesk.classList.toggle("pophidedesk");
});







// let max_slides = 4;
// let max_items = 3;
// const screen_size = window.matchMedia("(max-width: 600px)");
//
// function getSlidesCount () {
//
//   console.log(window.innerWidth);
//
//   if (screen_size.matches) { // If media query matches
//     max_slides = 4;
//     max_items = 3;
//     console.log('Media query matches screen_size query');
//   } else {
//     max_slides = 2;
//     max_items = 6;
//     console.log('Media query does not match screen_size query');
//   }
// }
//
// getSlidesCount();
// window.addEventListener('resize', getSlidesCount);









// const madia = matchMedia('(min-width:600px)');
// media.addEventListener("change", e => console.log(e));






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
