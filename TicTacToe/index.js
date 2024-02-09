/**
 If gameBoard is written as a normal function, calling gameBoard.grid returns 'undefined', as the func
 has not been initialized. By writing in IIFE format the factory func can be used immediatly without
 a seperate init.
 */

let mainBoard = document.getElementsByClassName("board");
let playerInfo = document.getElementsByClassName("players");

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

let gameMechanics = () => {
  const isCellEmpty = (gridX, gridY) => {
    if (gameBoard.grid[gridX][gridY] === "") return true;
  };
  const checkForWin = () => {
    let board = gameBoard.grid;

    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (board[0][i] !== "" && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        return true;
      }
    }

    if (board[0][0] !== "" && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return true;
    }
    if (board[0][2] !== "" && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return true;
    }

    return false;
  };
};
