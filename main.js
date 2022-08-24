let playerWins = 0;
let computerWins = 0;

const buttonClicked = document.querySelectorAll("button");
buttonClicked.forEach(buttonClicked => {
  buttonClicked.addEventListener("click", (e) => {
    let playerSelection = e.target.className;
    let computerSelection = computerPlay()
    playRound(playerSelection, computerSelection);
    if ((playerWins === 5) || (computerWins === 5)) {
      finalScore();
    }
  });
});

function computerPlay() {
  const rpsChoice = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    return rpsChoice[randomNumber];
}

function playRound(playerSelection, computerPlay) {
  let gameLogger = document.querySelector(".gameLogger");
  if (playerSelection === "rock" && computerPlay === "scissors") {
    playerWins++;
    gameLogger.textContent = "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerPlay === "rock") {
    playerWins++;
    gameLogger.textContent = "You Win! Paper beats Rock!";
  } else if (playerSelection === "scissors" && computerPlay === "paper") {
    playerWins++;
    gameLogger.textContent = "You Win! Scissors beats Paper!";
  } else if (computerPlay === "scissors" && playerSelection === "paper") {
    computerWins++;
    gameLogger.textContent = "You Lose! Scissors beats Paper!";
  } else if (computerPlay === "paper" && playerSelection === "rock") {
    computerWins++;
    gameLogger.textContent = "You Lose! Paper beats Rock!";
  } else if (computerPlay === "rock" && playerSelection === "scissors") {
    computerWins++;
    gameLogger.textContent = "You Lose! Rock beats Scissors";
  } else {
    gameLogger.textContent = "Its a Draw!";
  }
  gameKeeper();
}

function finalScore() {
  let gameWinner = document.querySelector(".gameWinner");
  if (playerWins > computerWins) {
    gameWinner.textContent = "You Win!";
    disableButtons();
  } else if (playerWins < computerWins) {
    gameWinner.textContent = "Computer Wins!";
    disableButtons();
  } else if (playerWins === computerWins) {
    gameWinner.textContent = "It's a Tie!";
    disableButtons();
  }
}

function disableButtons() {
  buttonClicked.forEach(buttonClicked => {
    buttonClicked.disabled = true;
  });
}

function gameKeeper() {
  let userScoreNumber = document.querySelector(".userScoreNumber");
  let computerScoreNumber = document.querySelector(".computerScoreNumber");
  userScoreNumber.textContent = `${playerWins}`;
  computerScoreNumber.textContent = `${computerWins}`;
}
