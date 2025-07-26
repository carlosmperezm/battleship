
export function createHorizontalCoordinates(gameboard, coordinatesLength) {
  /**
   * Returns a random horizontal coordinates for one ship
   * @param gameboard an instance of the Gameboard class
   * @param coordinatesLength an integer representing the length of the ship
   * the returned coordinates will have the same length than the ship
   */

  const coordinates = [];
  const rowLength = gameboard.length[0];
  const rowNumber = Math.floor(Math.random() * rowLength);
  const row = gameboard.board[rowNumber];
  let counter = 0;
  let columnNumber = 0;
  while (counter < coordinatesLength && columnNumber < rowLength) {
    const point = row[columnNumber];
    if (point != 'ship' && !coordinates.includes([columnNumber, rowNumber])) {
      coordinates.push([columnNumber, rowNumber])
      counter++;
    } else {
      // Delete the saved coordinates
      coordinates.splice(0, coordinates.length - 1);
      counter = 0;
    }
    columnNumber++;
  }
  // Coordinates could not be found, try again with a different random number
  if (coordinates.length != coordinatesLength) {
    return createHorizontalCoordinates(gameboard, coordinatesLength)
  }
  return coordinates
}
export function createVerticalCoordinates(gameboard, coordinatesLength) {
  /**
   * Returns a random vertical coordinates for one ship
   * @param gameboard an instance of the Gameboard class
   * @param coordinatesLength an integer representing the length of the ship
   * the returned coordinates will have the same length than the ship
   */

  const coordinates = [];
  const columnLength = gameboard.length[0];
  const rowLength = gameboard.length[1];
  const columnNumber = Math.floor(Math.random() * columnLength);
  let rowNumber = Math.floor(Math.random() * rowLength);
  let counter = 0;
  while (counter < coordinatesLength && rowNumber < rowLength) {
    const row = gameboard.board[rowNumber];
    const point = row[columnNumber];
    if (point != 'ship' && !coordinates.includes([columnNumber, rowNumber])) {
      coordinates.push([columnNumber, rowNumber])
      counter++;
    } else {
      // Delete the saved coordinates
      coordinates.splice(0, coordinates.length - 1);
      counter = 0;
    }
    rowNumber++;
  }
  // Coordinates could not be found, try again with a different random number
  if (coordinates.length != coordinatesLength) {
    return createVerticalCoordinates(gameboard, coordinatesLength)
  }
  return coordinates
}

