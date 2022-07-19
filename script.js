const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const scoreSubtext = document.querySelector(".score-subtext");

buttons.forEach((button) => {
  //assigns an event listener to all buttons in nodelist
  button.addEventListener("click", () => {
    gameLogic(button.id, computerChoice());
  });
  //calls the gameLogic function, giving the button id as the playerChoice
});

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
} //decides what the computer's choice is

function gameLogic(playerChoice, computerChoice) {
  if (
    //checks to see if either player has won 5 points
    parseInt(computerScore.textContent) < 5 &&
    parseInt(playerScore.textContent) < 5
  ) {
    if (playerChoice === "rock") {
      if (computerChoice === "rock") {
        scoreSubtext.textContent = "You both picked Rock";
      } else if (computerChoice === "paper") {
        scoreSubtext.textContent = "Rock loses to Paper";
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        if (parseInt(computerScore.textContent) === 5) {
          scoreSubtext.textContent = "You lose! :(";
        }
      } else {
        scoreSubtext.textContent = "Rock beats Scissors";
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        if (parseInt(playerScore.textContent) === 5) {
          scoreSubtext.textContent = "You win! :)";
        }
      }
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        scoreSubtext.textContent = "Paper beats Rock";
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        if (parseInt(playerScore.textContent) === 5) {
          scoreSubtext.textContent = "You win! :)";
        }
      } else if (computerChoice === "paper") {
        scoreSubtext.textContent = "You both picked Paper";
      } else {
        scoreSubtext.textContent = "Paper loses to Scissors";
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        if (parseInt(computerScore.textContent) === 5) {
          scoreSubtext.textContent = "You lose! :(";
        }
      }
    } else if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        scoreSubtext.textContent = "Scissors loses to Rock";
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        if (parseInt(computerScore.textContent) === 5) {
          scoreSubtext.textContent = "You lose! :(";
        }
      } else if (computerChoice === "paper") {
        scoreSubtext.textContent = "Scissors Beats Paper";
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        if (parseInt(playerScore.textContent) === 5) {
          scoreSubtext.textContent = "You win! :)";
        }
      } else {
        scoreSubtext.textContent = "You both picked Scissors";
      }
    }
  }
} //plays one round
