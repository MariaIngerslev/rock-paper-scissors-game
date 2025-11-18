function getComputerChoice () {
    let randomNumber = Math.random();
    SET randomChoice TO FLOOR(randomNumber * 3)

    IF randomChoice = 0 THEN
        RETURN "rock"
    ELSE IF randomChoice = 1 THEN
        RETURN "paper"
    ELSE
        RETURN "scissors"
    END IF 
}
