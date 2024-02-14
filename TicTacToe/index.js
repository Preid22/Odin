let mainBoard = document.getElementById("game");
let playerInfo = document.getElementById("playerInput");

const player = () => {
  let playerName = "";
  let playerToken = "";
  let playerScore = 0;

  const scoreIs = () => playerScore;
  const addScore = () => playerScore++;

  const setToken = (newToken) => {
    playerToken = newToken;
  };
  const tokenID = () => playerToken;

  const setName = (newName) => {
    playerName = newName;
  };
  const nameIs = () => playerName;

  return { setName, nameIs, setToken, tokenID, addScore, scoreIs };
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
  const dropToken = (gridX, gridY) => {
    isCellOccupied()
      ? (gridStateArray[gridX][gridY] = /**PLAYER VAL*/ player.tokenID())
      : console.error("Pick an unoccupied cell");
  };

  return { gridStateArray, resetGrid, dropToken };
})();

playerInfo.addEventListener("submit", function (e) {
  e.preventDefault();
  let playerOne = player();
  let playerOneName = document.getElementById("playerOneName");
  
  playerOne.setName(e.target.elements.playerNameInput.value);
  playerOneName.textContent = `P1: ${playerOne.nameIs()}`;

  playerOne.setToken(e.target.elements.selectToken.value);

  mainBoard.style.cursor = "pointer";
});

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
