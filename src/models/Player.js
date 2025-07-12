
export class Player {
  #gameboard;
  #name;

  constructor(board, name) {
    this.#gameboard = board;
    this.#name = name;
  }
  get gameboard() {
    return this.#gameboard;
  }
  get name() {
    return this.#name;
  }
}
