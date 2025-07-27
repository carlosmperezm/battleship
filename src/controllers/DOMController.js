
import { attackHandler, randomizeShipsHandler } from "../services/listeners.js";

export class DOMController {
  static #main = document.querySelector('main');

  static createBoard(player) {
    const board = player.gameboard.board;
    const boardDiv = document.createElement('div');
    boardDiv.classList.add('board', player.name);
    for (let y = 0; y < board.length; y++) {
      const yCoordinate = board[y];
      const yDiv = document.createElement('div');
      yDiv.classList.add('y-box');
      for (let x = 0; x < yCoordinate.length; x++) {
        const xCoordinate = yCoordinate[x];
        const xDiv = document.createElement('div');
        xDiv.classList.add('board-square', 'x-box');
        xDiv.dataset.coordinate = [x, y];

        // If the coordinate wasn't hit or isn't any ship in there add the event
        if (!xCoordinate || xCoordinate === 'ship') {
          xDiv.addEventListener('click', attackHandler);
        }

        // Not show the opponent's ships
        if (
          xCoordinate != 'ship' ||
          (xCoordinate == 'ship' && player.type == 'human')
        ) {
          xDiv.classList.add(`${xCoordinate}`);
        }
        yDiv.appendChild(xDiv);
      }
      boardDiv.appendChild(yDiv);
    }
    if (!player.status) {
      boardDiv.dataset.status = 'active';
    } else {
      boardDiv.dataset.status = 'inactive';
    }
    return boardDiv;
  }
  static renderBoard(player) {
    const previousBoardDiv = document.querySelector(`.${player.name}`);
    const randomButton = document.querySelector('.random-button');
    if (previousBoardDiv) {
      previousBoardDiv.remove();
    }
    if (randomButton) {
      randomButton.remove();
    }
    const boardName = document.createElement('span');
    boardName.textContent = `${player.name}'s board`;
    boardName.classList.add('board-name', player.name);
    const boardDiv = DOMController.createBoard(player);
    DOMController.main.append(boardName, boardDiv);
  }
  static placeShipOnBoard(ship, player, coordinates) {
    player.gameboard.placeShip(ship, coordinates);
    DOMController.renderBoard(player);
  }
  static createShip(ship) {
    const shipDiv = document.createElement('div');
    for (let i = 0; i < ship.length; i++) {
      const div = document.createElement('div');
      div.classList.add('board-square', 'ship');
      shipDiv.appendChild(div);
    }
    return shipDiv;
  }
  static renderShip(ship, player) {
    const shipDiv = DOMController.createShip(ship);
    let shipsContainer = document.querySelector(`.ships-container.${player.name}`);
    if (!shipsContainer) {
      shipsContainer = document.createElement('div');
    }
    shipsContainer.classList.add('ships-container', player.name);
    shipsContainer.appendChild(shipDiv);
    DOMController.main.appendChild(shipsContainer);
  }

  static createRandomShipsPlacementButton() {
    const button = document.createElement('button');
    button.addEventListener('click', randomizeShipsHandler);
    button.textContent = 'Set ships randomly';
    button.classList.add('random-button');
    DOMController.main.appendChild(button);
  }

  static get main() {
    return DOMController.#main;
  }

}
