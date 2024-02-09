let mainBoard = document.getElementsByClassName("board");
let playerInfo = document.getElementsByClassName("players");

const boardChange = (() => {
  /*comment1*/
  let gridStateArray = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]; /*comment2*/

  const newGrid = () => {
    for (let i = 0; i < gridStateArray.length; i++) {
      for (let j = 0; j < gridStateArray[0].length; j++) {
        gridStateArray[i][j] = "";
      }
    }
  };
  /*comment3*/

  const drop = (token, x, y) => {
    if (gridStateArray[x][y] === "X" || gridStateArray[x][y] === "Y") {
      console.log("Pick another space");
    } else {
      gridStateArray[x][y] = token;
    }
  };

  return { gridStateArray, newGrid, drop };
})();

let gameMechanics = () => {
  const isCellEmpty = (gridX, gridY) => {
    if (gameBoard.gridStateArray[gridX][gridY] === "") return true;
  };
  const checkForWin = () => {
    let board = gameBoard.gridStateArray;

    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] !== "" &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] !== "" &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      ) {
        return true;
      }
    }

    if (
      board[0][0] !== "" &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      return true;
    }
    if (
      board[0][2] !== "" &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      return true;
    }

    // No win
    return false;
  };
};

/*
COMMENTS:
    - COMMENT1:  If gameBoard is written as a normal function, calling gameBoard.gridStateArray returns 'undefined', as the func
 has not been initialized. By writing in IIFE format the factory func can be used immediatly without
 a seperate init.

    - COMMENT2: Better to keep gridStateArray within the factory func
  this helps to avoid potential conflicts and bugs that can occur when
  a variable is globally avail and can potentially be changed un-intentionally.
  ENCAPSULATING the gridStateArray within the object means that it is only accessible
  by the methods we allow

  - COMMENT3: Tried writing newGrid just as a variable re-assignment, this didn't work, needed to actually
  iterate over the array and re-assign indiv. elems., thinking this is a deep/shallow copy issue
*/
