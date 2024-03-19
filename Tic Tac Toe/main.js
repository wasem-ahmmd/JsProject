let allCell = document.querySelectorAll(".cell");
let ScoreX = document.getElementById("scoreX");
let NewGame = document.getElementById("newGame");
console.log(NewGame);
let currentPlayer = "X";

let GameArr = Array(9).fill(null);
console.log(GameArr);

const GernaterScore = () => {
  if (currentPlayer === "X") {
    ScoreX.innerText = currentPlayer.length;
  }
 
};

const CheckWiner = (thishandel) => {
  let round = false;
  if (
    (GameArr[0] !== null &&
      GameArr[0] == GameArr[1] &&
      GameArr[1] == GameArr[2]) ||
    (GameArr[3] !== null &&
      GameArr[3] == GameArr[4] &&
      GameArr[4] == GameArr[5]) ||
    (GameArr[6] !== null &&
      GameArr[6] == GameArr[7] &&
      GameArr[7] == GameArr[8]) ||
    (GameArr[0] !== null &&
      GameArr[0] == GameArr[3] &&
      GameArr[3] == GameArr[6]) ||
    (GameArr[1] !== null &&
      GameArr[1] == GameArr[4] &&
      GameArr[4] == GameArr[7]) ||
    (GameArr[2] !== null &&
      GameArr[2] == GameArr[5] &&
      GameArr[5] == GameArr[8]) ||
    (GameArr[0] !== null &&
      GameArr[0] == GameArr[4] &&
      GameArr[4] == GameArr[8]) ||
    (GameArr[2] !== null &&
      GameArr[2] == GameArr[4] &&
      GameArr[4] == GameArr[6])
  ) {
  }
};

allCell?.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    const id = Number(index);
    if (GameArr[id] !== null) return;
    GameArr[id] = currentPlayer;
    item.innerText = currentPlayer;

    CheckWiner();
    currentPlayer = currentPlayer === "X" ? "0" : "X";
    console.log(GameArr);
  });
});

NewGame.addEventListener("click", () => {
  GameArr = Array(9).fill(null);
  currentPlayer = "X";
  allCell.forEach((item, index) => {
    item.innerText = "";
  });
});
