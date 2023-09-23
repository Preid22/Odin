// true: player won, false: CPU won

function Game(playerChoice, cpuChoice) {
  function playRoshambo(p, c) {
    if (p === c) {
      return "Draw!";
    } else if (p === "Rock") {
      if (c === "Paper") {
        return false;
      } else if (c === "Scissors") {
        return true;
      }
    } else if (p === "Paper") {
      if (c === "Rock") {
        return true;
      } else if (c === "Scissors") {
        return false;
      }
    } else if (p === "Scissors") {
      if (c === "Rock") {
        return false;
      } else if (c === "Paper") {
        return true;
      }
    }
  }

  let result = playRoshambo(playerChoice, cpuChoice);



  if (result === true) {
    playerScore++;
    displayPlayerScore.textContent = `Player: ${playerScore}`;
    winnerBox.textContent = `You Win! Player chose ${playerChoice}, CPU chose ${cpuChoice}`;
  } else if (result === false) {
    computerScore++;
    displayComputerScore.textContent = `CPU: ${computerScore}`;
    winnerBox.textContent = `You Lose! Player chose ${playerChoice}, CPU chose ${cpuChoice}`;
  } else if (result === "Draw!") {
    winnerBox.textContent = "Draw!";
  }
  round += 1;
  displayRound.textContent = `Round: ${round}`;

  if (round === 10 && playerScore > computerScore) {
    winnerBox.textContent = "Game Over! You Won!";
    playerScore = 0;
    computerScore = 0;
    round = 1;
  } else if (round === 10 && computerScore > playerScore) {
    winnerBox.textContent = "Game Over! You Lost!";
    playerScore = 0;
    computerScore = 0;
    round = 1;
  } else if (round === 10 && computerScore === playerScore) {
    winnerBox.textContent = "Game Over! Tie Game!";
    playerScore = 0;
    computerScore = 0;
    round = 1;
  };
}

let round = 1;
let playerScore = 0;
let computerScore = 0;

let computerChoice = function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  console.log(randomChoice);
  return choices[randomChoice];
};

const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", () => {
  Game("Rock", computerChoice());
});

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", () => {
  Game("Paper", computerChoice());
});

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", () => {
  Game("Scissors", computerChoice());
});

const winnerBox = document.querySelector(".winnerBox");

const displayPlayerScore = document.querySelector(".playerScore");
const displayComputerScore = document.querySelector(".cpuScore");
const displayRound = document.querySelector(".round");
