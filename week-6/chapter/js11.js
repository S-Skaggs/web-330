"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Chapter Case

   Author:   Sheldon Skaggs
   Date:     4/25/2024

   Filename: js11.js


*/

window.addEventListener("load", init);

function init() {
   // Page Objects
   let stories = document.getElementById("stories");
   let news = document.getElementById("news");
   let sInput = document.getElementById("sInput");
   let sButton = document.getElementById("sButton");
   let suggestBox = document.getElementById("suggestBox");

   // Create a request object
   const xhr = new XMLHttpRequest();

   // Handle the changing request state
   xhr.onreadystatechange = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
         // Manage the response
         stories.innerHTML = xhr.responseText;
      } else {
         console.log("Request failed: " + xhr.statusText);
      }
   }

   // Open the request and send it
   xhr.open("get", "commentary.html");
   xhr.send(null);

   // Retrieve archived articles from the web server
   sButton.onclick = () => {
      fetch("archives.pl?skey=" + encodeURIComponent(sInput.value))
      .then ( response => {
         if (response.ok) {
            return response.text;
         } else {
            return "Unable to retrieve commentary";
         }
      })
      .then ( comtext => stories.innerHTML = comtext )
      .then (() => {
        let topic = sInput.value.toLowerCase();
        getGif(topic);
      })
      .catch (stories.innerHTML = "Network Failure");
   }

   // Fetch current headlines from teh web server
   fetch("headlines.xml")
   .then (response => response.text())
   .then (str => new DOMParser().parseFromString(str, "text/xml"))

   // Write the XML content to HTML
   .then (dom => {
      let items = dom.querySelectorAll("item");
      // Loop through each story item
      for (let story of items) {
         // Write the story content and append it ot the page
         let headline = story.children[0].textContent;
         let link = story.children[1].textContent;
         let summary = story.children[2].textContent;
         let htmlCode = `<article><h2><a href="${link}">${headline}</a></h2><p>${summary}</p></article>`;
         news.insertAdjacentHTML("beforeend", htmlCode);
      }
   });

   // Suggest keywords as text is entered in the search box
   sInput.onkeyup = () => {
    if(sInput.value === "") {
      suggestBox.style.display = "none";
    } else {
      // Retrieve a list of matching keywords
      fetch("keywords.pl?suggest=" + encodeURIComponent(sInput.value))
      .then (response => response.json())

      // Build the suggestion box
      .then (keywords => {
        suggestBox.innerHTML = "";

        if (keywords.matches.length === 0) {
          // No suggestions to display
          suggestBox.style.display = "none";
        } else {
          // Display suggestions
          suggestBox.style.display = "block";

          // Create a list of suggestions
          for (let word of keywords.matches) {
            let suggestion = document.createElement("div");
            suggestion.textContent = word;
            suggestBox.appendChild(suggestion);

            // Add suggestion to search box when clicked
            suggestion.onclick = () => {
              sInput.value = word;
              suggestBox.style.display = "none";
              sButton.click();
            }
          }
        }
      })
    }
   }

}

// Fetch a gif for a given topic from Giphy.com
function gitGif (topic) {
  const url = "https://api.giphy.com/v1/gifs/random";
  const key = "KEY_REDACTED";
  fetch(`${url}?api_key=${key}&tag=${topic}&limit=1&rating=pg`)
  .then(response => response.json())
  .then(obj => {
    let newImg = document.createElement("img");
    newImg.src = object.data.images.fixed_height.url;
    stories.appendChild(newImg)
  })
}