"use strict";
const instruction = document.querySelector(".header");
const instructionContent = document.querySelector(".instruction-content");
const instructionBtn = document.querySelector(".instruction-button");
const overLay = document.querySelector(".overlay");
const body = document.querySelector("body");
const digit = document.querySelectorAll(".digit");
const startBtn = document.querySelector(".restart-box");
const holdBtn = document.querySelector(".hold-btn");
const activePlayer1 = document.querySelector(".active-1");
const activePlayer2 = document.querySelector(".active-2");
const rollBtn = document.querySelector(".roll-box");
const diceImg = document.querySelector(".dice-img");
const diceNumber = document.querySelector(".dice-number");
const digit_0 = document.querySelector(".digit-0");
const digit_1 = document.querySelector(".digit-1");
const score_0 = document.querySelector(".score-0");
const score_1 = document.querySelector(".score-1");
const set_score = document.querySelector(".set-score");
diceImg.style.visibility = "hidden";
// // scores
// digitOne1.textContent = "0";
// digitTwo.textContent = "0";
// // current-scores
digit_0.textContent = 0;
// digitOne.textContent = "0";

window.addEventListener("load", function () {
  resetScore();
});

function open(pov) {
  pov.classList.add("visible");
  overLay.classList.add("visible");
}
function cancel(pov) {
  instructionContent.classList.remove("visible");
  overLay.classList.remove("visible");
  body.classList.remove("visible");
}
let scores, currentScore, activePlayer, playing;

//assign values to the variables
scores = [0, 0];
currentScore = 0;
activePlayer = 0;
playing = true;

instruction.addEventListener("click", function () {
  open(instructionContent);
});
instructionBtn.addEventListener("click", function () {
  cancel(instructionContent);
});
overLay.addEventListener("click", function () {
  cancel(instructionContent);
});

//dice roll
rollBtn.addEventListener("click", function () {
  if (playing === true) {
    //generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //display the dice
    diceImg.style.visibility = "visible";
    diceNumber.src = `./img/dice-${dice}.jpg`;

    //check if dice value is 1
    if (dice !== 1) {
      //add the dice value to current score
      currentScore += dice;
      console.log(currentScore, "current score");
      document.querySelector(`.digit-${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      switchPlayer();

      // change current score to zero
      currentScore = 0;
    }
  }
});

// switching players
const switchPlayer = function () {
  //change the textcontent of the currentScore to 0
  document.querySelector(`.digit-${activePlayer}`).textContent = 0;

  //switch the active player
  activePlayer = activePlayer === 0 ? 1 : 0;

  //switch the active player dot
  activePlayer1.classList.toggle("dot");
  activePlayer2.classList.toggle("dot");
};

//hold button
holdBtn.addEventListener("click", function () {
  if (playing === true) {
    // add current score to the total score
    scores[activePlayer] += currentScore;

    //display the scores
    document.querySelector(`.score-${activePlayer}`).textContent =
      scores[activePlayer];

    //reset current score
    currentScore = 0;

    // check for winner
    if (scores[activePlayer] >= set_score.value) {
      document.querySelector(`.player-${activePlayer}-box`).textContent =
        "WINNER";
      document
        .querySelector(`.player-${activePlayer}-box`)
        .classList.add("winner-animation");

      playing = false;
    } else {
      //switch active player
      switchPlayer();
    }
  }
});

function resetScore() {
  for (let x = 0; x < digit.length; x++) {
    digit[x].textContent = 0;
  }
  // switch the activeplayer to player-1
  activePlayer = 0;

  // add the active dot to player-1
  activePlayer1.classList.add("dot");
  activePlayer2.classList.remove("dot");
  // make the dice invisible when new game is clicked
  diceImg.style.visibility = "hidden";
}

startBtn.addEventListener("click", resetScore);
