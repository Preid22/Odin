let mainBoard = document.getElementsByClassName("board");
let playerInfo = document.getElementsByClassName("players");

const player = () => {
  let playerName = "";
  let playerToken = "";
  let playerScore = 0;

  const getScore = () => playerScore;
  const addScore = () => playerScore++;

  return { playerName, playerToken, addScore, getScore };
};

const boardControl = (() => {
  /*comment1*/
  let gridStateArray = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]; /*comment2*/

  const isCellOccupied = (gridX, gridY) => {
    return (
      gridStateArray[gridX][gridY] === "X" ||
      gridStateArray[gridX][gridY] === "Y"
    );
  };

  const resetGrid = () => {
    for (let i = 0; i < gridStateArray.length; i++) {
      for (let j = 0; j < gridStateArray[0].length; j++) {
        gridStateArray[i][j] = "";
      }
    }
  };
  /*comment3*/
  /*Will need player token and turn info */
  const dropToken = (gridX, gridY) => {};

  return { gridStateArray, resetGrid, isCellOccupied, dropToken };
})();

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

  - COMMENT3: Tried writing resetGrid just as a variable re-assignment, this didn't work, needed to actually
  iterate over the array and re-assign indiv. elems., thinking this is a deep/shallow copy issue
*/
