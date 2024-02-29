'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btnOpenModal =>
  btnOpenModal.addEventListener('click', openModal)
);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
// document.querySelectorAll('.nav__link').forEach(navLink => {
//   navLink.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
// Above implementation will create copies for each links, we should use event delegation using below
// 1. Add event listener to common parent
// 2. Determine which element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
// console.log(tabs, tabsContainer, tabsContent);
// using event delegation (i.e. add event listener on parent element, instead on each tab)
tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  // Guard clause
  if (!clicked) return;
  // Remove active tabs and content
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(tabContent =>
    tabContent.classList.remove('operations__content--active')
  );
  // Active tab
  clicked.classList.add('operations__tab--active');
  // Activate section
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
// const handleHover = (e, opacityVal) => { // normal argument passing
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const logo = link.closest('.nav').querySelector('img');
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    // console.log(link, logo, siblings);
    siblings.forEach(siblingLink => {
      // if (siblingLink !== link) siblingLink.style.opacity = opacityVal;
      if (siblingLink !== link) siblingLink.style.opacity = this;
    });
    // logo.style.opacity = opacityVal;
    logo.style.opacity = this;
  }
};
// nav.addEventListener('mouseover', e => handleHover(e, 0.5));
// nav.addEventListener('mouseout', e => handleHover(e, 1));
// Passing argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// // console.log(initialCoords);
// window.addEventListener('scroll', function () {
//   // console.log(window.scrollX, window.screenY);
//   window.scrollY > initialCoords.top
//     ? nav.classList.add('sticky')
//     : nav.classList.remove('sticky');
// });

// Intersection observer api
// const obsCallback = (entries, observer) => {
//   // entries are threshold array
//   entries.forEach(entry => console.log(entry));
//   // observer is intersection observer object
// };
// const obsOptions = {
//   root: null, // root element
//   threshold: 0.2, // intersection threshold for 10% target view on viewport
// };
// // target section1 intersects root element at threshold then callback is triggered
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  !entry.isIntersecting
    ? nav.classList.add('sticky')
    : nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // when target element is completely invisible and not intersecting root element
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
});
headerObserver.observe(header);

// Reveal sections on scroll (we have added hidden class on sections now)
const allSections = document.querySelectorAll('.section');
const revealSections = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  // unhide sections on first load, when root element is intersecting
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  sectionObserver.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSections, {
  root: null, // root element is null for viewport
  threshold: 0.1, // when target element is 10% visible and intersecting root element
});
allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = entries => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // Replace src with data src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );
  imageObserver.unobserve(entry.target);
};
const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  // rootMargin: '100px',
});
imgTargets.forEach(imgTarget => imageObserver.observe(imgTarget));

// Slider
const sliders = function () {
  let curSlide = 0;
  const maxSlide = slides.length;
  // slider.style.transform = `scale(0.2) translateX(-1200px)`;
  // slider.style.overflow = 'visible';
  // slides.forEach((slide, index) => {
  //   slide.style.transform = `translateX(${index * 100}%)`;
  //   // 0%, 100%, 200%, 300%
  // });
  // Implementing dots
  // Functions
  const createDots = () => {
    slides.forEach((_, i) => {
      // added throwaway underscore instead of slide as parameter
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const activateDot = slide => {
    document.querySelectorAll('.dots__dot').forEach(dot => {
      dot.classList.remove('dots__dot--active');
    });
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  const goToSlide = curSlide => {
    slides.forEach((slide, index) => {
      if (index < slides.length)
        slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
      // -100%, 0%, 100%, 200%
    });
  };
  // Initial slide placement
  const init = () => {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  init();
  // Next slide
  const nextSlide = () => {
    curSlide < maxSlide - 1 ? curSlide++ : (curSlide = 0);
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  btnRight.addEventListener('click', nextSlide);
  // Previous slide
  const prevSlide = () => {
    curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  btnLeft.addEventListener('click', prevSlide);
  // Left right using keyboard
  document.addEventListener('keydown', e => {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  dotContainer.addEventListener('click', e => {
    if (e.target.classList.contains('dots__dot')) {
      // using rest operator to destructure
      const { slide } = e.target.dataset;
      activateDot(slide);
      goToSlide(slide);
    }
  });
};
sliders();

/*
// Selecting, creating and deleting elements
// 1.Selecting elements
console.log(document.documentElement);
console.log(document.head);
const header = document.querySelector('.header');
console.log(header);
// querySelectorAll returns nodeList and cannot be updated automatically
const allSections = document.querySelectorAll('.section');
console.log(allSections);
// tagName returns collection and gets updated automatically
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
const section1 = document.getElementById('section--1');
console.log(section1);
const button = document.getElementsByClassName('btn');
console.log(button);
// 2.Creating and inserting elements
// section1.insertAdjacentHTML('afterbegin',`<p>demo paragraph</p>`);
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';
console.log(message);
// header.prepend(message);
header.append(message);
// we cannot display same element at multiple places, so it should be cloned
// header.append(message.cloneNode(true));
// after, before also works similar to append and prepend
// header.before(message);
// header.after(message);
// 3.Deleting elements
document.querySelector('.btn--close--cookie').addEventListener('click', () => {
  message.remove();
  // remove added recently, previously on child nodes removal was the option
  // message.parentElement.removeChild(message);
});

// Styles, attributes and classes
// 1.Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.backgroundColor);
// we cannot fetch styles directy which we have not defined
console.log(message.style.color);
// we can use getComputedStyle()
console.log(getComputedStyle(message).color, getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 50 + 'px';
console.log(message.style.height);
document.documentElement.style.setProperty('--color-primary', 'cyan');
console.log(document.documentElement.style.getPropertyValue('--color-primary'));
// 2.Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src); // it will fetch relative url
console.log(logo.alt, logo.className);
// non-standard attributes
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
console.log(logo.getAttribute('src')); // it will fetch relative url only
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');
console.log(logo);
// data attributes
console.log(logo.dataset.versionNumber);
// 3.Classes
logo.classList.add('a', 'b');
logo.classList.remove('a', 'b');
logo.classList.toggle('c');
console.log(logo.classList.contains('c'));
// don't use below for adding classes as it will override and keep single class for element
// logo.className = 'amit';
console.log(logo);
*/

/*
// Implementing smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // details of co-ordinates of btnScrollTo button
  console.log(e.target.getBoundingClientRect());
  // Scroll top-bottom or left-right, always considers from top & left
  console.log('Current scroll (x,y): ', pageXOffset, pageYOffset);
  // Viewport (i.e. visible screen) height width excluding scrollbars
  console.log(
    'Viewport height-width: ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // Scrolling to section1
  // added offsets in order to scroll from anywhere and not just extreme top & left
  // window.scrollTo(s1coords.left + pageXOffset, s1coords.top + pageYOffset);
  // window.scrollTo({
  //   left: s1coords.left + pageXOffset,
  //   top: s1coords.top + pageYOffset,
  //   behavior: 'smooth',
  // });

  // below will work on modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});
*/

/*
// Types of Events and Event Handlers
const h1 = document.querySelector('h1');
const alertH1 = () => alert('Mouse entered!');
// h1.addEventListener('mouseenter', () => alert('Mouse entered!'));
// h1.onmouseenter = () => alert('Mouse entered!');
// h1.onmouseenter = alertH1;
h1.addEventListener('mouseenter', alertH1);
// remove event listener after some 5 seconds
setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 5000);
*/

/*
// Event propagation in practice
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NavBar', e.target, e.currentTarget);
  },
  // we can capture parent elements event first by setting this flag to true, by default = false
  false
);
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LinkBar', e.target, e.currentTarget);
});
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);
  console.log(e.target === this);
  // Stop propagation to avoid parent elements color change (it is not reccommended)
  // e.stopPropagation();
});
*/

/*
// DOM Traversing
const h1 = document.querySelector('h1');
// Going downwards: child (immediate only)
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'cyan';
// Going upwards: parent (immediate only)
console.log(h1.parentNode);
console.log(h1.parentElement);
// closest finds closest elements from selected element, whereas querySelector fetches selected element
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';
// Going sideways: siblings (immediate left-right only)
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);
// traverse parent node to fetch all other siblings
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(
  // if element is h1 then make it 50% smaller
  element => element === h1 && (element.style.transform = 'scale(0.5)')
);
*/

/*
// Lifecycle DOM Events
// this event is triggered for loading html & css content
document.addEventListener('DOMContentLoaded', e =>
  console.log('DOM Content, HTML & CSS loaded', e)
);
// this event is triggered when DOM contents like HTML & CSS are loaded on page
window.addEventListener('load', e => console.log('Page fully loaded!', e));
// this event is triggered while closing or leaving the tab
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
// Note: 'beforeunload' is fired only if there was ANY interaction of the user with the site. Without ANY interaction (even one click anywhere) event onbeforeunload won't be fired.
*/
