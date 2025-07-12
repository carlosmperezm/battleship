
export class DOMController {
  static #main = document.querySelector('main');

  static createBoard(player) {
    const board = player.gameboard.board;
    const boardDiv = document.createElement('div');
    boardDiv.classList.add('board', player.name);
    for (let i = 0; i < board.length; i++) {
      const yCoordinate = board[i];
      const yDiv = document.createElement('div');
      yDiv.classList.add('y-box');
      for (let j = 0; j < yCoordinate.length; j++) {
        const xCoordinate = yCoordinate[j];
        const xDiv = document.createElement('div');
        xDiv.classList.add('board-square', 'x-box');
        if (xCoordinate) {
          xDiv.classList.add('ship');
        }
        yDiv.appendChild(xDiv);
      }
      boardDiv.appendChild(yDiv);
    }
    return boardDiv;
  }
  static renderBoard(player) {
    const previousBoardDiv = document.querySelector(`.${player.name}`);
    console.log('Prev board exists ? ')
    if (previousBoardDiv) {
      console.log('YES')
      DOMController.main.removeChild(previousBoardDiv);
    }
    const boardDiv = DOMController.createBoard(player);
    DOMController.main.appendChild(boardDiv);
  }
  static placeShip(ship, player, coordinates) {
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

  static get main() {
    return DOMController.#main;
  }

}
