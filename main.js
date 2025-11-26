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

function getHumanChoice() {
    let usersInput = prompt("Enter rock, paper, or scissors");
    return usersInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log ("It's a tie! Both chose " + humanChoice);
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log ("You win! Rock beats Scissors");
            ++humanScore;
        } else {
            console.log ("You lose! Paper beats Rock");
            ++computerScore; 
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            ++humanScore;
        }
        else {
            console.log("You lose! Scissors beats Paper");
            ++computerScore;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            ++humanScore;
        } else {
            console.log("You lose! Rock beats Scissors");
            ++computerScore;
        }
    } else {
        console.log("Invalid choice! Please choose rock, paper, or scissors.");
    }
}

    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game ends in a tie!");
    }
}