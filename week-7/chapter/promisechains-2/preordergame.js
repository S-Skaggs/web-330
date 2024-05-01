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
  let postMessage = document.createElement("p");
  postMessage.innerText = message;
  promiseOutput.appendChild(postMessage);
  return "Invite friend over to play together.";
})
.then((message) => {
  let postMessage = document.createElement("p");
  postMessage.innerText = message;
  promiseOutput.appendChild(postMessage);
  //throw new Error("Oh no, something broke!");
  return "Post a review online.";
})
.then((message) => {
  let postMessage = document.createElement("p");
  postMessage.innerText = message;
  promiseOutput.appendChild(postMessage);
})
.catch((message) => {
  let postMessage = document.createElement("p");
  postMessage.innerText = message;
  promiseOutput.appendChild(postMessage);
});