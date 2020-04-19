import { toGame } from '../App/toGame';
import { toTrain } from '../App/toTrain';

const gameSwitch = document.querySelector('#cmn-toggle-1');
gameSwitch.addEventListener('change', () => {
  if (gameSwitch.checked) {
    toGame();
  } else {
    toTrain();
  }
});
