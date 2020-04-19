import { gameData } from './gameData';

export function toTrain() {
  gameData.currentPageCards.forEach((item) => {
    item.toTrain();
  });
  document.getElementById('sidebar-wrapper').classList.remove('bg-success');
  document.getElementById('sidebar-wrapper').classList.add('bg-primary');
  gameData.sectionIsGame = false;
  const startBtn = document.getElementById('start');
  startBtn.classList.add('d-none');
}
