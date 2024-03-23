"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Sheldon Skaggs
      Date:   3/23/2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
/* Constructor for timer object */
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// Add runPause method to timer prototype
timer.prototype.runPause = function(timer, minBox, secBox) {
  if(timer.timeID) {
    // Stop timer
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    // Run timer
    timer.timeID = window.setInterval(countDown, 1000);
  }

  // Function to count down the time
  function countDown() {
    if(timer.seconds > 0) {
      // Decrease seconds by 1
      timer.seconds -= 1;
    } else if(timer.minutes > 0) {
      // Decrease minutes by 1 and set seconds to 59
      timer.minutes -= 1;
      timer.seconds = 59;
    } else {
      // At 0, stop timer
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    }

    // Display time
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }
}



/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// Create new instance of timer
let myTimer = new timer(minBox.value, secBox.value);

// Add onchange handler for minBox
minBox.onchange = function() {
  myTimer.minutes = minBox.value;
}

// Add onchange handler for secBox
secBox.onchange = function() {
  myTimer.seconds = secBox.value;
}

// Add onclick handler for the runPauseButton button
runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
}