"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Sheldon Skaggs
      Date:   5/15/2024

      Filename: project12-03.js
*/

// Run after the page is loaded and ready
$(() => {
  // Add click event to article > h2 elements
  $("article > h2").click(e => {
    // Create a reference to the h2 element
    let heading = $(e.target);
    // Create a reference to the list element after the header
    let list = $(heading.next());
    // Create a reference to the heading's child images
    let headingImage = $(heading).children("img");

    // Hide or show the list
    $(list).slideToggle(500);

    // Adjust heading image and alt text
    if($(headingImage).attr("src") === "plus.png") {
      $(headingImage).attr("src", "minus.png").attr("alt", "minus");
    } else {
      $(headingImage).attr("src", "plus.png").attr("alt", "plus");
    }
  });
})

