"use strict";

let promiseOutput = document.getElementById("promiseOutput");

let preOrderGame = new Promise((resolve, reject) => {
  let gameIsReleased = true;
  if(gameIsReleased) {
    resolve("Game is released, start playing!");
  } else {
    reject("Game is not released, get a refund.");
  }
});

preOrderGame.then((message) => {
  promiseOutput.textContent = message;
})