
export class Player {
  #gameboard;
  #name;
  #active;
  #type;

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
  set type(type) {
    if (type === 'bot' || type === 'human') {
      this.#type = type;
    } else {
      throw new TypeError('Only [bot] or [human] types are available');
    }
  }
  get type() {
    return this.#type;
  }
}
