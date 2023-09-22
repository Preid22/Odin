function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function playRock(playerChoice, getComputerChoice) {
  const computerChoice = getComputerChoice();
  console.log(playerChoice)
  if (playerChoice === computerChoice) {
    return "Draw!";
  } else if (playerChoice === "Rock") {
    if (computerChoice === "Paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerChoice === "Scissors") {
      return "You Win! Rock beats Scissors";
    }
  }
}

function playRoshambo(playerChoice, getComputerChoice) {
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    return "Draw!";
  } else if (playerChoice === "Rock") {
    if (computerChoice === "Paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerChoice === "Scissors") {
      return "You Win! Rock beats Scissors";
    }
  } else if (playerChoice === "Paper") {
    if (computerChoice === "Rock") {
      return "You Win! Paper beats Rock";
    } else if (computerChoice === "Scissors") {
      return "You Lose! Scissors beats Paper";
    }
  } else if (playerChoice === "Scissors") {
    if (computerChoice === "Rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerChoice === "Paper") {
      return "You Win! Scissors beats Paper";
    }
  }
}

function Game(playerChoice) {
  let playerScore = 0;
  let computerScore = 0;

  //let playerChoice = prompt("Make your choice!");

  let result = playRoshambo(playerChoice, getComputerChoice);

  if (
    (result === "You Win! Rock beats Scissors") |
    (result === "You Win! Paper beats Rock") |
    (result === "You Win! Scissors beats Paper")
  ) {
    playerScore++;
    console.log(`${result}! Player: ${playerScore}, CPU: ${+computerScore}`);
  } else if (
    (result === "You Lose! Paper beats Rock") |
    (result === "You Lose! Scissors beats Paper") |
    (result === "You Lose! Rock beats Scissors")
  ) {
    computerScore++;
    console.log(`${result}! Player: ${playerScore}, CPU: ${+computerScore}`);
  } else if (result === "Draw!") {
    console.log("Draw!");
  }

  //if (round === 5) {
  let winner = Math.max(playerScore, computerScore);
  if (winner === playerScore) {
    return "You win! The score is " + playerScore + " to " + computerScore;
  } else if (winner === computerScore) {
    return "You lose! The score is " + computerScore + " to " + playerScore;
  }
}
// };

const rockButton = document.querySelector(".rock");
rockButton.addEventListener('click', () => {
  console.log(Game("Rock", getComputerChoice))
});

const paperButton = document.querySelector(".paper");
paperButton.onclick = () => console.log(playRoshambo("Paper", getComputerChoice));

const scissorsButton = document.querySelector(".scissors");
scissorsButton.onclick = () => console.log(playRoshambo("Scissors", getComputerChoice));


