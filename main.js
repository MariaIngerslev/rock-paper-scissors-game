// --- CONFIG ---
const WIN_SCORE = 5;
const CHOICES = ["rock", "paper", "scissors"];

// --- STATE ---
let state = {
  playerScore: 0,
  computerScore: 0,
  roundNumber: 0,
  gameOver: false
};

// --- DOM CACHE ---
const elements = {
  buttons: CHOICES.map((choice) => ({
    choice,
    el: document.querySelector(`.${choice}-button`)
  })),
  playerChoice: document.querySelector(".player-choice"),
  computerChoice: document.querySelector(".computer-choice"),
  outcome: document.querySelector(".outcome"),
  roundNumber: document.querySelector(".round-number"),
  playerScore: document.querySelector(".player-score"),
  computerScore: document.querySelector(".computer-score"),
  reset: document.querySelector(".reset")
};

// --- PURE LOGIC ---
function getComputerChoice() {
  const index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}

function getRoundResult(player, computer) {
  if (player === computer) return "tie";
  const playerWins =
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper");
  return playerWins ? "player" : "computer";
}

// --- CHECK FOR GAME WINNER --- //
function checkWinner() {
    if (playerScore === WIN_SCORE) {
        outcomeDiv.textContent = "🎉 You win the whole game!";
        gameOver = true;
    } else if (computerScore === WIN_SCORE) {
        outcomeDiv.textContent = "💀 Computer wins the game!";
        gameOver = true;
    }
}

// --- RESET GAME --- //
resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    gameOver = false;

    playerScoreDiv.textContent = "Player: 0";
    computerScoreDiv.textContent = "Computer: 0";
    roundDiv.textContent = ``;
    playerChoiceDiv.textContent = "";
    computerChoiceDiv.textContent = "";
    outcomeDiv.textContent = "";
});

// --- BUTTON EVENTS --- //
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));