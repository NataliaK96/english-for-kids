import { filler } from '../App/fillingPage';
import { keyPages } from './keyPages';
import { renderMainPage } from '../MainPage/renderMainPage';
import { gameData } from '../App/gameData';

const sideBar = document.querySelector('.sidebar-nav');
sideBar.addEventListener('click', (event) => {
  const anchor = event.target.closest('.anchor');
  if (!anchor) return;
  if (anchor.id === 'mainPage') {
    renderMainPage();
  } else {
    const sectionName = keyPages[anchor.id];
    filler(sectionName);
  }
  const activePage = sideBar.querySelector('.active');
  if (activePage) { activePage.classList.remove('active'); }
  anchor.classList.add('active');
  const hamburger = document.querySelector('.hamburger');
  if (hamburger.classList.contains('is-open')) {
    hamburger.click();
  }
  gameData.activePage = anchor.id;
});
