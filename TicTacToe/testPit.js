const player = () => {
  let playerName = "";
  let playerToken = "";
  let playerScore = 0;

  const getScore = () => playerScore;
  const addScore = () => playerScore++;

  return { playerName, playerToken, addScore, getScore };
};

let player1 = player();
player1.playerName = "John";
console.log(player1);
player1.addScore();
console.log(player1.playerScore)
