import { renderMainPage } from './renderMainPage';
import { keyPages } from '../Menu/keyPages';


const cardContainer = document.querySelector('.card-container');

renderMainPage();

cardContainer.addEventListener('click', (event) => {
  const card = event.target.closest('.main-page-card');
  if (!card) return;
  const sectionName = card.querySelector('.card-title').innerHTML;
  const id = Object.entries(keyPages).find((item) => item[1] === sectionName)[0];
  document.getElementById(id).click();
});
