/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author:   Sheldon Skaggs
  Date:     5/4/2024
  Filename: script.js
*/

"use strict";

// Set readout header
let readoutStatus = document.getElementById("readoutStatus");
readoutStatus.innerText = "Contacting Superheros";

// Hide superHeroReadout
let superHeroReadout = document.getElementById("superHeroReadout");
superHeroReadout.style.display = "none";

// Array of superhero objects
let heroes = [
  {
    name: 'Superman',
    superpower: 'Super Strength',
    weakness: 'Kryptonite',
    city: 'Metropolis'
  },
  {
    name: 'Batman',
    superpower: 'Intellect and Wealth',
    weakness: 'No Superhuman Abilities',
    city: 'Gotham'
  },
  {
    name: 'Black Canary',
    superpower: 'Canary Cry',
    weakness: 'Normal Human Weaknesses',
    city: 'Gotham'
  }
];

// Function to randomize resolve/reject
function isResolved() {
  // Get a number from 1 to 10;
  let randomNumber = Math.floor((Math.random() * 10) + 1);

  // If the number is less than or equal to 8 then return true
  return randomNumber <= 8;
}

// Fetch Superman's Information
function fetchHero1() {
  return new Promise ((resolve, reject) => {
    if(isResolved()) {
      setTimeout(() => {
        resolve(`
          <b>Name:</b> ${heroes[0].name}<br />
          <b>Superpower:</b> ${heroes[0].superpower}<br />
          <b>Weakness:</b> ${heroes[0].weakness}<br />
          <b>City:</b> ${heroes[0].city}
        `);
      }, 4500);
    } else {
      reject(`${heroes[0].name} cannot be found!`);
    }
  });
}

// Fetch Batman's Information
function fetchHero2() {
  return new Promise ((resolve, reject) => {
    if(isResolved()) {
      setTimeout(() => {
        resolve(`
          <b>Name:</b> ${heroes[1].name}<br />
          <b>Superpower:</b> ${heroes[1].superpower}<br />
          <b>Weakness:</b> ${heroes[1].weakness}<br />
          <b>City:</b> ${heroes[1].city}
        `);
      }, 2000);
    } else {
      reject(`${heroes[1].name} cannot be found!`);
    }
  });
}

// Fetch Black Canary's Information
function fetchHero3() {
  return new Promise ((resolve, reject) => {
    if(isResolved()) {
      setTimeout(() => {
        resolve(`
          <b>Name:</b> ${heroes[2].name}<br />
          <b>Superpower:</b> ${heroes[2].superpower}<br />
          <b>Weakness:</b> ${heroes[2].weakness}<br />
          <b>City:</b> ${heroes[2].city}
        `);
      }, 3500);
    } else {
      reject(`${heroes[2].name} cannot be found!`);
    }
  });
}

// Using Promise.allSettled to fetch all heroes and update the webpage
Promise.allSettled([fetchHero1(), fetchHero2(), fetchHero3()]).then ((results) => {
  // Set readout status
  readoutStatus.innerText = "Superhero Status";

  // Show the superHeroReadout
  superHeroReadout.style.display = "block";
  for(let i = 0; i < results.length; i++) {
    let sectionNumber = i + 1;
    let heroSection = document.getElementById("hero" + sectionNumber);
    if(results[i].status === "fulfilled") {
      heroSection.innerHTML = results[i].value;
    } else {
      heroSection.innerHTML = `<p class="errorMessage">${results[i].reason}</p>`;
    }
  }
})