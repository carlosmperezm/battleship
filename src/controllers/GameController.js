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
    // const directions = ['horizontal', 'vertical'];
    const currentPlayer = GameController.getCurrentPlayerTurn();
    const limitNumber = currentPlayer.gameboard.length[0] - 1;
    ships.forEach((ship) => {
      console.log('limit number: ', limitNumber)
      // let direction = directions[Math.floor(Math.random() * 2)];
      let coordinates = getRandomCoordinates(ship.length, limitNumber);
      console.log('COORDS: ', coordinates);
      DOMController.placeShipOnBoard(ship, currentPlayer, coordinates);
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

function getRandomCoordinates(coordinatesLength, boardSize, direction = 'horizontal') {
  const coordinates = [];
  const gameboard = GameController.getCurrentPlayerTurn().gameboard;
  const rowLength = gameboard.length[0];
  const randomNumber = Math.floor(Math.random() * rowLength);


  if (direction == 'horizontal') {
    // Placing ships in horizontal direction
    console.log('Placing ships in horizontal direction')
    const row = gameboard.board[randomNumber];
    console.log('y-axis:', randomNumber);

    let counter = 0;
    let column = 0;

    while (counter < coordinatesLength && column < rowLength) {
      console.log('Checking on x-axis:', column);
      const point = row[column];
      if (point != 'ship' && column > 0 && row[column - 1] == 'ship') {
        // Makes sure to not place ships right next to the others
        // Basically set a margin for each ship
        console.log('ship horizontal margin');
      }
      if (point != 'ship' && row > 0 && row - 1[column] == 'ship') {
        // Makes sure to not place ships right next to the others
        // Basically set a margin for each ship
        console.log('ship vertical margin');
      }
      else if (point != 'ship' && !coordinates.includes([column, randomNumber])) {
        // If there's no ship and the coordinates aren't include in the
        // ship's coordinates already
        console.log('No ship in this coordinate, saving data');
        coordinates.push([column, randomNumber]);
        counter++;
      } else {
        // If there is a ship, dump the data previously collected
        console.log('There is a ship there, deleting prevous data');
        coordinates.splice(0, coordinates.length - 1);
        counter = 0;
      }
      // Move to the next column
      console.log('Coordinates: ', coordinates);
      column++;
    }
  }

  if (coordinates.length != coordinatesLength) {
    // If no coordinates could be found
    // Try again with a different random number
    console.log('Could not find a place:', randomNumber);
    console.log('Trying again...');
    return getRandomCoordinates(coordinatesLength, boardSize, direction);
  } else {
    // Coordinates were found for the whole ship
    console.log('Found a coordinate for the ship');
    return coordinates;
  }
}
