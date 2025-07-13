import { Player } from '../models/Player.js';
import { Gameboard } from '../models/Gameboard.js';
import { Ship } from '../models/Ship.js';
import { DOMController } from './DOMController.js';
import { GameController } from './GameController.js';



export function attackHandler(evt) {
  const targetedBoard = evt.target.parentNode.parentNode;
  const coordinates = evt.target.dataset.coordinate.split(',');
  const targetXCoordinate = Number.parseInt(coordinates[0]);
  const targetYCoordinate = Number.parseInt(coordinates[1]);
  const currentPlayer = GameController.getCurrentPlayerTurn()
  const currentOpponent = GameController.getCurrentOpponent();
  const opponentBoard = currentOpponent.gameboard;

  // If the board is not the enemy board don't allow attacks
  if (targetedBoard.dataset.status !== 'active') {
    return;
  }

  // If the board being clicked is not the enemy board don't allow attacks
  if (targetedBoard.classList.contains(`.${currentPlayer.name}`)) {
    return;
  }
  opponentBoard.receiveAttack(targetXCoordinate, targetYCoordinate);

  // Iterate over the board to find the point being attack
  for (let yCoordinate = 0; yCoordinate < opponentBoard.board.length; yCoordinate++) {
    const yRow = opponentBoard.board[yCoordinate];
    for (let xCoordinate = 0; xCoordinate < yRow.length; xCoordinate++) {
      const point = opponentBoard.board[yCoordinate][xCoordinate]
      // Add an according class depending on whether the attack hits a ship or not
      if (point === 'missed') {
        evt.target.classList.add('missed');
      } else if (point === 'hit') {
        evt.target.classList.add('hit');
      }
    }
  }

  // Switch players turns 
  currentPlayer.deactivate();
  currentOpponent.activate();

  // render the boards again with the new players status
  DOMController.renderBoard(currentOpponent);
  DOMController.renderBoard(currentPlayer);
}




