FUNCTION getComputerChoice
    SET randomNumber TO random number between 0 and 1
    SET randomChoice TO FLOOR(randomNumber * 3)

    IF randomChoice = 0 THEN
        RETURN "rock"
    ELSE IF randomChoice = 1 THEN
        RETURN "paper"
    ELSE
        RETURN "scissors"
    END IF 
    
END FUNCTION
