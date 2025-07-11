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
}


