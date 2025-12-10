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

// --- STATE MUTATION ---
function applyRoundResult(result) {
  state.roundNumber += 1;
  if (result === "player") state.playerScore += 1;
  if (result === "computer") state.computerScore += 1;

  if (state.playerScore >= WIN_SCORE || state.computerScore >= WIN_SCORE) {
    state.gameOver = true;
  }
}

// --- RENDERING ---
function updateScores() {
  elements.playerScore.textContent = `Player: ${state.playerScore}`;
  elements.computerScore.textContent = `Computer: ${state.computerScore}`;
}

function render({ playerSelection = "", computerSelection = "", result = "" } = {}) {
  elements.roundNumber.textContent =
    state.roundNumber > 0 ? `Round ${state.roundNumber}` : "Round";

  elements.playerChoice.textContent = playerSelection
    ? `Player chose: ${playerSelection}`
    : "";

  elements.computerChoice.textContent = computerSelection
    ? `Computer chose: ${computerSelection}`
    : "";

  if (!result) {
    elements.outcome.textContent = "";
  } else if (state.gameOver && state.playerScore >= WIN_SCORE) {
    elements.outcome.textContent = "🎉 You win the whole game!";
  } else if (state.gameOver && state.computerScore >= WIN_SCORE) {
    elements.outcome.textContent = "💀 Computer wins the game!";
  } else if (result === "tie") {
    elements.outcome.textContent = "It's a tie!";
  } else if (result === "player") {
    elements.outcome.textContent = "You win this round!";
  } else {
    elements.outcome.textContent = "Computer wins this round!";
  }

  if (state.gameOver) {
  disableButtons();
} else {
  enableButtons();
}

  updateScores();
}

// --- CONTROLLER ---
function playRound(playerSelection) {
  if (state.gameOver) return;
  const computerSelection = getComputerChoice();
  const result = getRoundResult(playerSelection, computerSelection);
  applyRoundResult(result);
  render({ playerSelection, computerSelection, result });
}

// --- RESET / CONTROLS ---
function resetGame() {
  state = { playerScore: 0, computerScore: 0, roundNumber: 0, gameOver: false };
  enableButtons();
  render();
}

function disableButtons() {
  elements.buttons.forEach(({ el }) => el && (el.disabled = true));
}

function enableButtons() {
  elements.buttons.forEach(({ el }) => el && (el.disabled = false));
}



// --- EVENTS ---
elements.buttons.forEach(({ choice, el }) => {
  if (!el) return;
  el.addEventListener("click", () => playRound(choice));
});

elements.reset.addEventListener("click", resetGame);