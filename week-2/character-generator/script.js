/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Sheldon Skaggs
  Date: 3/27/2024
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // Private properties
  let charName = name;
  let charGender = gender;
  let charClass = characterClass;

  // Return character object
  return {
    // Methods to access private properties
    getName: function() {
      return charName;
    },
    getGender: function() {
      return charGender;
    },
    getClass: function() {
      return charClass;
    },
    // Method for character greeting
    greeting: function(targetName) {
      return `Greetings ${targetName}! I am ${charName} the ${charClass}!`;
    },
    // Method to get character data
    getDataAsHTML: function() {
      return `
      <p>Name: ${charName}</p>
      <p>Class: ${charClass}</p>
      <p>Gender: ${charGender}</p>`;
    }
  };
}

function validateForm() {
  let isValid = true;
  let errorMessages = "";

  // Validate the form
  if(document.getElementById("heroName").value === "") {
    errorMessages += "Provide a name your hero<br />";
    isValid = false;
  }
  if(document.getElementById("heroGender").value === "") {
    errorMessages += "Select a gender for your hero<br />";
    isValid = false;
  }
  if(document.getElementById("heroClass").value === "") {
    errorMessages += "Select a class for your hero";
    isValid = false;
  }

  if(!isValid) {
    // Display error message
    let characterOutput = document.getElementById("characterOutput");
    characterOutput.className = "invalidForm";
    characterOutput.innerHTML = "<h2>Missing Input</h2><p>Please correct the following errors:</p>" + errorMessages;
  }

  return isValid;
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();
  let characterOutput = document.getElementById("characterOutput");
  if(validateForm()) {
    // Get form values
    let hName = document.getElementById("heroName").value;
    let hGender = document.getElementById("heroGender").value;
    let hClass = document.getElementById("heroClass").value;

    // Create character
    let newCharacter = createCharacter(hName, hGender, hClass);

    // Display character information
    characterOutput.className = "characterReadout";
    characterOutput.innerHTML = `<p>${newCharacter.greeting("User")}</p>${newCharacter.getDataAsHTML()}`;
  }
});