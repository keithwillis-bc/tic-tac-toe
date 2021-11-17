let editedPlayer = 0;
let activePlayer = 0;
let round = 1;

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

const editPlayer1 = document.getElementById("edit-player-1-btn");
const editPlayer2 = document.getElementById("edit-player-2-btn");
const overlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const playerName = document.getElementById("player-name");
const submitConfig = document.getElementById("submit-config-btn");
const cancelConfig = document.getElementById("cancel-config-btn");
const form = document.querySelector("form");
const configError = document.getElementById("config-errors");
const startGame = document.getElementById("start-game-btn");
const activeGame = document.getElementById("active-game");
const gameBoard = document.getElementById("game-board");
const activePlayerName = document.getElementById("active-player-name");
const gameOver = document.getElementById("game-over");
const winnerName = document.getElementById("winner-name");

editPlayer1.addEventListener("click", openPlayerConfig);

editPlayer2.addEventListener("click", openPlayerConfig);

backdrop.addEventListener("click", hideOverlay);

cancelConfig.addEventListener("click", hideOverlay);

form.addEventListener("submit", savePlayerConfig);

startGame.addEventListener("click", startNewGame);

for (let li of gameBoard.children) {
  li.addEventListener("click", boardItemClicked);
}
