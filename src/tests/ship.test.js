import { Ship } from '../models/Ship.js';

describe('Length', () => {
  const shipLength = 5;
  const ship = new Ship(shipLength);

  test('Ship has a length that has been passed in', () => {
    expect(ship.length).toBe(shipLength);
  });
});

describe('Hit', () => {
  const shipLength = 3;
  const ship = new Ship(shipLength);

  test('Ship that has not been hit has 0 hits', () => {
    expect(ship.hits).toBe(0);
  });
  test('Ship has been hit increases its hits by 1', () => {
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
  });
  test('Ship has been hit 4 times increases its hits 4 times', () => {
    const length = 6;
    const ship1 = new Ship(length);

    ship1.hit();
    ship1.hit();
    ship1.hit();
    ship1.hit();
    expect(ship1.hits).toBe(4);
  });

});

describe('Sunk', () => {
  const shipLength = 5;
  const ship = new Ship(shipLength);

  test('Ship that has not been hit is not sunk', () => {
    expect(ship.isSunk()).toBe(false);
  });
  test('Ship with length of 5 is hit 4 times and is not sunk', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
  test('Ship with length of 3 is hit 3 times is sunk', () => {
    const length = 3;
    const ship1 = new Ship(length);

    ship1.hit();
    ship1.hit();
    ship1.hit();
    expect(ship1.isSunk()).toBe(true);
  });
  test('Ship with length of 4 is hit 5 times is sunk', () => {
    const length = 4;
    const ship1 = new Ship(length);

    ship1.hit();
    ship1.hit();
    ship1.hit();
    ship1.hit();
    ship1.hit();
    expect(ship1.isSunk()).toBe(true);
  });

})
