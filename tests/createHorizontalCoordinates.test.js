import { createHorizontalCoordinates } from "../src/sevices/createRandomCoordinates";
import { Gameboard } from "../src/models/Gameboard";

test('Create a coordinates with length of 3', () => {
  const coordinatesLength = 3;
  const gameboard = new Gameboard(8, 8);
  const coordinates = createHorizontalCoordinates(gameboard, coordinatesLength);
  const firstCoordinate = coordinates[0];
  const secondCoordinate = coordinates[1];
  const thirdCoordinate = coordinates[2];

  expect(coordinates).toHaveLength(3);
  expect(firstCoordinate[0] + 1).toBe(secondCoordinate[0]);
  expect(secondCoordinate[0] + 1).toBe(thirdCoordinate[0]);
});
test('Create a coordinates with length of 8', () => {
  const coordinatesLength = 8;
  const gameboard = new Gameboard(8, 8);
  const coordinates = createHorizontalCoordinates(gameboard, coordinatesLength);
  const firstCoordinate = coordinates[0];
  const secondCoordinate = coordinates[1];
  const thirdCoordinate = coordinates[2];
  const fourthCoordinate = coordinates[3];
  const fifthCoordinate = coordinates[4];
  const sixthCoordinate = coordinates[5];
  const seventhCoordinate = coordinates[6];
  const eighthCoordinate = coordinates[7];

  expect(coordinates).toHaveLength(8);
  expect(firstCoordinate[0] + 1).toBe(secondCoordinate[0]);
  expect(secondCoordinate[0] + 1).toBe(thirdCoordinate[0]);
  expect(thirdCoordinate[0] + 1).toBe(fourthCoordinate[0]);
  expect(fourthCoordinate[0] + 1).toBe(fifthCoordinate[0]);
  expect(fifthCoordinate[0] + 1).toBe(sixthCoordinate[0]);
  expect(sixthCoordinate[0] + 1).toBe(seventhCoordinate[0]);
  expect(seventhCoordinate[0] + 1).toBe(eighthCoordinate[0]);
});
test('Create a coordinates with length of 1', () => {
  const coordinatesLength = 1;
  const gameboard = new Gameboard(8, 8);
  const coordinates = createHorizontalCoordinates(gameboard, coordinatesLength);

  expect(coordinates).toHaveLength(1);
});
test('Create a coordinates with length of 0', () => {
  const coordinatesLength = 0;
  const gameboard = new Gameboard(8, 8);
  const coordinates = createHorizontalCoordinates(gameboard, coordinatesLength);
  const emptyArray = [];

  expect(coordinates).toHaveLength(0);
  expect(coordinates).toEqual(emptyArray);
});
