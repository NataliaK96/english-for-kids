import { cards } from '../Card/cards';
import { DubleSideCard } from '../Card/DubleSideCard';
import { gameData } from './gameData';
import { resetGame } from './resetGame';

export function filler(sectionName) {
  resetGame();
  const firstRow = document.querySelector('.row-first');
  const secondRow = document.querySelector('.row-second');
  firstRow.innerHTML = '';
  secondRow.innerHTML = '';
  const indexSectionName = cards[0].indexOf(sectionName);
  const sectionCards = cards[indexSectionName + 1];
  sectionCards.forEach((item, index) => {
    const card = new DubleSideCard(item);
    gameData.currentPageCards.push(card);
    if (gameData.sectionIsGame) {
      card.toGame();
      const startBtn = document.getElementById('start');
      startBtn.classList.remove('d-none');
    }
    if (index < 4) {
      card.appendTo(firstRow);
    } else {
      card.appendTo(secondRow);
    }
  });
}
