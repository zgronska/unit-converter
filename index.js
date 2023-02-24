// Dark mode toggle
const btnTheme = document.querySelector(".btn-theme");

// Determine the current theme mode
const savedMode = localStorage.getItem("mode");
const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches // Check user's system preferences for a mode
  ? "dark"
  : "light";
const currentMode = savedMode || systemMode; // Use the saved mode or system mode, defaulting to light mode

// Set the theme mode based on the current mode
document.documentElement.classList.toggle("dark", currentMode === "dark"); // Set the dark class on the root element if current mode is dark
// Set icons appropriately
btnTheme.classList.toggle("fa-sun", currentMode === "light");
btnTheme.classList.toggle("fa-moon", currentMode === "dark");

// Add an event listener to toggle the theme on click
btnTheme.addEventListener("click", function () {
  btnTheme.classList.toggle("triggered"); // Toggle the rotation animation on the toggle button
  const isDarkMode = document.documentElement.classList.toggle("dark"); // Toggle the dark class on the root element and check if the mode is now dark
  localStorage.setItem("mode", isDarkMode ? "dark" : "light"); // Save the current mode in local storage
  // Toggle the icons
  btnTheme.classList.toggle("fa-sun", !isDarkMode);
  btnTheme.classList.toggle("fa-moon", isDarkMode);
});
