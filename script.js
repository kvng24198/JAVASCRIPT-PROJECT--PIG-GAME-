"use strict";
const instruction = document.querySelector(".header");
const instructionContent = document.querySelector(".instruction-content");
const instructionBtn = document.querySelector(".instruction-button");
const overLay = document.querySelector(".overlay");
// function open(){
//     instructionContent.
// }

instruction.addEventListener("click", function () {
  instructionContent.classList.add("visible");
  overLay.classList.add("result");
});
instructionBtn.addEventListener("click", function () {
  instructionContent.classList.remove("visible ");
});
