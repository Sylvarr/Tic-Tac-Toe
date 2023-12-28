function gameMatrix() {
  let array = [null, null, null, null, null, null, null, null, null];
  let computer = false;

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

  startGame();

  function resetGame() {
    let reset = document.querySelector(".reset");
    reset.addEventListener("click", () => {
      location.reload();
    });
  }
  resetGame();

  let announcement = document.querySelector(".announcement");

  function checkWinner() {
    if (array[0] !== null && array[0] === array[1] && array[1] === array[2]) {
      announcement.classList.add("visible");
      announcement.textContent = `${array[0]} is the winner!`;
    } else if (
      array[3] !== null &&
      array[3] === array[4] &&
      array[4] === array[5]
    ) {
      announcement.classList.add("visible");
      announcement.textContent = `${array[3]} is the winner!`;
    } else if (
      array[6] !== null &&
      array[6] === array[7] &&
      array[7] === array[8]
    ) {
      announcement.classList.add("visible");
      announcement.textContent = `${array[6]} is the winner!`;
    } else if (
      array[0] !== null &&
      array[0] === array[3] &&
      array[3] === array[6]
    ) {
      announcement.classList.add("visible");
      announcement.textContent = `${array[0]} is the winner!`;
    } else if (
      array[1] !== null &&
      array[1] === array[4] &&
      array[4] === array[7]
    ) {
      announcement.classList.add("visible");
      announcement.textContent = `${array[1]} is the winner!`;
    } else if (
      array[2] !== null &&
      array[2] === array[5] &&
      array[5] === array[8]
    ) {
      announcement.classList.add("visible");
      announcement.textContent = `${array[2]} is the winner!`;
    } else if (
      array[0] !== null &&
      array[0] === array[4] &&
      array[4] === array[8]
    ) {
      announcement.classList.add("visible");
      announcement.textContent = `${array[0]} is the winner!`;
    } else if (
      array[2] !== null &&
      array[2] === array[4] &&
      array[4] === array[6]
    ) {
      announcement.classList.add("visible");
      announcement.textContent = `${array[2]} is the winner!`;
    } else if (array.every((value) => value !== null)) {
      announcement.classList.add("visible");
      announcement.textContent = `It's a tie!`;
    } else {
      return;
    }
  }

  checkWinner();
  let isPlayerTurn = true;

  function onClickButton(e) {
    let button = e.target;

    if (button.textContent !== "") return;
    if (announcement.classList.contains("visible")) return;
    if (computer === true) {
      array[button.value] = button.textContent = "X";
      checkWinner();
      if (!announcement.classList.contains("visible")) {
        setTimeout(computerPlays, 500);
      }
      checkWinner();
    } else {
      let symbol = isPlayerTurn ? "X" : "O";
      array[button.value] = button.textContent = symbol;
      isPlayerTurn = !isPlayerTurn;
      checkWinner();
    }

    function computerPlays() {
      let random;
      do {
        random = Math.floor(Math.random() * 9);
      } while (array[random] !== null);
      const button = document.querySelectorAll(".tic-tac-toe-button");
      array[random] = button[random].textContent = "O";
      checkWinner();
    }
  }

  function gridButtons() {
    const buttons = document.querySelectorAll(".tic-tac-toe-button");
    buttons.forEach((button) => {
      button.addEventListener("click", onClickButton);
    });
  }

  gridButtons();
}

gameMatrix();
