function getComputerChoice () {
    let randomNumber = Math.random();
    let randomChoice = Math.floor(randomNumber * 3);

    IF randomChoice = 0 THEN
        RETURN "rock"
    ELSE IF randomChoice = 1 THEN
        RETURN "paper"
    ELSE
        RETURN "scissors"
    END IF 
}
