let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent;
let score = 20;
let highScore = 0;
const displayMessage = function (meassage) {
  document.querySelector(".message").textContent = meassage;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Empty!🤦‍♂️");
  } else if (guess === secretNumber) {
    displayMessage("Gotcha!🎉");
    document.querySelector("body").style.backgroundColor = "crimson";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!🔺" : "Too Low!🔻");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Better Luck Nxt Time!💫");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...✨");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "❓";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "orange";
  document.querySelector(".number").style.width = "15rem";
});
