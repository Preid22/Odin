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

let x = player();

x.setName("John");

console.log(x.nameIs());
