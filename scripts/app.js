let editedPlayer = 0;
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

editPlayer1.addEventListener("click", openPlayerConfig);

editPlayer2.addEventListener("click", openPlayerConfig);

backdrop.addEventListener("click", hideOverlay);

cancelConfig.addEventListener("click", hideOverlay);

submitConfig.addEventListener("click", setPlayerName);

form.addEventListener("submit", savePlayerConfig);
