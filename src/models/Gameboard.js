
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
      const x = coordinate[0];
      const y = coordinate[1];
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
    for (let y = 0; y < this.board.length; y++) {
      let yRow = this.board[y];
      for (let x = 0; x < yRow.length; x++) {
        let positionContent = yRow[x];
        if (positionContent == 'ship') return false;
      }
    }
    return true;
  }
  getFromBoard(x, y) {
    return this.#board[y][x];
  }

}
