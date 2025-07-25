import { createVerticalCoordinates } from "../src/sevices/createRandomCoordinates";
import { Gameboard } from "../src/models/Gameboard";

test('Create a coordinates with length of 3', () => {
  const coordinatesLength = 3;
  const gameboard = new Gameboard(8, 8);
  const coordinates = createVerticalCoordinates(gameboard, coordinatesLength);
  const firstCoordinate = coordinates[0];
  const secondCoordinate = coordinates[1];
  const thirdCoordinate = coordinates[2];

  expect(coordinates).toHaveLength(3);
  expect(firstCoordinate[1] + 1).toBe(secondCoordinate[1]);
  expect(secondCoordinate[1] + 1).toBe(thirdCoordinate[1]);
});
test('Create a coordinates with length of 8', () => {
  const coordinatesLength = 8;
  const gameboard = new Gameboard(8, 8);
  const coordinates = createVerticalCoordinates(gameboard, coordinatesLength);
  const firstCoordinate = coordinates[0];
  const secondCoordinate = coordinates[1];
  const thirdCoordinate = coordinates[2];
  const fourthCoordinate = coordinates[3];
  const fifthCoordinate = coordinates[4];
  const sixthCoordinate = coordinates[5];
  const seventhCoordinate = coordinates[6];
  const eighthCoordinate = coordinates[7];

  expect(coordinates).toHaveLength(8);
  expect(firstCoordinate[1] + 1).toBe(secondCoordinate[1]);
  expect(secondCoordinate[1] + 1).toBe(thirdCoordinate[1]);
  expect(thirdCoordinate[1] + 1).toBe(fourthCoordinate[1]);
  expect(fourthCoordinate[1] + 1).toBe(fifthCoordinate[1]);
  expect(fifthCoordinate[1] + 1).toBe(sixthCoordinate[1]);
  expect(sixthCoordinate[1] + 1).toBe(seventhCoordinate[1]);
  expect(seventhCoordinate[1] + 1).toBe(eighthCoordinate[1]);
});
test('Create a coordinates with length of 1', () => {
  const coordinatesLength = 1;
  const gameboard = new Gameboard(8, 8);
  const coordinates = createVerticalCoordinates(gameboard, coordinatesLength);

  expect(coordinates).toHaveLength(1);
});
test('Create a coordinates with length of 0', () => {
  const coordinatesLength = 0;
  const gameboard = new Gameboard(8, 8);
  const coordinates = createVerticalCoordinates(gameboard, coordinatesLength);
  const emptyArray = [];

  expect(coordinates).toHaveLength(0);
  expect(coordinates).toEqual(emptyArray);
});
