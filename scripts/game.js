function clearGame() {
  // loop through all of the li and clear the text and classes
  for (let li of gameBoard.children) {
    li.textContent = "";
    li.classList.remove("disabled");
    gameOver.style.display = "none";
  }
}

function showGameBoard() {
  clearGame();
  if (players[0].name === "" || players[1].name === "") {
    alert("please set custom player names for both players");
    return;
  }

  activeGame.style.display = "block";
}

function hideGameBoard() {
  activeGame.style.display = "none";
}

function startNewGame() {
  showGameBoard();
  activePlayer = 0;
  round = 1;
  activePlayerName.textContent = players[activePlayer].name;
}

function boardItemClicked(event) {
  if (event.target.textContent === "" && gameOver.style.display == "none") {
    event.target.classList.add("disabled");
    event.target.textContent = players[activePlayer].symbol;

    checkForWinner();

    activePlayer = (activePlayer + 1) % 2;
    activePlayerName.textContent = players[activePlayer].name;
    round++;
  }
}

function checkForWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let i of winningCombinations) {
    if (
      gameBoard.children[i[0]].textContent ==
        gameBoard.children[i[1]].textContent &&
      gameBoard.children[i[1]].textContent ==
        gameBoard.children[i[2]].textContent &&
      gameBoard.children[i[0]].textContent != ""
    ) {
      //We have a winner
      winnerName.textContent = players[activePlayer].name;
      gameOver.style.display = "block";
      return;
    }
  }

  if (round == 9) {
    //Draw
  }
}
