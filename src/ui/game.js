import { Player } from '../models/Player.js';
import { Gameboard } from '../models/Gameboard.js';
import { Ship } from '../models/Ship.js';

import { DOMController } from './DOMController.js';


export function startGame() {
  const gameboard1 = new Gameboard(8, 8);
  const gameboard2 = new Gameboard(8, 8);
  const player1 = new Player(gameboard1);
  const player2 = new Player(gameboard2);

  DOMController.renderBoard(gameboard1.board)
  DOMController.renderBoard(gameboard2.board)


  const ship1 = new Ship(2);
  DOMController.placeShip(ship1, gameboard1, [[0, 0], [0, 1]]);
  const ship2 = new Ship(4);
  DOMController.placeShip(ship2, gameboard1, [[3, 3], [4, 3], [5, 3], [6, 3]]);
}

