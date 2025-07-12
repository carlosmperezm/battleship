
export class DOMController {
  static #main = document.querySelector('main');

  static createBoard(board) {
    const boardDiv = document.createElement('div');
    boardDiv.classList.add('board');
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
  static renderBoard(board) {
    const previousBoardDiv = document.querySelector('.board');
    console.log('Prev board exists ? ')
    if (previousBoardDiv) {
      console.log('Yes')
      DOMController.main.removeChild(previousBoardDiv);
    }

    const boardDiv = DOMController.createBoard(board)
    DOMController.main.appendChild(boardDiv);
  }
  static placeShip(ship, gameboard, coordinates) {
    gameboard.placeShip(ship, coordinates);
    DOMController.renderBoard(gameboard.board);
  }

  static get main() {
    return DOMController.#main;
  }
}
