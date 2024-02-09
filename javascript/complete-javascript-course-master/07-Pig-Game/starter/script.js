'use strict';

// selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1'); // this is faster than query selector
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;

init();

function init() {
  // initial conditions
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
  // dice.style.display = 'none';
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
}

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// button functionality
rollButton.addEventListener('click', () => {
  if (playing) {
    // 1.Generate random number
    const number = Math.trunc(Math.random() * 6) + 1;
    // 2.Displaying dice
    dice.classList.remove('hidden');
    dice.src = `dice-${number}.png`;
    // 3.Check for roll 1
    if (number !== 1) {
      // Add dice to current score
      currentScore += number;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch the player
      switchPlayer();
    }
  }
});

holdButton.addEventListener('click', () => {
  if (playing) {
    // 1.Add current score to active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2.If player score >= 100, end game
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    }

    // Switch to next player
    switchPlayer();
  }
});

newButton.addEventListener('click', init);
