function clearOverlayForm() {
  playerName.value = "";
  configError.textContent = "";
  form.firstElementChild.classList.remove("error");
}

function showOverlay() {
  backdrop.style.display = "block";
  overlay.style.display = "block";
}

function hideOverlay() {
  clearOverlayForm();
  backdrop.style.display = "none";
  overlay.style.display = "none";
}

function setPlayerName() {}

function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  //clear the form
  clearOverlayForm();
  //show the overlay
  showOverlay();
}

function savePlayerConfig(event) {
  event.preventDefault(); //prevent the browser default form submit
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("player-name").trim();
  const player = document.querySelector("#player-" + editedPlayer + "-data h3");

  if (!enteredPlayerName) {
    configError.textContent = "Please Enter a Valid Name.";
    event.target.firstElementChild.classList.add("error");
    return;
  } else {
    event.target.firstElementChild.classList.remove("error");
    player.textContent = enteredPlayerName;
    players[editedPlayer - 1].name = enteredPlayerName;
  }

  hideOverlay();
}
