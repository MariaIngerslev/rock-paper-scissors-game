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
    return usersInput;
}

let humanScore = 0;
let computerScore = 0;

FUNCTION playRound(humanChoice, computerChoice)

    SET humanChoice TO LOWERCASE(getHumanChoice())
    SET computerChoice TO getComputerChoice()

    IF humanChoice EQUALS computerChoice THEN
        PRINT "It's a tie! Both chose " + humanChoice

    ELSE IF humanChoice EQUALS "rock" THEN
        IF computerChoice EQUALS "scissors" THEN
            PRINT "You win! Rock beats Scissors"
            INCREMENT humanScore
        ELSE
            PRINT "You lose! Paper beats Rock"
            INCREMENT computerScore

    ElSE IF humanChoice EQUALS "paper" THEN
        IF computerChoice EQUALS "rock" THEN
            PRINT "You win! Paper beats Rock"
            INCREMENT humanScore
        ELSE
            PRINT "You lose! Scissors beats Paper"
            INCREMENT computerScore

    ELSE IF humanChoice EQUALS "scissors" THEN
        IF computerChoice EQUALS "paper" THEN
            PRINT "You win! Scissors beats Paper"
            INCREMENT humanScore
        ELSE
            PRINT "You lose! Rock beats Scissors"
            INCREMENT computerScore
    ELSE
        PRINT "Invalid choice! Please choose rock, paper, or scissors."
    END IF
END FUNCTION