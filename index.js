// Converter

// Select elements
const petAgeInput = document.querySelector("#age");
const dogOpt = document.querySelector("#dog");
const convertBtn = document.querySelector(".btn-convert");
const resultEl = document.querySelector(".result-container");
const resultElTitle = document.querySelector(".result-title");
const resultElContent = document.querySelector(".result-content");

// Declare variables of user's pet
let petAge;
let petType;

// Add an event listener to trigger the conversion
convertBtn.addEventListener("click", function () {
  // Assign the inputted values
  petAge = Number(petAgeInput.value);
  petType = dogOpt.checked ? "dog" : "cat";
  // call function
  convertAge(petAge, petType);
});

// Convert pet years
function convertAge(age, pet) {
  // Declare a variable for the result
  let humanAge;

  // Check if the age is a number above 0
  if (age > 0) {
    // For ages between 1 and 6 the conversion is the same for both cats and dogs
    if (age === 1) {
      humanAge = 15; // equivalent age of a 15-year-old person
    } else if (age === 2) {
      humanAge = 24; // equivalent age of a 24-year-old person
    } else if (age <= 5) {
      humanAge = 24 + (age - 2) * 4; // age at a rate of four human years
    } else if (age > 5) {
      // Check if it's a dog or a cat
      if (pet === "dog") {
        // Source: https://creatureyearstohumanyears.com/dog-years-to-human-years
        humanAge = 40 + 5 * (age - 6); // age at a rate of five human years after 6 years
      } else if (pet === "cat") {
        // Source: https://www.ajdesigner.com/fl_cat_age/cat_age.php
        if (age <= 14) {
          humanAge = 24 + (age - 2) * 4; // age at a rate of four human years before 14 years
        } else {
          humanAge = 72 + (age - 14) * 2; // age at a rate of two human years after 14 years
        }
      }
    }
  } else {
    alert("Invalid age!");
    return;
  }

  // Call rendering function
  renderResult(humanAge);
}

function renderResult(age) {
  resultElTitle.textContent = `${petType === "dog" ? "Dog" : "Cat"} age`;
  resultElContent.textContent = `Your ${petAge} year old ${petType} is ${age} in human years!`;
  resultEl.style.display = "block";
}

// Dark mode toggle
const btnTheme = document.querySelector(".btn-theme");

// Determine the current theme mode
const savedMode = localStorage.getItem("mode");
const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches // Check user's system preferences for a mode
  ? "dark"
  : "light";
const currentMode = savedMode || systemMode; // Use the saved mode or system mode

// Set the theme mode based on the current mode
document.documentElement.classList.toggle("dark", currentMode === "dark"); // Set the dark class on the root element if current mode is dark

// Set icons appropriately
btnTheme.classList.toggle("fa-sun", currentMode === "light");
btnTheme.classList.toggle("fa-moon", currentMode === "dark");

// Add an event listener to toggle the theme on click
btnTheme.addEventListener("click", function () {
  btnTheme.classList.toggle("triggered"); // Trigger the rotation animation
  const isDarkMode = document.documentElement.classList.toggle("dark"); // Toggle the dark class on the root element and check if the mode is now dark
  localStorage.setItem("mode", isDarkMode ? "dark" : "light"); // Save the current mode in local storage

  // Toggle the icons
  btnTheme.classList.toggle("fa-sun", !isDarkMode);
  btnTheme.classList.toggle("fa-moon", isDarkMode);
});
