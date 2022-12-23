const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
const mark = document.querySelector('.xmark');
const Items = document.querySelectorAll('.nav-bar .ax');
const namee = document.querySelector('input[type="text"]');
const text = document.querySelector('textarea');
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hide');
});
mark.addEventListener('click', () => {
  dropdownMenu.classList.toggle("hide");
});

Items.forEach((n) => {
  n.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hide');
  });
});

// popup!!!

const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);
section.innerHTML = `
  <div class="popup-window pophide">
  <div class="popup pophide">
  <div class="phead">
   <span class="xsign"><i class="fa-solid fa-xmark xsign-icon"></i></span>
   <img src="" alt="" class="pop-img" />
  </div>
  <h2 class="phead-h2"></h2>
    <ul class="plist">
      <li><a href="#" class="panc card-a4">Ruby on rails</a></li>
      <li><a href="#" class="panc card-a2">CSS</a></li>
      <li><a href="#" class="panc card-a3">Javscript</a></li>
    </ul>
  <p class="ptext"> </p>
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
  </div>
`;

const projectDetails = [{
    name: 'Multi-post stories story one',
    description: 'tempor incididunt ut labore et dolorveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatt anim id est laborum.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
    mobileSrc: 'images/pop.svg',
  },

  {
    name: 'My name is Daniel',
    description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullain culpa qui officia de.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
    mobileSrc: 'images/pop.svg',
  },

  {
    name: 'Multi-post story three',
    description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pa anim id est laborum.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
    mobileSrc: 'images/pop.svg',
  },

  {
    name: 'Multi-post story four',
    description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullait anim id est laborum.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
    mobileSrc: 'images/pop.svg',
  },

  {
    name: 'Multi-post stories five',
    description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n culpt anim id est laborum.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
    mobileSrc: 'images/pop.svg',
  },

  {
    name: 'Multi-post stories six',
    description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu futeur dmollit anim id est laborum.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
    mobileSrc: 'images/pop.svg',
  },
];

const button = document.querySelectorAll('.see-button');
const popup = document.querySelector('.popup');
const popupWindow = document.querySelector('.popup-window')
const sign = document.querySelector('.xsign');
const windowHeader = document.querySelector('.phead-h2');
const windowText = document.querySelector('.ptext');
const windowImage = document.querySelector('.pop-img')

for (let i = 0; i < button.length; i += 1) {
  button[i].addEventListener('click', () => {
    popup.classList.toggle('pophide');
    popupWindow.classList.toggle('pophide');
    windowHeader.innerHTML = projectDetails[i].name;
    windowText.innerHTML = projectDetails[i].description;
    windowImage.src = projectDetails[i].mobileSrc;
  })
}

sign.addEventListener('click', () => {
  popup.classList.toggle('pophide');
  popupWindow.classList.toggle('pophide');
});

const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');
const msg = document.querySelector('form .message');

function showError(m) {
  msg.style.display = 'block';
  msg.innerText = m;
}

function showSuccess(mass) {
  msg.style.display = 'block';
  msg.style.color = 'white';
  msg.style.backgroundColor = 'green';
  msg.innerText = mass;
}

function checkLowerCase(input) {
  if (input.value !== input.value.toLowerCase()) {
    showError('please write the email in lowercase');
  } else {
    showSuccess('Thank You.');
    form.submit();
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkLowerCase(email);
});


const valueInput = JSON.parse(localStorage.getItem('valueInput')) || [];

function addVale(n, e, t) {
  valueInput.push({ n, e, t });
  localStorage.setItem('valueInput', JSON.stringify(valueInput));
  return { n, e, t };
}

function showNow({ n, e, t }) {
  namee.value = n;
  email.value = e;
  text.value = t;
}

valueInput.forEach(showNow);

form.addEventListener('change', (event) => {
  event.preventDefault();
  addVale(namee.value, email.value, text.value);
});
