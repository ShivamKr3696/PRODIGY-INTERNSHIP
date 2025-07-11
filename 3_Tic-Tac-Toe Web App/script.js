const cells = document.querySelectorAll(".cell");
const turnText = document.getElementById("turn");
const resultText = document.getElementById("result");
const restartBtn = document.getElementById("restart");
const xScoreText = document.getElementById("x-score");
const oScoreText = document.getElementById("o-score");

let currentPlayer = "X";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];
let xScore = 0;
let oScore = 0;

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8], // Rows
  [0,3,6], [1,4,7], [2,5,8], // Columns
  [0,4,8], [2,4,6]           // Diagonals
];

cells.forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});

restartBtn.addEventListener("click", restartGame);

function handleCellClick(e) {
  const index = e.target.getAttribute("data-index");
  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add(currentPlayer.toLowerCase());

  checkWinner();
  switchPlayer();
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  turnText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  let winner = null;

  winPatterns.forEach(pattern => {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
    }
  });

  if (winner) {
    resultText.textContent = `${winner} Won`;
    gameActive = false;

    if (winner === "X") {
      xScore++;
      xScoreText.textContent = xScore;
    } else {
      oScore++;
      oScoreText.textContent = oScore;
    }
    return;
  }

  if (!board.includes("")) {
    resultText.textContent = "It's a Draw!";
    gameActive = false;
  }
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("x", "o");
  });
  resultText.textContent = "";
  currentPlayer = "X";
  gameActive = true;
  turnText.textContent = "X's turn";
}
/* Created By Shivam Kumar...   */