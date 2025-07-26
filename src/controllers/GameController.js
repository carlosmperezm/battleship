import { Player } from '../models/Player.js';
import { Gameboard } from '../models/Gameboard.js';
import { DOMController } from './DOMController.js';
import {
  createVerticalCoordinates,
  createHorizontalCoordinates
} from '../services/createRandomCoordinates.js';
import { Modal } from '../views/modal.js';

export class GameController {
  static #player1;
  static #player2;
  static #gameboard1;
  static #gameboard2;

  static startGame() {
    GameController.#gameboard1 = new Gameboard(8, 8);
    GameController.#gameboard2 = new Gameboard(8, 8);
    GameController.#player1 =
      new Player(GameController.gameboard1, 'player1');
    GameController.#player2 =
      new Player(GameController.gameboard2, 'player2');
    GameController.player1.activate();
    GameController.player1.type = 'human';
    GameController.player2.type = 'bot';

    DOMController.renderBoard(GameController.player1)
    DOMController.renderBoard(GameController.player2)
    DOMController.createRandomShipsPlacementButton();
  }
  static getCurrentPlayer() {
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
    // TODO: Move this function to Services layer
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
    const modal = new Modal();
    console.log('MODAL: ', modal);
    DOMController.main.append(modal);
  }
  static placeShipsRandomly(...ships) {
    const directions = ['horizontal', 'vertical'];
    const currentPlayer = GameController.getCurrentPlayer();
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
