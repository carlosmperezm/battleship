
export class Player {
  #gameboard;

  constructor(board) {
    this.#gameboard = board;
  }
  get gameboard() {
    return this.#gameboard;
  }
}
