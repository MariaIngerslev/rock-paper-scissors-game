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
