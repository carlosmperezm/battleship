
export class Gameboard {
  #board;
  #shipsAndPositions;
  #missedAttacks;

  constructor(xAxis, yAxis) {
    this.#board = [];
    this.#shipsAndPositions = [];
    this.#missedAttacks = [];
    for (let i = 0; i <= yAxis; i++) {
      this.#board.push(new Array(xAxis));
    }
  }
  get shipsAndPositions() {
    return this.#shipsAndPositions;
  }
  get missedAttacks() {
    return this.#missedAttacks;
  }
  placeShip(ship, coordinates) {
    // this.#ships.push(coordinates);
    this.#shipsAndPositions.push({
      ship,
      position: coordinates,
    });
  }
  receiveAttack(xAxis, yAxis) {
    const coordinates = [xAxis, yAxis];
    for (let shipAndPositionPair of this.shipsAndPositions) {
      for (let xyCoordinates of shipAndPositionPair.position) {
        if (xyCoordinates[0] === xAxis && xyCoordinates[1] === yAxis) {
          shipAndPositionPair.ship.hit();
          return;
        }
      }
    }
    this.#missedAttacks.push([xAxis, yAxis]);
  }

}
