import { gameData } from './gameData';
import { repeatSound } from './repeatSound';
import { startGame } from './startGame';
import { step } from './step';

const startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
  if (gameData.gameStarted) {
    repeatSound();
  } else {
    startGame();
  }
});

const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('click', (event) => {
  const card = event.target.closest('.card');
  if (!card) return;
  if (gameData.gameStarted) {
    step(card);
  }
});
