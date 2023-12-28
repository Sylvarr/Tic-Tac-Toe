/**
 * Manages the tic-tac-toe game, handles game logic, user interactions, and determines the winner.
 *
 * Example Usage:
 * gameMatrix();
 *
 * Inputs: None
 *
 * Flow:
 * 1. Calls the startGame function to set up the initial game state and event listeners for user interactions.
 * 2. Calls the resetGame function to add an event listener to the reset button, allowing the game to be restarted.
 * 3. Calls the checkWinner function to check if there is a winner or a tie after each move.
 * 4. Calls the onClickButton function when a button on the game grid is clicked. It handles the logic for player moves and, if playing against the computer, triggers the computer's move.
 * 5. Calls the gridButtons function to add event listeners to all the buttons on the game grid.
 *
 * Outputs: None. The function manages the game logic and user interactions.
 */
function gameMatrix() {
  let gameState = [null, null, null, null, null, null, null, null, null];
  let computer = false;
  let isPlayerTurn = true;

  function startGame() {
    let playButton = document.querySelector(".play");
    let matrix = document.querySelector(".matrix");
    let playImage = document.querySelector(".game-image");
    let playerChoice = document.querySelector(".player-choice");
    let pvp = document.querySelector(".pvp");
    let pve = document.querySelector(".pve");

    playImage.addEventListener("click", () => {
      playerChoice.classList.add("flex");
      playImage.classList.add("invisible");
    });
    playButton.addEventListener("click", () => {
      playerChoice.classList.add("flex");
      playImage.classList.add("invisible");
    });
    pvp.addEventListener("click", () => {
      matrix.classList.add("visible");
      playerChoice.classList.add("invisible");
    });
    pve.addEventListener("click", () => {
      matrix.classList.add("visible");
      playerChoice.classList.add("invisible");
      computer = true;
    });
  }

  function resetGame() {
    let reset = document.querySelector(".reset");
    reset.addEventListener("click", () => {
      location.reload();
    });
  }

  let announcement = document.querySelector(".announcement");

  function checkWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        gameState[a] !== null &&
        gameState[a] === gameState[b] &&
        gameState[b] === gameState[c]
      ) {
        announcement.classList.add("visible");
        announcement.textContent = `${gameState[a]} is the winner!`;
        return;
      }
    }

    if (gameState.every((value) => value !== null)) {
      announcement.classList.add("visible");
      announcement.textContent = `It's a tie!`;
    }
  }

  function onClickButton(e) {
    let button = e.target;
    if (button.textContent !== "") return;
    if (announcement.classList.contains("visible")) return;
    if (computer === true) {
      if (isPlayerTurn === true) {
        gameState[button.value] = button.textContent = "X";
        checkWinner();
        isPlayerTurn = !isPlayerTurn;
        if (!announcement.classList.contains("visible")) {
          setTimeout(computerPlays, 500);
        }
      }
    } else {
      let symbol = isPlayerTurn ? "X" : "O";
      gameState[button.value] = button.textContent = symbol;
      isPlayerTurn = !isPlayerTurn;
      checkWinner();
    }

    function computerPlays() {
      let random;
      do {
        random = Math.floor(Math.random() * 9);
      } while (gameState[random] !== null);
      const button = document.querySelectorAll(".tic-tac-toe-button");
      gameState[random] = button[random].textContent = "O";
      checkWinner();
      isPlayerTurn = !isPlayerTurn;
    }
  }

  function gridButtons() {
    const buttons = document.querySelectorAll(".tic-tac-toe-button");
    buttons.forEach((button) => {
      button.addEventListener("click", onClickButton);
    });
  }

  startGame();
  resetGame();
  checkWinner();
  gridButtons();
}

gameMatrix();
