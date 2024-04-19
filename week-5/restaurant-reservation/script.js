"use strict";
/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Sheldon Skaggs
  Date: 4/19/2024
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  {tableNumber: 1, tableCapacity: 2, isReserved: false},
  {tableNumber: 2, tableCapacity: 2, isReserved: false},
  {tableNumber: 3, tableCapacity: 2, isReserved: false},
  {tableNumber: 4, tableCapacity: 4, isReserved: false},
  {tableNumber: 5, tableCapacity: 4, isReserved: false},
  {tableNumber: 6, tableCapacity: 4, isReserved: false},
  {tableNumber: 7, tableCapacity: 4, isReserved: false},
  {tableNumber: 8, tableCapacity: 4, isReserved: false},
  {tableNumber: 9, tableCapacity: 4, isReserved: false},
  {tableNumber: 10, tableCapacity: 6, isReserved: false},
  {tableNumber: 11, tableCapacity: 6, isReserved: false},
  {tableNumber: 12, tableCapacity: 8, isReserved: false}
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Find the index of the table object in the array for the given tableNumber
  let tableIndex = tables.findIndex((table) => table.tableNumber == tableNumber);

  if(!tables[tableIndex].isReserved) {
    tables[tableIndex].isReserved = true;

    // Delay successful callback
    setTimeout(() => {
      callback(`Table ${tableNumber} has been reserved for ${document.getElementById("name").value}.`)
    }, time);
  } else {
    // Immediate callback that table is not available
    callback(`Table ${tableNumber} is not available.`);
  }
}

// Validate the reservation's name with custom validity message
function validateName() {
  let reservationName = document.getElementById("name");
  if(reservationName.validity.valueMissing) {
    reservationName.setCustomValidity("Please provide a name for the reservation");
  } else {
    reservationName.setCustomValidity("");
  }
}

// Validate the table with a custom validity message
function validateTable() {
  let tableInput = document.getElementById("tableNumber");
  if(tableInput.validity.valueMissing || tableInput.validity.rangeOverflow || tableInput.validity.rangeUnderflow) {
    tableInput.setCustomValidity("Please select a table from 1 to 12");
  } else {
    tableInput.setCustomValidity("");
  }
}

// Remove any custom validity message for a field that is being edited
function removeCustomValidity(inputId) {
  document.getElementById(inputId).setCustomValidity("");
}

// Clear the current message
function clearMessage() {
  message.innerHTML = "";
  message.style.display = "none";
}

// Add event listeners for custom validation
document.getElementById("submitButton").addEventListener("click", validateName);
document.getElementById("submitButton").addEventListener("click", validateTable);

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    clearMessage();
    reserveTable(tableNumber.value, (reservationMessage) => {
      message.style.display = "block";
      if(reservationMessage.includes("reserved for")) {
        message.style.border = "solid 2px green";
      } else {
        message.style.border = "solid 2px red";
      }
      message.innerHTML = reservationMessage;}, 4000);
  });
