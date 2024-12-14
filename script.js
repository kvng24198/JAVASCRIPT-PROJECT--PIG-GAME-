"use strict";
const instruction = document.querySelector(".header");
const instructionContent = document.querySelector(".instrution-content");
const instructionBtn = document.querySelector("instruction-botton");

// function open(){
//     instructionContent.
// }

instruction.addEventListener("click", function () {
  instructionContent.classList.add("visible");
});
