import { gameData } from './gameData';

export function toGame() {
  gameData.currentPageCards.forEach((item) => {
    item.toGame();
  });
  document.getElementById('sidebar-wrapper').classList.remove('bg-primary');
  document.getElementById('sidebar-wrapper').classList.add('bg-success');
  gameData.sectionIsGame = true;
  if (gameData.activePage !== 'mainPage') {
    const startBtn = document.getElementById('start');
    startBtn.classList.remove('d-none');
  }
}
