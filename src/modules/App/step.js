import { gameData } from './gameData';
import { gameOver } from './gameOver';
import { resetGame } from './resetGame';

export function step(card) {
  const sound = new Audio();
  const starContainer = document.querySelector('.star-container');
  const star = document.createElement('img');
  if (card !== gameData.randomCards[gameData.activCardIndex].node) {
    sound.src = './audio/error.mp3';

    gameData.errors += 1;
    star.src = './img/star.svg';
  } else {
    star.src = './img/star-win.svg';
    sound.src = './audio/correct.mp3';
    card.classList.add('inactive');
    if (gameData.activCardIndex === gameData.randomCards.length - 1) {
      gameOver();
      resetGame();
      return;
    }
    gameData.activCardIndex += 1;
    setTimeout(() => {
      gameData.randomCards[gameData.activCardIndex].say();
    }, 500);
  }
  sound.play();
  starContainer.prepend(star);
}
