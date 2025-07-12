import { Player } from '../models/Player.js';
import { Gameboard } from '../models/Gameboard.js';
import { Ship } from '../models/Ship.js';

import { DOMController } from './DOMController.js';


export function startGame() {
  const gameboard1 = new Gameboard(8, 8);
  const gameboard2 = new Gameboard(8, 8);
  const player1 = new Player(gameboard1, 'player1');
  const player2 = new Player(gameboard2, 'player2');

  DOMController.renderBoard(player1)
  DOMController.renderBoard(player2)


  const ship1 = new Ship(2);
  const ship2 = new Ship(4);

  DOMController.placeShip(ship1, player1, [[0, 0], [0, 1]]);
  DOMController.placeShip(ship2, player1, [[3, 3], [4, 3], [5, 3], [6, 3]]);
}

