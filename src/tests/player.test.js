import { Player } from '../models/Player.js';

describe('Players Gameboards Creation tests', () => {
  test('Players have diferent gameboards', () => {
    const player1 = new Player([1, 2], 'player1');
    const player2 = new Player([1, 2], 'player2');
    const player3 = new Player([1, 2], 'player3');
    const player4 = new Player([1, 2], 'player4');

    expect(player1.gameboard).not.toBe(player2.gameboard);
    expect(player2.gameboard).not.toBe(player3.gameboard);
    expect(player3.gameboard).not.toBe(player4.gameboard);
    expect(player4.gameboard).not.toBe(player1.gameboard);
  });
});
