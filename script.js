var originalBoard;
const HumanPlayer = "0";
const BotPlayer = "X";
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelector(".cell");
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none";
  originalBoard = Array.from(Array(9).keys());
  console.log(originalBoard);
}
