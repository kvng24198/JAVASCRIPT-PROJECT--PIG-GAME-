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
const digitZero = document.querySelector(".digit-0");
const digitOne = document.querySelector(".digit-1");
const digitOne1 = document.querySelector(".digit-one1");
const digitTwo = document.querySelector(".digit-two");
diceImg.style.visibility = "hidden";
// // scores
// digitOne1.textContent = "0";
// digitTwo.textContent = "0";
// // current-scores
// digitZero.textContent = "0";
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
    digitZero.textContent = currentScore;
  } else {
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
  switchPlayer();
});

function resetScore() {
  for (let x = 0; x < digit.length; x++) {
    digit[x].textContent = 0;
  }
}

startBtn.addEventListener("click", resetScore);
