import { Player } from '../models/Player.js';
import { Gameboard } from '../models/Gameboard.js';
import { Ship } from '../models/Ship.js';
import { DOMController } from './DOMController.js';
import { GameController } from './GameController.js';



export function attackHandler(evt) {
  const targetedBoard = evt.target.parentNode.parentNode.dataset.status;
  if (targetedBoard !== 'active') {
    return;
  }
  const coordinates = evt.target.dataset.coordinate.split(',');
  const targetXCoordinate = Number.parseInt(coordinates[0]);
  const targetYCoordinate = Number.parseInt(coordinates[1]);
  const currentOpponent = GameController.getCurrentOpponent();
  const opponentBoard = currentOpponent.gameboard;

  opponentBoard.receiveAttack(targetXCoordinate, targetYCoordinate);

  for (let yCoordinate = 0; yCoordinate < opponentBoard.board.length; yCoordinate++) {
    const yRow = opponentBoard.board[yCoordinate];
    for (let xCoordinate = 0; xCoordinate < yRow.length; xCoordinate++) {
      const point = opponentBoard.board[yCoordinate][xCoordinate]
      if (point === 'missed') {
        evt.target.classList.add('missed');
      } else if (point === 'hit') {
        evt.target.classList.add('hit');
      }
    }
  }
  DOMController.renderBoard(currentOpponent);
}




