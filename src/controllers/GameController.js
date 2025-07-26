import { Player } from '../models/Player.js';
import { Gameboard } from '../models/Gameboard.js';
import { Ship } from '../models/Ship.js';

import { DOMController } from './DOMController.js';

import {
  createVerticalCoordinates,
  createHorizontalCoordinates
} from '../services/createRandomCoordinates.js';

export class GameController {
  static #player1;
  static #player2;
  static #gameboard1;
  static #gameboard2;

  static startGame() {
    GameController.#gameboard1 = new Gameboard(8, 8);
    GameController.#gameboard2 = new Gameboard(8, 8);
    GameController.#player1 = new Player(GameController.gameboard1, 'Human');
    GameController.#player2 = new Player(GameController.gameboard2, 'Bot');

    GameController.player1.activate();
    GameController.player1.type = 'human';
    GameController.player2.type = 'bot';

    DOMController.renderBoard(GameController.player1)
    DOMController.renderBoard(GameController.player2)

    const ship1 = new Ship(2);
    const ship2 = new Ship(4);
    const ship3 = new Ship(3);
    const ship4 = new Ship(5);

    DOMController.createRandomShipsPlacementButton();

  }
  static getCurrentPlayerTurn() {
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
  static createBotAttack() {
    const opponent = GameController.getCurrentOpponent()
    const opponentBoard = opponent.gameboard;

    let xCoordinate = Math.floor(Math.random() * 8);
    let yCoordinate = Math.floor(Math.random() * 8);
    let point = opponentBoard.board[yCoordinate][xCoordinate];

    let counter = opponentBoard.length;
    while (point === 'missed' || point === 'hit') {
      if (counter <= 0) return [0, 0];
      xCoordinate = Math.floor(Math.random() * 8);
      yCoordinate = Math.floor(Math.random() * 8);
      point = opponentBoard.board[yCoordinate][xCoordinate];
      counter--;
    }
    return [xCoordinate, yCoordinate];
  }
  static finishGame() {
    alert('Game ends')
  }
  static placeShipsRandomly(...ships) {
    const directions = ['horizontal', 'vertical'];
    const currentPlayer = GameController.getCurrentPlayerTurn();
    const opponentPlayer = GameController.getCurrentOpponent();

    // Current Player's board
    ships.forEach((ship) => {
      let direction = directions[Math.floor(Math.random() * 2)];
      let coordinates;
      if (direction == directions[0]) {
        coordinates = createHorizontalCoordinates(
          currentPlayer.gameboard, ship.length
        );
      } else {
        coordinates = createVerticalCoordinates(
          currentPlayer.gameboard, ship.length
        );
      }
      DOMController.placeShipOnBoard(ship, currentPlayer, coordinates);
    });

    // Enemy's board
    ships.forEach((ship) => {
      let direction = directions[Math.floor(Math.random() * 2)];
      let coordinates;
      if (direction == directions[0]) {
        coordinates = createHorizontalCoordinates(
          opponentPlayer.gameboard, ship.length
        );
      } else {
        coordinates = createVerticalCoordinates(
          currentPlayer.gameboard, ship.length
        );
      }
      DOMController.placeShipOnBoard(ship, opponentPlayer, coordinates);
    });

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
