const player = () => {
  let playerName = "";
  let playerToken = "";
  let playerScore = 0;

  const scoreIs = () => playerScore;
  const addScore = () => playerScore++;

  const setToken = (newToken) => {
    playerToken = newToken;
  };
  const tokenIs = () => playerToken;

  const setName = (newName) => {
    playerName = newName;
  }
  const nameIs = () => playerName;


  return { setName, nameIs, setToken, tokenIs , addScore, scoreIs };
};

