let gridStateArray = [
  ["X", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const isCellOccupied = (x, y) => {
  return gridStateArray[x][y] === "X" || gridStateArray[x][y] === "Y";
};

console.log(isCellOccupied(0, 0));
