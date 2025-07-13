import { Player } from '../models/Player.js';
import { Gameboard } from '../models/Gameboard.js';
import { Ship } from '../models/Ship.js';

import { DOMController } from './DOMController.js';

export class GameController {
  static #player1;
  static #player2;
  static #gameboard1;
  static #gameboard2;

  static startGame() {
    GameController.#gameboard1 = new Gameboard(8, 8);
    GameController.#gameboard2 = new Gameboard(8, 8);
    GameController.#player1 = new Player(GameController.gameboard1, 'player1');
    GameController.#player2 = new Player(GameController.gameboard2, 'player2');

    GameController.player1.activate();

    DOMController.renderBoard(GameController.player1)
    DOMController.renderBoard(GameController.player2)

    const ship1 = new Ship(2);
    const ship2 = new Ship(4);

    DOMController.placeShipOnBoard(ship1, GameController.player1, [[0, 0], [0, 1]]);
    DOMController.placeShipOnBoard(ship2, GameController.player1, [[3, 3], [4, 3], [5, 3], [6, 3]]);

    DOMController.placeShipOnBoard(ship1, GameController.player2, [[0, 0], [0, 1], [0, 2]]);
    DOMController.placeShipOnBoard(ship2, GameController.player2, [[3, 3], [4, 3], [5, 3], [6, 3]]);

    DOMController.renderShip(ship2, GameController.player1);
    DOMController.renderShip(ship1, GameController.player1);

    DOMController.renderShip(ship1, GameController.player2);
    DOMController.renderShip(ship2, GameController.player2);

  }
  static getCurrentPlayerTurn() {
    console.log('Player: ', GameController.#player1)
    if (GameController.player1.status && !GameController.player2.status) {
      return GameController.player1;
    }
    return GameController.player2;
  }

  static getCurrentOpponent() {
    if (GameController.player1.status && !GameController.player2.status) {
      return GameController.player2;
    }
    return GameController.player1;
  }

  static get gameboard1() {
    return GameController.#gameboard1;
  }
  static get gameboard2() {
    return GameController.#gameboard2;
  }
  static get player1() {
    return GameController.#player1;
  }
  static get player2() {
    return GameController.#player2;
  }


}

