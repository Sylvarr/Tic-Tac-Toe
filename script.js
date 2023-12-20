function gameMatrix() {
  let array = [
    [, ,],
    [, ,],
    [, ,],
  ];

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
      array[0][0] !== undefined &&
      array[0][0] === array[0][1] &&
      array[0][1] === array[0][2]
    ) {
      announcement.classList.add("visible");
    } else if (
      array[1][0] !== undefined &&
      array[1][0] === array[1][1] &&
      array[1][1] === array[1][2]
    ) {
      announcement.classList.add("visible");
    } else if (
      array[2][0] !== undefined &&
      array[2][0] === array[2][1] &&
      array[2][1] === array[2][2]
    ) {
      announcement.classList.add("visible");
    } else if (
      array[0][0] !== undefined &&
      array[0][0] === array[1][0] &&
      array[1][0] === array[2][0]
    ) {
      announcement.classList.add("visible");
    } else if (
      array[0][1] !== undefined &&
      array[0][1] === array[1][1] &&
      array[1][1] === array[2][1]
    ) {
      announcement.classList.add("visible");
    } else if (
      array[0][2] !== undefined &&
      array[0][2] === array[1][2] &&
      array[1][2] === array[2][2]
    ) {
      announcement.classList.add("visible");
    } else if (
      array[0][0] !== undefined &&
      array[0][0] === array[1][1] &&
      array[1][1] === array[2][2]
    ) {
      announcement.classList.add("visible");
    } else if (
      array[0][2] !== undefined &&
      array[0][2] === array[1][1] &&
      array[1][1] === array[2][0]
    ) {
      announcement.classList.add("visible");
    } else {
      return;
    }
  }

  checkWinner();

  function gridButtons() {
    let one = document.getElementById("1");
    let two = document.getElementById("2");
    let three = document.getElementById("3");
    let four = document.getElementById("4");
    let five = document.getElementById("5");
    let six = document.getElementById("6");
    let seven = document.getElementById("7");
    let eight = document.getElementById("8");
    let nine = document.getElementById("9");

    let isPlayerTurn = true;

    one.addEventListener("click", () => {
      if (one.innerHTML !== "") return;

      let symbol = isPlayerTurn ? "X" : "O";
      one.innerHTML = symbol;
      array[0][0] = symbol;
      isPlayerTurn = !isPlayerTurn;
      checkWinner();
    });

    two.addEventListener("click", () => {
      if (two.innerHTML !== "") return;

      let symbol = isPlayerTurn ? "X" : "O";
      two.innerHTML = symbol;
      array[0][1] = symbol;
      isPlayerTurn = !isPlayerTurn;
      checkWinner();
    });

    three.addEventListener("click", () => {
      if (three.innerHTML !== "") return;

      let symbol = isPlayerTurn ? "X" : "O";
      three.innerHTML = symbol;
      array[0][2] = symbol;
      isPlayerTurn = !isPlayerTurn;
      checkWinner();
    });

    four.addEventListener("click", () => {
      if (four.innerHTML !== "") return;
      let symbol = isPlayerTurn ? "X" : "O";
      four.innerHTML = symbol;
      array[1][0] = symbol;
      isPlayerTurn = !isPlayerTurn;
      checkWinner();
    });

    five.addEventListener("click", () => {
      if (five.innerHTML !== "") return;
      let symbol = isPlayerTurn ? "X" : "O";
      five.innerHTML = symbol;
      array[1][1] = symbol;
      isPlayerTurn = !isPlayerTurn;
      checkWinner();
    });

    six.addEventListener("click", () => {
      if (six.innerHTML !== "") return;
      let symbol = isPlayerTurn ? "X" : "O";
      six.innerHTML = symbol;
      array[1][2] = symbol;
      isPlayerTurn = !isPlayerTurn;
      checkWinner();
    });

    seven.addEventListener("click", () => {
      if (seven.innerHTML !== "") return;
      let symbol = isPlayerTurn ? "X" : "O";
      seven.innerHTML = symbol;
      array[2][0] = symbol;
      isPlayerTurn = !isPlayerTurn;
      checkWinner();
    });

    eight.addEventListener("click", () => {
      if (eight.innerHTML !== "") return;
      let symbol = isPlayerTurn ? "X" : "O";
      eight.innerHTML = symbol;
      array[2][1] = symbol;
      isPlayerTurn = !isPlayerTurn;
      checkWinner();
    });

    nine.addEventListener("click", () => {
      if (nine.innerHTML !== "") return;
      let symbol = isPlayerTurn ? "X" : "O";
      nine.innerHTML = symbol;
      array[2][2] = symbol;
      isPlayerTurn = !isPlayerTurn;
      checkWinner();
    });

    return array;
  }

  gridButtons();
}

gameMatrix();
