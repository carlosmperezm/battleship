import { Gameboard } from '../models/Gameboard.js';
import { Ship } from '../models/Ship.js';

describe('Ship Tests', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard(8, 8);
  });
  test('Place one ship on the board and takes the right coordinates', () => {
    const coordinates = [[1, 1], [2, 1], [3, 1]]
    const ship = new Ship(3);
    gameboard.placeShip(ship, coordinates);

    expect(gameboard.shipsAndPositions).toHaveLength(1);
    expect(gameboard.shipsAndPositions).toEqual([
      { ship, position: coordinates }
    ]);

  });
  test('Place different ships on the board with the right coordinats', () => {
    const coordinates1 = [[1, 1], [2, 1], [3, 1]];
    const ship1 = new Ship(3);
    const coordinates2 = [[1, 4], [2, 4]];
    const ship2 = new Ship(2);
    const coordinates3 = [[4, 4], [4, 5], [4, 6], [4, 7], [4, 8]];
    const ship3 = new Ship(5);

    gameboard.placeShip(ship1, coordinates1);
    expect(gameboard.shipsAndPositions).toHaveLength(1);
    expect(gameboard.shipsAndPositions).toEqual([
      { ship: ship1, position: coordinates1 }
    ]);

    gameboard.placeShip(ship2, coordinates2);
    expect(gameboard.shipsAndPositions).toHaveLength(2);
    expect(gameboard.shipsAndPositions).toEqual([
      { ship: ship1, position: coordinates1 },
      { ship: ship2, position: coordinates2 }
    ]);

    gameboard.placeShip(ship3, coordinates3);
    expect(gameboard.shipsAndPositions).toHaveLength(3);
    expect(gameboard.shipsAndPositions).toEqual([
      { ship: ship1, position: coordinates1 },
      { ship: ship2, position: coordinates2 },
      { ship: ship3, position: coordinates3 }
    ]);
  });

});

describe('Receive Attack Tests', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard(8, 8);
  });
  test('Attacks 1 ship and that ship increment its hits', () => {
    const coordinates = [[1, 1], [2, 1], [3, 1]]
    const ship = new Ship(3);
    gameboard.placeShip(ship, coordinates);

    gameboard.receiveAttack(2, 1);
    expect(ship.hits).toBe(1);
  });
  test('Receives an attack in two different ships and both increment their hits', () => {
    const coordinates = [[1, 1], [2, 1], [3, 1]]
    const ship = new Ship(3);
    gameboard.placeShip(ship, coordinates);
    const coordinates2 = [[1, 4], [2, 4]]
    const ship2 = new Ship(2);
    gameboard.placeShip(ship2, coordinates2);

    gameboard.receiveAttack(1, 1,);
    gameboard.receiveAttack(2, 4,);

    expect(ship.hits).toBe(1);
    expect(ship2.hits).toBe(1);
  });
  test('Ships receive different number of attacks and their hits increment accordingly', () => {
    const coordinates = [[1, 1], [2, 1], [3, 1]]
    const ship = new Ship(3);
    gameboard.placeShip(ship, coordinates);
    const coordinates2 = [[1, 4], [2, 4]]
    const ship2 = new Ship(2);
    gameboard.placeShip(ship2, coordinates2);
    const coordinates3 = [[0, 8], [1, 8], [2, 8], [3, 8], [4, 8]];
    const ship3 = new Ship(5);
    gameboard.placeShip(ship3, coordinates3);

    // Ship 1 Receives 1 attack
    gameboard.receiveAttack(1, 1,);
    // Ship 3 receives 2 attacks
    gameboard.receiveAttack(0, 8,);
    gameboard.receiveAttack(3, 8,);

    expect(ship.hits).toBe(1);
    expect(ship2.hits).toBe(0);
    expect(ship3.hits).toBe(2);
  });
  test('Attack does not hit any ship so all ships keep their hits number', () => {
    const ship = new Ship(3);
    gameboard.placeShip(ship, [[0, 1], [1, 1], [2, 1]]);
    const ship2 = new Ship(2);
    gameboard.placeShip(ship2, [[1, 4], [2, 4]]);

    gameboard.receiveAttack(1, 8);
    gameboard.receiveAttack(0, 0);

    expect(ship.hits).toBe(0);
    expect(ship2.hits).toBe(0);
  });
});

describe('Missed Attacks Tests', () => {
  test('Missed attacks are saved', () => {
    const gameboard = new Gameboard(8, 8);
    const ship = new Ship(3);
    gameboard.placeShip(ship, [[0, 1], [1, 1], [2, 1]]);
    gameboard.receiveAttack(1, 9);

    expect(gameboard.missedAttacks).toHaveLength(1);
    expect(gameboard.missedAttacks).toEqual([[1, 9]])

    gameboard.receiveAttack(2, 9);
    expect(gameboard.missedAttacks).toHaveLength(2);
    expect(gameboard.missedAttacks).toEqual([[1, 9], [2, 9]])
  });
  test('Attacks that hit are not saved', () => {
    const gameboard = new Gameboard(8, 8);
    const ship = new Ship(3);
    gameboard.placeShip(ship, [[0, 1], [1, 1], [2, 1]]);
    gameboard.receiveAttack(2, 1);

    expect(gameboard.missedAttacks).toHaveLength(0);
    expect(gameboard.missedAttacks).toEqual([])

    gameboard.receiveAttack(1, 1);
    expect(gameboard.missedAttacks).toHaveLength(0);
    expect(gameboard.missedAttacks).toEqual([])
  });
})

describe('Sunk ships tests', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard(8, 8);
  });
  test('Sunk a ship, so returns true', () => {
    const ship = new Ship(2);
    gameboard.placeShip(ship, [[0, 1], [1, 1]]);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(1, 1);

    expect(gameboard.isSunk()).toBe(true);
  });
  test('Do not sunk a ship, so returns false', () => {
    const ship = new Ship(2);
    gameboard.placeShip(ship, [[0, 1], [1, 1]]);
    gameboard.receiveAttack(0, 1);

    expect(gameboard.isSunk()).toBe(false);
  });
  test('Just a few ships are sunk but not all, so the board returns false', () => {
    const ship1 = new Ship(2);
    gameboard.placeShip(ship1, [[0, 1], [1, 1]]);
    const ship2 = new Ship(4);
    gameboard.placeShip(ship2, [[5, 5], [5, 6], [5, 7], [5, 8]]);
    const ship3 = new Ship(3);
    gameboard.placeShip(ship3, [[8, 8], [8, 7], [8, 6]]);
    const ship4 = new Ship(2);
    gameboard.placeShip(ship4, [[0, 0], [1, 0]]);

    //Ship 1 hit entirely
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(1, 1);
    //Ship 3 hit entirely
    gameboard.receiveAttack(8, 8);
    gameboard.receiveAttack(8, 7);
    gameboard.receiveAttack(8, 6);
    //Ship 4 hit entirely
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);

    expect(gameboard.isSunk()).toBe(false);
  });

})
