import { cards } from '../Card/cards';
import { SingleSideCard } from './SingleSideCard';
import { gameData } from '../App/gameData';
import { resetGame } from '../App/resetGame';

export function renderMainPage() {
  resetGame();
  const startBtn = document.getElementById('start');
  startBtn.classList.add('d-none');
  gameData.currentPageCards = [];
  const firstRow = document.querySelector('.row-first');
  const secondRow = document.querySelector('.row-second');
  firstRow.innerHTML = '';
  secondRow.innerHTML = '';
  cards[0].forEach((item, index) => {
    const card = new SingleSideCard(cards[index + 1][0], item);
    gameData.currentPageCards.push(card);
    if (gameData.sectionIsGame) { card.toGame(); }
    if (index < 4) {
      card.appendTo(firstRow);
    } else {
      card.appendTo(secondRow);
    }
  });
}
