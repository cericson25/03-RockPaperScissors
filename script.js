const images = document.querySelectorAll(".img");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const scoreSubtext = document.querySelector(".score-subtext");
const computerImg = document.querySelector(".computer-choice");
const playerImg = document.querySelector(".player-choice");
let counter = 1;

images.forEach((img) => {
  //assigns a click event listener to all images in nodelist
  img.addEventListener("click", () => {
    if (
      parseInt(computerScore.textContent) < 5 &&
      parseInt(playerScore.textContent) < 5
    )
      playRound(img.id, computerChoice());
  });
  //calls the playRound function, giving the image id as the playerChoice
});

function computerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
} //decides what the computer's choice is

function playRound(playerChoice, computerChoice) {
  addHistory(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    //Tie
    scoreSubtext.textContent = "You both picked " + playerChoice;
  } else if (
    //Player win
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    scoreSubtext.textContent = playerChoice + " wins against " + computerChoice;
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
    if (parseInt(playerScore.textContent) === 5) {
      scoreSubtext.textContent = "You win! :)";
      scoreSubtext.style.fontSize = "50px";
      scoreSubtext.style.fontFamily = "RobotoBold";
    }
  } else {
    //player lose
    scoreSubtext.textContent = playerChoice + " loses to " + computerChoice;
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
    if (parseInt(computerScore.textContent) === 5) {
      scoreSubtext.textContent = "You lose! :(";
      scoreSubtext.style.fontSize = "50px";
      scoreSubtext.style.fontFamily = "RobotoBold";
    }
  }
  playerImg.src = "./images/" + playerChoice + ".jpg";
  computerImg.src = "./images/" + computerChoice + ".jpg";
} //plays one round and changes the image to correspond with each choice
//if this can be more efficient, the better

function addHistory(playerChoice, computerChoice) {
  const newRound = document.createElement("div");
  const historyContainer = document.createElement("div");

  const roundCounter = document.createElement("p");
  roundCounter.innerText = counter;
  roundCounter.style.fontSize = "25px";
  roundCounter.style.fontFamily = "RobotoBold";
  roundCounter.style.color = "#505050";
  //creates round counter

  const playerHistoryImg = document.createElement("img");
  playerHistoryImg.src = "./images/" + playerChoice + ".jpg";
  const playerHistoryText = document.createElement("p");
  playerHistoryText.innerText = "Player:";
  historyContainer.appendChild(playerHistoryText);
  historyContainer.appendChild(playerHistoryImg);
  //creates and appends player history elements to the history container

  const computerHistoryImg = document.createElement("img");
  computerHistoryImg.src = "./images/" + computerChoice + ".jpg";
  const computerHistoryText = document.createElement("p");
  computerHistoryText.innerText = "Computer:";
  historyContainer.appendChild(computerHistoryText);
  historyContainer.appendChild(computerHistoryImg);
  //creates and appends computer history elements to the history container

  historyContainer.style.fontFamily = "Roboto";
  historyContainer.style.color = "#505050";

  newRound.appendChild(roundCounter);
  newRound.appendChild(historyContainer);
  newRound.style.border = "2px solid #505050";
  newRound.style.padding = "10px";
  newRound.style.borderRadius = "25px";
  //appends content to the round container

  document.querySelector(".history").appendChild(newRound);
  counter += 1;
}
