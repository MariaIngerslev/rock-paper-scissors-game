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

FUNCTION PLAYGAME

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    function playRound() {
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

    FOR 5 TIMES 
        SET humanChoice TO getHumanChoice()
        SET computerChoice TO getComputerChoice()
        CALL playRound(humanChoice, computerChoice)
    END FOR

    IF humanScore > computerScore THEN
        LOG "You win the game!"
    ELSE IF computerScore > humanScore THEN
        LOG "You lose the game!"
    ELSE THEN
        LOG "The game ends in a tie!"

END FUNCTION  