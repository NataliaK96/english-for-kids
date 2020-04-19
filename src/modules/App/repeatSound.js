import { gameData } from './gameData';

export function repeatSound() {
  gameData.randomCards[gameData.activCardIndex].say();
}
