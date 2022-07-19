const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");

buttons.forEach((button) => {
  //assigns an event listener to all buttons in nodelist
  button.addEventListener("click", () => {
    container.textContent = button.id;
  });
});

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
} //decides what the computer's choice is

function gameLogic(playerChoice, computerChoice) {
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      return "tie";
    } else if (computerChoice === "paper") {
      return "lose";
    } else {
      return "win";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "win";
    } else if (computerChoice === "paper") {
      return "tie";
    } else {
      return "lose";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      return "lose";
    } else if (computerChoice === "paper") {
      return "win";
    } else {
      return "tie";
    }
  } else {
    return "Invalid Input.";
  }
} //plays one round and outputs "win", "tie", or "lose" based on outcome
