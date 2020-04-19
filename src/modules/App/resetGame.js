import { gameData } from './gameData';

export function resetGame() {
  gameData.currentPageCards = [];
  gameData.gameStarted = false;
  gameData.randomCards = [];
  gameData.activCardIndex = 0;
  gameData.errors = 0;
  const startBtn = document.getElementById('start');
  startBtn.classList.remove('repeater', 'rounded-circle');
  startBtn.style.backgroundImage = '';
  startBtn.innerHTML = 'START GAME';
  const starContainer = document.querySelector('.star-container');
  starContainer.innerHTML = '';
}
