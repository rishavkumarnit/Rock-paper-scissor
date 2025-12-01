const rulesBtn = document.querySelector(".rules-button");
const closeBtn = document.querySelector(".close-btn");
const rulesBox = document.querySelector(".rules-box");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const player1img = document.querySelector(".player1-img");
const player2img = document.querySelector(".player2-img");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const choices = ["rock", "paper", "scissors"];
const gameBoard = document.querySelector(".game-board");
const gameresult = document.querySelector(".game-result");
const scoreUser = document.querySelector(".score-user");
const scoreComputer = document.querySelector(".score-computer");
const winText = document.querySelector(".win-text");
const tieText = document.querySelector(".tie-text");
const youWin = document.querySelector(".youwin");
const youLost = document.querySelector(".youlost");
const playAgain = document.querySelector(".play-again");
const nextButton = document.querySelector(".next-button");
const hurray = document.querySelector(".hurray");
const scoreSection = document.querySelector(".scoresection");
let scores = JSON.parse(localStorage.getItem("score")) || { u: 0, c: 0 };
let rulesOpen = false;

refresh = () => {
  scores = JSON.parse(localStorage.getItem("score"));
  if (!scores) {
    scores = { u: 0, c: 0 };
    localStorage.setItem("score", JSON.stringify(scores));
  }
  scoreUser.textContent = scores.u;
  scoreComputer.textContent = scores.c;
};
refresh();

const playRandom = () => {
  return Math.floor(Math.random() * 3);
};

const setplayer1 = (num) => {
  switch (num) {
    case 0: {
      player1img.style.height = "58px";
      player1img.style.width = "80px";
      player1img.src = "./assets/rock.png";
      player1.style.borderColor = "#0074b6";
      break;
    }
    case 1: {
      player1img.style.height = "72px";
      player1img.style.width = "72px";
      player1img.src = "./assets/paper.png";
      player1.style.borderColor = "#ffa943";
      break;
    }
    case 2: {
      player1img.style.height = "54px";
      player1img.style.width = "37px";
      player1img.src = "./assets/scissor.png";
      player1.style.borderColor = "#bd00ff";
      break;
    }
    default: {
      break;
    }
  }
};

const setplayer2 = (num) => {
  switch (num) {
    case 0: {
      player2img.style.height = "58px";
      player2img.style.width = "80px";
      player2img.src = "./assets/rock.png";
      player2.style.borderColor = "#0074b6";
      break;
    }
    case 1: {
      player2img.style.height = "72px";
      player2img.style.width = "72px";
      player2img.src = "./assets/paper.png";
      player2.style.borderColor = "#ffa943";
      break;
    }
    case 2: {
      player2img.style.height = "54px";
      player2img.style.width = "37px";
      player2img.src = "./assets/scissor.png";
      player2.style.borderColor = "#bd00ff";
      break;
    }
    default: {
      break;
    }
  }
};

const updateResult = (playResult) => {
  switch (playResult) {
    case "player": {
      scores.u += 1;
      localStorage.setItem("score", JSON.stringify(scores));
      scoreUser.textContent = scores.u;
      winText.style.display = "block";
      youWin.style.display = "block";
      youLost.style.display = "none";
      player1.classList.add("glow-effect");
      player2.classList.remove("glow-effect");
      nextButton.style.display = "flex";
      rulesBtn.style.display = "flex";
      rulesBtn.style.right = "175px";
      break;
    }
    case "pc": {
      scores.c += 1;
      localStorage.setItem("score", JSON.stringify(scores));
      scoreComputer.textContent = scores.c;
      winText.style.display = "block";
      youWin.style.display = "none";
      youLost.style.display = "block";
      player2.classList.add("glow-effect");
      player1.classList.remove("glow-effect");
      nextButton.style.display = "none";
      rulesBtn.style.display = "flex";
      break;
    }
    case "draw": {
      tieText.style.display = "block";
      break;
    }
    default: {
      break;
    }
  }
  gameBoard.style.display = "none";
  gameresult.style.display = "block";
  playAgain.style.display = "flex";
};

function checkWinner(player, pc) {
  if (player === pc) {
    return "draw";
  }

  if (
    (player === 0 && pc === 2) ||
    (player === 1 && pc === 0) ||
    (player === 2 && pc === 1)
  ) {
    return "player";
  }

  return "pc";
}

rulesBtn.addEventListener("click", () => {
  if (rulesOpen) {
    rulesOpen = !rulesOpen;
    rulesBox.style.display = "none";
    closeBtn.style.display = "none";
  } else {
    rulesOpen = !rulesOpen;
    rulesBox.style.display = "flex";
    closeBtn.style.display = "block";
  }
});
closeBtn.addEventListener("click", () => {
  if (rulesOpen) {
    rulesOpen = !rulesOpen;
    rulesBox.style.display = "none";
    closeBtn.style.display = "none";
  }
});

rock.addEventListener("click", () => {
  const pcPlay = playRandom();
  const playResult = checkWinner(0, pcPlay);
  setplayer1(0);
  setplayer2(pcPlay);
  updateResult(playResult);
});
paper.addEventListener("click", () => {
  const pcPlay = playRandom();
  const playResult = checkWinner(1, pcPlay);
  setplayer1(1);
  setplayer2(pcPlay);
  updateResult(playResult);
});
scissor.addEventListener("click", () => {
  const pcPlay = playRandom();
  const playResult = checkWinner(2, pcPlay);
  setplayer1(2);
  setplayer2(pcPlay);
  updateResult(playResult);
});

nextButton.addEventListener("click", () => {
  hurray.style.display = "flex";
  scoreSection.style.display = "none";
  playAgain.style.top = "639px";
  gameBoard.style.display = "none";
  gameresult.style.display = "none";
  winText.style.display = "none";
  rulesBtn.style.right = "20px";
  nextButton.style.display = "none";
});
