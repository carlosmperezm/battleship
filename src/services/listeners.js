import { Ship } from '../models/Ship.js';
import { DOMController } from '../controllers/DOMController.js';
import { GameController } from '../controllers/GameController.js';

export function attackHandler(evt) {
  const targetedBoard = evt.target.parentNode.parentNode;
  const coordinates = evt.target.dataset.coordinate.split(',');
  const targetXCoordinate = Number.parseInt(coordinates[0]);
  const targetYCoordinate = Number.parseInt(coordinates[1]);
  const currentPlayer = GameController.getCurrentPlayer()
  const currentOpponent = GameController.getCurrentOpponent();
  const opponentBoard = currentOpponent.gameboard;

  // If the board being clicked is not the enemy board don't allow attacks
  if (targetedBoard.classList.contains(`${currentPlayer.name}`)) {
    console.log('NOPE')
    return;
  }

  opponentBoard.receiveAttack(targetXCoordinate, targetYCoordinate);

  // Switch players turns 
  currentPlayer.deactivate();
  currentOpponent.activate();

  // render the boards again with the new players status
  DOMController.renderBoard(currentOpponent);
  DOMController.renderBoard(currentPlayer);

  //Validate if the player has sunk all opponent's ships
  if (opponentBoard.isSunk()) {
    console.log(`${currentPlayer.name} won`)
    GameController.finishGame();
    return;
  }

  // The bot immediately attacks back 
  if (currentPlayer.type === 'human') {
    const botAttackCoordinates = GameController.createBotAttack();

    const boardToAttack = document
      .querySelector(`.board.${currentPlayer.name}`)
    const divToAttack = boardToAttack
      .querySelector(`.x-box[data-coordinate='${botAttackCoordinates}']`);

    divToAttack.click();
    // DOMController.renderBoard(currentOpponent);
    // DOMController.renderBoard(currentPlayer);
  } else {
    console.log('Bot attacked...Waiting for human to attack again');
  }
}
export function randomizeShipsHandler(evt) {
  const ship1 = new Ship(2);
  const ship2 = new Ship(4);
  const ship3 = new Ship(3);
  const ship4 = new Ship(5);

  GameController.placeShipsRandomly(ship1, ship2, ship3, ship4);

}




