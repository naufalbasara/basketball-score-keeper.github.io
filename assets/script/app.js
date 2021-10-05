// cover image
const cover = document.querySelector(".jumbotron .img");
cover.style.backgroundImage = "url(assets/img/back-url.jpg)";

// function
const checkWin = () => {
  if (parseInt(aScore.innerText) >= scoreTarget.value) {
    aScore.style.color = "green";
    bScore.style.color = "red";
    for (let button of buttons) {
      button.disabled = "true";
    }
    scoreTarget.disabled = "true";
    ball.classList.remove("start");
  } else if (parseInt(bScore.innerText) >= scoreTarget.value) {
    aScore.style.color = "red";
    bScore.style.color = "green";
    for (let button of buttons) {
      button.disabled = "true";
    }
    scoreTarget.disabled = "true";
    ball.classList.remove("start");
  }
};

const plus = (target, score) => {
  if (target.classList.contains("a")) {
    let result = parseInt(aScore.innerText) + score;
    aScore.innerText = result;
  } else {
    let result = parseInt(bScore.innerText) + score;
    bScore.innerText = result;
  }
};

// basketball game start
let gameStart = false;
const scoreTarget = document.querySelector("select"),
  aScore = document.querySelector(".scoreboard .score .aScore"),
  bScore = document.querySelector(".scoreboard .score .bScore"),
  play = document.querySelector(".card .buttons .play"),
  buttons = document.querySelectorAll(".buttons .row button"),
  ball = document.querySelector("main .animation img");

play.addEventListener("click", function () {
  if (!gameStart) {
    // logic
    gameStart = true;
    for (let button of buttons) {
      button.disabled = false;
    }
    scoreTarget.disabled = false;
    ball.classList.add("start");
    scoreTarget.addEventListener("click", checkWin);

    // button styling
    play.innerText = "Reset";
    play.style.backgroundColor = "rgb(231, 231, 95)";
  } else {
    // logic
    gameStart = false;
    aScore.innerText = 0;
    bScore.innerText = 0;

    for (let button of buttons) {
      button.disabled = true;
    }
    scoreTarget.disabled = true;
    ball.classList.remove("start");

    // button styling
    play.innerText = "PLAY";
    aScore.style.color = "black";
    bScore.style.color = "black";
    play.style.backgroundColor = "rgb(32, 248, 78)";
  }
});

for (let button of buttons) {
  button.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("one")) {
      plus(target, 1);
    } else if (target.classList.contains("two")) {
      plus(target, 2);
    } else if (target.classList.contains("three")) {
      plus(target, 3);
    }

    checkWin();
  });
}

// animations
