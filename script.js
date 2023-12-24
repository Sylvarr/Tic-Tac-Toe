function gameMatrix() {
  let array = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];

  function startGame() {
    let playButton = document.querySelector(".play");
    let matrix = document.querySelector(".matrix");
    playButton.addEventListener("click", () => {
      matrix.classList.add("visible");
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
    if (
      array[0] !== undefined &&
      array[0] === array[1] &&
      array[1] === array[2]
    ) {
      announcement.classList.add("visible");
      announcement.innerHTML = `${array[0]} is the winner!`;
    } else if (
      array[3] !== undefined &&
      array[3] === array[4] &&
      array[4] === array[5]
    ) {
      announcement.classList.add("visible");
      announcement.innerHTML = `${array[3]} is the winner!`;
    } else if (
      array[6] !== undefined &&
      array[6] === array[7] &&
      array[7] === array[8]
    ) {
      announcement.classList.add("visible");
      announcement.innerHTML = `${array[6]} is the winner!`;
    } else if (
      array[0] !== undefined &&
      array[0] === array[3] &&
      array[3] === array[6]
    ) {
      announcement.classList.add("visible");
      announcement.innerHTML = `${array[0]} is the winner!`;
    } else if (
      array[1] !== undefined &&
      array[1] === array[4] &&
      array[4] === array[7]
    ) {
      announcement.classList.add("visible");
      announcement.innerHTML = `${array[1]} is the winner!`;
    } else if (
      array[2] !== undefined &&
      array[2] === array[5] &&
      array[5] === array[8]
    ) {
      announcement.classList.add("visible");
      announcement.innerHTML = `${array[2]} is the winner!`;
    } else if (
      array[0] !== undefined &&
      array[0] === array[4] &&
      array[4] === array[8]
    ) {
      announcement.classList.add("visible");
      announcement.innerHTML = `${array[0]} is the winner!`;
    } else if (
      array[2] !== undefined &&
      array[2] === array[4] &&
      array[4] === array[6]
    ) {
      announcement.classList.add("visible");
      announcement.innerHTML = `${array[2]} is the winner!`;
    } else {
      return;
    }
  }

  checkWinner();
  let isPlayerTurn = true;

  function onClickButton(e) {
    let button = e.target;
    if (button.innerHTML !== "") return;
    if (announcement.classList.contains("visible")) return;
    let symbol = isPlayerTurn ? "X" : "O";
    array[button.value] = button.innerHTML = symbol;
    isPlayerTurn = !isPlayerTurn;
    checkWinner();
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
