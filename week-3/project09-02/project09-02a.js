"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Sheldon Skaggs
      Date:   4/3/2024

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

// Add onclick event for submit button
document.getElementById("submitButton").onclick = function() {
    showData();
};

// showData function to set seesion storage objects and load project09-02b.html
function showData() {
  sessionStorage.setItem("riderName", riderName.value);
  sessionStorage.setItem("ageGroup", ageGroup.value);
  sessionStorage.setItem("bikeOption", bikeOption.value);
  sessionStorage.setItem("routeOption", routeOption.value);
  sessionStorage.setItem("accOption", accOption.value);
  sessionStorage.setItem("region", region.value);
  sessionStorage.setItem("miles", miles.value);
  sessionStorage.setItem("comments", comments.value);

  location.href = "project09-02b.html";
}