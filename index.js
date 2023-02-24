// Converter

// Select elements
const petAgeInput = document.querySelector("#age");
const dogOpt = document.querySelector("#dog");
const catOpt = document.querySelector("#cat");
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
  petAge = petAgeInput.value;
  petType = dogOpt.checked ? "dog" : "cat";
  // call function
  convertAge(petAge, petType);
});

// Convert pet years
function convertAge(age, pet) {
  // Declare a variable for the result
  let humanAge;

  // Check if age isn't below 1
  if (age >= 1) {
    // Check if it's a dog or a cat
    if (pet === "dog") {
      // Source: https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/
      humanAge = Math.round(16 * Math.log(age) + 31);
    } else if (pet === "cat") {
      //code
    }
  }
  console.log(humanAge);
  // Call rendering function
  renderResult(humanAge);
}

function renderResult(age) {
  resultElTitle.textContent = `${petType === "dog" ? "Dog" : "Cat"} age`;
  resultElContent.textContent = `Your ${petAge} year old ${petType} is ${age} in human years!`;
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
