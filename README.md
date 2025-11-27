# Rock–Paper–Scissors Game

This project is a simple Rock–Paper–Scissors game implemented in JavaScript and run in the browser console. The game prompts the user for their choice, generates a random computer choice, and plays a five-round match to determine the final winner.

## About This Project

This project is part of The Odin Project Foundations Course. It was created to practice fundamental JavaScript concepts such as functions, conditionals, loops, user input, and browser scripting without using the DOM.

## Project Structure
```bash
/rock–paper–scissor-game
│── index.html
│── main.js
│── README.md
```

## How to Run the Game

1. Download or clone the repository.
2. Open `index.html` in any modern web browser.
3. Open the browser console:
   - Windows: Ctrl + Shift + J (Chrome) or F12
   - Mac: Cmd + Option + J
4. The game starts automatically when the page loads.
5. When prompted, type **rock**, **paper**, or **scissors**.

## How the Game Works

- The game runs for five rounds.
- Each round:
  - You choose via a prompt.
  - The computer randomly selects rock, paper, or scissors.
  - The result is displayed in the console.
- After five rounds, the script declares the final result:
  - "You win the game!"
  - "You lose the game!"
  - "The game ends in a tie!"

## Code Overview

### getComputerChoice()
Returns a random choice of "rock", "paper", or "scissors".

### getHumanChoice()
Prompts the user to enter a choice and returns it in lowercase.

### playRound()
Plays a single round, logs the result, and updates the scores.

### playGame()
Runs five rounds and prints the final match result.

## Technologies Used

- JavaScript
- HTML5

## Future Improvements

- Replace prompt() with buttons and a graphical UI.
- Display results on the webpage instead of the console.
- Add styling, animations, or sound effects.
- Make the game replayable without refreshing the page.
