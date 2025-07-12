
export class Player {
  #gameboard;
  #name;
  #active;

  constructor(board, name) {
    this.#gameboard = board;
    this.#name = name;
    this.#active = false;
  }
  get gameboard() {
    return this.#gameboard;
  }
  get name() {
    return this.#name;
  }
  get status() {
    return this.#active;
  }
  activate() {
    this.#active = true;
  }
  deactivate() {
    this.#active = false;
  }
}
