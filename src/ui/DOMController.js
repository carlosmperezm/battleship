
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
    } else { console.log('NO') }

    const boardDiv = DOMController.createBoard(player);
    DOMController.main.appendChild(boardDiv);
  }
  static placeShip(ship, player, coordinates) {
    player.gameboard.placeShip(ship, coordinates);
    DOMController.renderBoard(player);
  }

  static get main() {
    return DOMController.#main;
  }
}
