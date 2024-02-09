'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const showModalButton = document.querySelectorAll('.show-modal');
// console.log(showModalButton);

const openModal = () => {
  // all class properties needs to be updated using below lines
  // modal.style.display = 'inherit';
  // overlay.style.display = 'inherit';

  // only removing class will handle everything
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModalButton.forEach(show => {
  //   console.log(show.textContent);
  show.addEventListener('click', openModal);
});

closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  //   else openModal();
});
