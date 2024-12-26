const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");
const game_result = document.querySelector(".game_result");
const restart_btn = document.querySelector(".restart_btn");

let boxes;
let xTurn = true;
let currentCombination;

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];
function checkWinOrNot(currentSelection) {
  console.log(boxes);
  let res = winningCombination.some((combination) => {
    currentCombination = combination;
    return combination.every(
      (item) => boxes[item].innerText === currentSelection
    );
  });
  return res;
}

function isGameDraw() {
  return [...boxes].every((item) => item.innerText != "");
}

function gameOver(type, currentSelection) {
  if (type === "win") {
    game_result.innerText = `${currentSelection} won the Game`;
  } else {
    game_result.innerText = "Match Drawn";
  }
  container.style.pointerEvents = "none";
  restart_btn.style.visibility = "visible";
}
function handleClick(e) {
  const currentBox = e.target;
  if (xTurn) {
    currentBox.innerText = "X";
    xTurn = false;
  } else {
    currentBox.innerText = "O";
    xTurn = true;
  }

  const currentSelection = currentBox.innerText;

  const win = checkWinOrNot(currentSelection);

  if (win) {
    gameOver("win", currentSelection);
  } else if (isGameDraw()) {
    gameOver("draw", currentSelection);
  }
}

function startGame_with_restart(type) {
  let newBox;

  for (let i = 0; i < 9; i++) {
    if (type == "restart") {
      console.log("restart", boxes);
      xTurn = true;
      container.style.pointerEvents = "unset";
      restart_btn.style.visibility = "hidden";
      boxes[i].removeEventListener("click", handleClick);
      boxes[i].innerText = "";
      game_result.innerText = "";
    } else {
      newBox = document.createElement("div");
      newBox.classList.add("box");
      container.appendChild(newBox);
      // newBox.addEventListener("click", handleClick, { once: true });
    }
    (newBox || boxes[i]).addEventListener("click", handleClick, { once: true });
  }
}
function startGame(type) {
  let newBox;
  for (let i = 0; i < 9; i++) {
    newBox = document.createElement("div");
    newBox.classList.add("box");
    container.appendChild(newBox);
    newBox.addEventListener("click", handleClick, { once: true });
  }
}

// restart_btn.addEventListener("click", () => startGame_with_restart("restart"));
// startGame_with_restart("");

restart_btn.addEventListener("click", () => window.location.reload());
startGame("");

boxes = document.querySelectorAll(".box");
console.log(boxes);

console.log([...boxes]);
