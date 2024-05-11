/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author:   Sheldon Skaggs
  Date:     5/10/2024
  Filename: script.js
*/

"use strict";

// Create an array of 20 movie objects
// Information gathered from imdb.com
const movies = [
  {
    title: "Ferris Bueller's Day Off",
    director: "John Hughes",
    releaseYear: 1986,
    synopsis: "A popular high school student, admired by his peers, decides to take a day off from school and goes to extreme lengths to pull it off, to the chagrin of his Dean, who'll do anything to stop him."
  },
  {
    title: "WarGames",
    director: "John Badham",
    releaseYear: 1983,
    synopsis: "A young man finds a back door into a military central computer in which reality is confused with game-playing, possibly starting World War III."
  },
  {
    title: "Them!",
    director: "Gordon Douglas",
    releaseYear: 1954,
    synopsis: "The earliest atomic tests in New Mexico cause common ants to mutate into giant man-eating monsters that threaten civilization."
  },
  {
    title: "The Thing from Another World",
    director: "Christian Nyby and Howard Hawks",
    releaseYear: 1951,
    synopsis: "Scientists and American Air Force officials fend off a bloodthirsty alien organism while at a remote arctic outpost."
  },
  {
    title: "The Thing",
    director: "John Carpenter",
    releaseYear: 1982,
    synopsis: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims."
  },
  {
    title: "The War of the Worlds",
    director: "Byron Haskin",
    releaseYear: 1953,
    synopsis: "A small town in California is attacked by Martians, beginning a worldwide invasion."
  },
  {
    title: "Blade Runner",
    director: "Ridley Scott",
    releaseYear: 1982,
    synopsis: "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator."
  },
  {
    title: "Blade Runner 2049",
    director: "Denis Villeneuve",
    releaseYear: 2017,
    synopsis: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years."
  },
  {
    title: "Escape from New York",
    director: "John Carpenter",
    releaseYear: 1981,
    synopsis: "In 1997, when the U.S. president crashes into Manhattan, now a giant maximum security prison, a convicted bank robber is sent in to rescue him."
  },
  {
    title: "Superman",
    director: "Richard Donner",
    releaseYear: 1978,
    synopsis: "An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home's first and greatest superhero."
  },
  {
    title: "Superman II",
    director: "Richard Lester",
    releaseYear: 1980,
    synopsis: "Superman agrees to sacrifice his powers to start a relationship with Lois Lane, unaware that three Kryptonian criminals he inadvertently released are conquering Earth."
  },
  {
    title: "Superman III",
    director: "Richard Lester",
    releaseYear: 1983,
    synopsis: "Synthetic kryptonite laced with tar splits Superman in two: good Clark Kent and bad Man of Steel."
  },
  {
    title: "Batman",
    director: "Tim Burton",
    releaseYear: 1989,
    synopsis: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
  },
  {
    title: "Batman Returns",
    director: "Tim Burton",
    releaseYear: 1992,
    synopsis: "While Batman deals with a deformed man calling himself the Penguin wreaking havoc across Gotham with the help of a cruel businessman, a female employee of the latter becomes the Catwoman with her own vendetta."
  },
  {
    title: "Caddyshack",
    director: "Harold Ramis",
    releaseYear: 1980,
    synopsis: "An exclusive golf course has to deal with a flatulent new member and a destructive dancing gopher."
  },
  {
    title: "Back to School",
    director: "Alan Metter",
    releaseYear: 1986,
    synopsis: "To help his discouraged son get through college, a funloving and obnoxious rich businessman decides to enter the school as a student himself."
  },
  {
    title: "The Princess Bride",
    director: "Rob Reiner",
    releaseYear: 1987,
    synopsis: "A bedridden boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love."
  },
  {
    title: "For Your Eyes Only",
    director: "John Glen",
    releaseYear: 1981,
    synopsis: "Secret service agent James Bond is assigned to find a missing British vessel equipped with a weapons encryption device and prevent it from falling into enemy hands."
  },
  {
    title: "Octopussy",
    director: "John Glen",
    releaseYear: 1983,
    synopsis: "A fake Faberge egg recovered from the body of a fellow agent leads James Bond to uncover a jewel smuggling operation led by the mysterious Octopussy, and a plot to blow up a NATO air base."
  },
  {
    title: "A View to a Kill",
    director: "John Glen",
    releaseYear: 1981,
    synopsis: "The recovery of a microchip from the body of a fellow British secret agent leads James Bond to a mad industrialist scheming to cause massive destruction."
  }
];

// Add event listener to the submit button to validate the title-input
document.getElementById("btnSearch").addEventListener("click", validateTitle);

// Clear displays for new search
function resetDisplays() {
  document.getElementById("movie-title").textContent = "";
  document.getElementById("movie-director").textContent = "";
  document.getElementById("movie-year").textContent = "";
  document.getElementById("movie-synopsis").textContent = "";
  document.getElementById("error-message").textContent = "";

  document.getElementById("error-message").style.display = "none";
  document.getElementById("movie-info").style.display = "none";
}

// Function to validate the title-input
function validateTitle() {
  let inputTitle = document.getElementById("title-input");
  if(inputTitle.validity.valueMissing) {
    inputTitle.setCustomValidity("Please enter a movie title.");
  } else {
    inputTitle.setCustomValidity("");
  }
}

// Returns a Promise to return a movie object or an error message
function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    // Delay response for simulation
    setTimeout(() => {
      let movieIndex = movies.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase());
      if(movieIndex >= 0) {
        resolve(movies[movieIndex]);
      } else {
        reject(`The movie "${title}" was not found.`);
      }
    }, 2000);
  });
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Prevent default Submit action
  event.preventDefault();

  // Clear displays
  resetDisplays();

  // Call fetchMovie and handle resolve/reject
  try {
    let searchTitle = document.getElementById("title-input").value;
    let movie = await fetchMovie(searchTitle);
    document.getElementById("movie-info").style.display = "block";
    document.getElementById("movie-title").textContent = movie.title;
    document.getElementById("movie-director").textContent = movie.director;
    document.getElementById("movie-year").textContent = movie.releaseYear;
    document.getElementById("movie-synopsis").textContent = movie.synopsis;
  } catch(err) {
    document.getElementById("error-message").style.display = "block";
    document.getElementById("error-message").textContent = err;
  }
});