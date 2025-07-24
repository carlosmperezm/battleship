import { Player } from '../src/models/Player.js';

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
describe('Players status tests', () => {
  test('Set two players as active', () => {
    const player1 = new Player([1, 2], 'player1');
    const player2 = new Player([1, 2], 'player2');
    player1.activate();
    player2.activate();

    expect(player1.status).toBe(true);
    expect(player2.status).toBe(true);
  });
  test('Set two players as no active', () => {
    const player1 = new Player([1, 2], 'player1');
    const player2 = new Player([1, 2], 'player2');
    player1.deactivate();
    player2.deactivate();

    expect(player1.status).toBe(false);
    expect(player2.status).toBe(false);
  });
  test('Activate one player and deactivate other', () => {
    const player1 = new Player([1, 2], 'player1');
    const player2 = new Player([1, 2], 'player2');
    player1.deactivate();
    player2.activate();

    expect(player1.status).toBe(false);
    expect(player2.status).toBe(true);
  });
  test('Players are deactivated by default', () => {
    const player1 = new Player([1, 2], 'player1');
    const player2 = new Player([1, 2], 'player2');

    expect(player1.status).toBe(false);
    expect(player2.status).toBe(false);
  });
})
