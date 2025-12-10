// --- CONFIG ---
const WIN_SCORE = 5;
const CHOICES = ["rock", "paper", "scissors"];

// --- SELECT DOM ELEMENTS --- //
const rockBtn = document.querySelector(".rock-button");
const paperBtn = document.querySelector(".paper-button");
const scissorsBtn = document.querySelector(".scissors-button");

const playerChoiceDiv = document.querySelector(".player-choice");
const computerChoiceDiv = document.querySelector(".computer-choice");
const outcomeDiv = document.querySelector(".outcome");
const roundDiv = document.querySelector(".roundX");

const playerScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computer-score");

const resetBtn = document.querySelector(".reset");

// --- GAME VARIABLES --- //
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let gameOver = false;

// --- COMPUTER CHOICE --- //
function getComputerChoice () {
    let randomNumber = Math.random();
    let randomChoice = Math.floor(randomNumber * 3);

    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// --- PLAY ONE ROUND --- //
function playRound(playerSelection) {
    if (gameOver) return;

    const computerSelection = getComputerChoice();
    roundNumber++;

 // Update choices in DOM
    playerChoiceDiv.textContent = `Player chose: ${playerSelection}`;
    computerChoiceDiv.textContent = `Computer chose: ${computerSelection}`;
    roundDiv.textContent = `Round ${roundNumber}`;


     // Determine winner
    if (playerSelection === computerSelection) {
        outcomeDiv.textContent = "It's a tie!";
    } 
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        outcomeDiv.textContent = "You win this round!";
        playerScore++;
    } 
    else {
        outcomeDiv.textContent = "Computer wins this round!";
        computerScore++;
    }

    // Update score display
    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;

    checkWinner();
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