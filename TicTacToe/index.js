/**
 If gameBoard is written as a normal function, calling gameBoard.grid returns 'undefined', as the func
 has not been initialized. By writing in IIFE format the factory func can be used immediatly without
 a seperate init.
 */



const gameBoard = (() => {
  let grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const newGrid = () => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        grid[i][j] = "";
      }
    }
  };
  /*Tried writing newGrid just as a variable re-assignment, this didn't work, needed to actually
  iterate over the array and re-assign indiv. elems., thinking this is a deep/shallow copy issue*/


  const drop = (token, x, y) => {
    if (grid[x][y] === "X" || grid[x][y] === "Y") {
      console.log("Pick another space");
    } else {
      grid[x][y] = token;
    }
  };

  return { grid, newGrid, drop };
})();


