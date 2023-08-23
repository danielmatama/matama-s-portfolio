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
  <button class="see" type="button" name="button" id="live-btn">
  <span>See Live</span>
  <span><img src="images/upload.svg" alt=""></span>
  </button>
  <button class="see" type="button" name="button" id="git-btn">
  <span>See Source</span>
  <span><img src="images/vector.svg" alt=""></span>
  </button>
  </ul>
  </div>
  </div>
`;


const projectDetails = [{
    name: 'Maths App',
    description: 'Maths App is a web application for maths lovers, where a user can do their favourite calculations, and see quotes from their beloved mathmaticians.',
    featuredImage: 'images/budget_foods.jpg',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://fluffy-beijinho-b768b3.netlify.app/',
    sourceLink: 'https://github.com/danielmatama/react-app.git',
    mobileSrc: 'images/maths2.png',
    id: '1',
  },

  {
    name: 'Budget App',
    description: 'Budget App is a mobile web application that allows you to manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spend and on what.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://tashbudgetapp.onrender.com',
    sourceLink: 'https://github.com/danielmatama/budget-app-rails',
    mobileSrc: 'images/budget_app2.png',
    id: '2',
  },

  {
    name: 'Booking App',
    description: 'Booking App is an application for cars. Create an account, and find and book your dream car today',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://book-an-appointment-frontend.onrender.com',
    sourceLink: 'https://github.com/calebchris000/Book-An-Appointment-Frontend',
    mobileSrc: 'images/book3.png',
    id: '3',
  },

  {
    name: 'Blog App',
    description: 'The Blog App is an example of a blog website built using Ruby on Rails and PostgreSQL.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://github.com/danielmatama/Blog-app-rails',
    sourceLink: 'https://github.com/danielmatama/Blog-app-rails',
    mobileSrc: 'images/blog1.jpg',
    id: '4',
  },

  {
    name: 'Bookstore App',
    description: 'This app is a must have instrument for book lovers. It is a webpage that allows you to add your favourite books and authors and save them. It also allows you to remove any books you may have already read or wish to replace. It will accept all books and authors without fail. Built with HTML, CSS, and JS.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://github.com/danielmatama/bookstore-app-react',
    sourceLink: 'https://github.com/danielmatama/bookstore-app-react',
    mobileSrc: 'images/book_store2.png',
    id: '5',
  },

  {
    name: 'Metrics App',
    description: 'This is a metrics webapp demo for digital currency. Users can get information about a related crypto coin',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://metrics-matama.netlify.app',
    sourceLink: 'https://github.com/danielmatama/metrics-app',
    mobileSrc: 'images/metrics_c2.png',
    id: '6',
  },
];


const button = document.querySelectorAll('.see-button');
const popup = document.querySelector('.popup');
const popupWindow = document.querySelector('.popup-window')
const sign = document.querySelector('.xsign');
const windowHeader = document.querySelector('.phead-h2');
const windowText = document.querySelector('.ptext');
const windowImage = document.querySelector('.pop-img');
const liveBtn = document.getElementById('live-btn');
const gitBtn = document.getElementById('git-btn');

for (let i = 0; i < button.length; i += 1) {
  button[i].addEventListener('click', () => {
    popup.classList.toggle('pophide');
    popupWindow.classList.toggle('pophide');
    popupWindow.id = `project_${projectDetails[i].id}`;
    windowHeader.innerHTML = projectDetails[i].name;
    windowText.innerHTML = projectDetails[i].description;
    windowImage.src = projectDetails[i].mobileSrc;

  });

}
liveBtn.addEventListener('click', ()=>{
    projectDetails.forEach(project => {
      if (!!liveBtn.closest(`#project_${project.id}`)) {
        window.location.href = project.liveLink;
      }
    })
});

gitBtn.addEventListener('click', ()=>{
  projectDetails.forEach(project => {
    if (!!gitBtn.closest(`#project_${project.id}`)) {
      window.location.href = project.sourceLink;
    }
  })
});

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