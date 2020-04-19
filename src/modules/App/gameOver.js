import { gameData } from './gameData';
import { resetGame } from './resetGame';

export function gameOver() {
  const banner = document.createElement('div');
  banner.classList.add('banner', 'text-center');
  const text = document.createElement('div');
  const img = document.createElement('img');
  img.classList.add('img-fluid');
  const sound = new Audio();
  banner.append(text, img);
  document.body.append(banner);
  const firstRow = document.querySelector('.row-first');
  const secondRow = document.querySelector('.row-second');
  firstRow.innerHTML = '';
  secondRow.innerHTML = '';
  if (!gameData.errors) {
    sound.src = './audio/success.mp3';
    text.innerHTML = 'Молодец!';
    img.src = './img/win.png';
  } else {
    sound.src = './audio/failure.mp3';
    text.innerHTML = `Количество ошибок: ${gameData.errors}`;
    img.src = './img/lose.png';
  }
  sound.play();
  resetGame();
  setTimeout(() => {
    banner.remove();
    document.getElementById('mainPage').click();
  }, 3000);
}
