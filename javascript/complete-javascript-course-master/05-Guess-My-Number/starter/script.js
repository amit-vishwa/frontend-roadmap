'use strict';

/*
// DOM Demo
console.log(
  //   document.querySelector('.message'),
  document.querySelector('.message').textContent
);
// below field setting will not set the element content
// document.getElementsByClassName('message').innerHTML = 'Hello there';
// console.log(document.getElementsByClassName('message').innerHTML);
// below line will update the element content
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

let correctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  let message = '';
  if (guessNumber > 20 || guessNumber < 1) message = '✖ Not In Range!';
  else if (guessNumber === correctNumber) {
    message = '🎉 Correct Number!';
    if (score < 20) score++;
    if (score === 20) message = '🎉 You Won!';
    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = correctNumber;
  } else {
    if (guessNumber > correctNumber) message = '↗ Too High!';
    else if (guessNumber < correctNumber) message = '↙ Too Low!';
    if (score > 0) score--;
    if (score === 0) message = '❌ You Lost!';
  }
  document.querySelector('.score').textContent = score;
  if (message) document.querySelector('.message').textContent = message;
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.highscore').textContent = highScore;
  correctNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
