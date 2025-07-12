
export class Gameboard {
  #board;
  #shipsAndPositions;
  #missedAttacks;
  #length;

  constructor(xAxis, yAxis) {
    this.#length = [xAxis, yAxis];
    this.#board = [];
    this.#shipsAndPositions = [];
    this.#missedAttacks = [];
    for (let i = 0; i < yAxis; i++) {
      let xRow = [];
      for (let j = 0; j < xAxis; j++) {
        xRow.push(false);
      }
      this.#board.push(xRow);
    }
  }
  get shipsAndPositions() {
    return this.#shipsAndPositions;
  }
  get missedAttacks() {
    return this.#missedAttacks;
  }
  get board() {
    return this.#board
  }
  get length() {
    return this.#length;
  }
  placeShip(ship, coordinates) {
    this.#shipsAndPositions.push({
      ship,
      position: coordinates,
    });
    for (let coordinate of coordinates) {
      const x = coordinate[1];
      const y = coordinate[0];
      this.#board[y][x] = 'ship';
    }
  }
  receiveAttack(xAxis, yAxis) {
    const coordinates = [xAxis, yAxis];
    for (let shipAndPositionPair of this.shipsAndPositions) {
      for (let xyCoordinates of shipAndPositionPair.position) {
        if (xyCoordinates[0] === xAxis && xyCoordinates[1] === yAxis) {
          shipAndPositionPair.ship.hit();
          this.#board[yAxis][xAxis] = 'hit';
          return;
        }
      }
    }
    this.#board[yAxis][xAxis] = 'missed';
    this.#missedAttacks.push([xAxis, yAxis]);
  }
  isSunk() {
    for (let shipAndPosition of this.shipsAndPositions) {
      const { ship, position } = shipAndPosition;
      if (!ship.isSunk()) return false;
    }
    return true;
  }

}
