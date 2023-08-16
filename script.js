const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
const mark = document.querySelector('.xmark');
const navBar = document.querySelector('.nav-bar');
const header = document.querySelector('.header');
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
      <li><a href="#" class="panc card-a4">Ruby on Rails</a></li>
      <li><a href="#" class="panc card-a2">React</a></li>
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
    name: 'Recipes App',
    description: 'Recipes App is a website that provides a wide variety of recipe for users. Users have access to add recipes, delete recipes, add food and deletes food. The app also allows user to know what is required in order to prepare a recipe',
    featuredImage: 'images/budget-foods.jpg',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'https://github.com/danielmatama/Recipe-app-rails',
    mobileSrc: 'images/budget-foods.jpg',
  },

  {
    name: 'Budget App',
    description: 'Budget App is a mobile web application that allows you to manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spend and on what.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://tashbudgetapp.onrender.com',
    sourceLink: 'https://github.com/danielmatama/budget-app-rails',
    mobileSrc: 'images/budget-app.jpg',
  },

  {
    name: 'Booking App',
    description: 'Booking App is an application for cars. Create an account, and find and book your dream car today',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://book-an-appointment-frontend.onrender.com',
    sourceLink: 'https://github.com/calebchris000/Book-An-Appointment-Frontend',
    mobileSrc: 'images/car.jpg',
  },

  {
    name: 'Blog App',
    description: 'The Blog App is an example of a blog website built using Ruby on Rails and PostgreSQL.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    sourceLink: 'https://github.com/danielmatama/Blog-app-rails',
    mobileSrc: 'images/blog.jpg',
  },

  {
    name: 'Bookstore App',
    description: 'This app is a must have instrument for book lovers. It is a webpage that allows you to add your favourite books and authors and save them. It also allows you to remove any books you may have already read or wish to replace. It will accept all books and authors without fail. Built with HTML, CSS, and JS.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'https://github.com/danielmatama/bookstore-app-react',
    mobileSrc: 'images/bookstore.jpg',
  },

  {
    name: 'Metrics App',
    description: 'This is a metrics webapp demo for digital currency. Users can get information about a related crypto coin',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://metrics-matama.netlify.app',
    sourceLink: 'https://github.com/danielmatama/metrics-app',
    mobileSrc: 'images/metrics.jpg',
  },
];

// ... buttons code

// Loop through the project details and create the project cards
projectDetails.forEach(project => {
  const card = document.createElement('div');
  card.classList.add('project-card');
  card.innerHTML = `
    <!-- ... card content ... -->
    <div class="buttons">
      <button class="see see-live" data-link="${project.liveLink}">
        <span>See Live</span>
        <span><img src="images/upload.svg" alt=""></span>
      </button>
      <button class="see see-source" data-link="${project.sourceLink}">
        <span>See Source</span>
        <span><img src="images/vector.svg" alt=""></span>
      </button>
    </div>
  `;

  section.appendChild(card);
});

// Add event listeners to the buttons
const seeLiveButtons = document.querySelectorAll('.see-live');
const seeSourceButtons = document.querySelectorAll('.see-source');

seeLiveButtons.forEach(button => {
  button.addEventListener('click', () => {
    const liveLink = button.getAttribute('data-link');
    if (liveLink) {
      window.open(liveLink, '_blank'); // Open link in a new tab
    }
  });
});

seeSourceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const sourceLink = button.getAttribute('data-link');
    if (sourceLink) {
      window.open(sourceLink, '_blank'); // Open link in a new tab
    }
  });
});

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

window.addEventListener('scroll', () => {
  if (window.scrollY > header.offsetHeight) {
    navBar.classList.add('sticky-nav');
  } else {
    navBar.classList.remove('sticky-nav');
  }
});
