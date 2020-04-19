import { gameData } from './gameData';

export function startGame() {
  const startBtn = document.getElementById('start');
  startBtn.classList.add('repeater', 'rounded-circle');
  startBtn.style.backgroundImage = 'url(./img/repeat.svg)';
  startBtn.innerHTML = '';
  gameData.randomCards = gameData.currentPageCards.sort(
    () => Math.random() - 0.5,
  );
  gameData.randomCards[gameData.activCardIndex].say();
  gameData.gameStarted = true;
}
