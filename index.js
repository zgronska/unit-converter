const mode = window.localStorage.getItem("mode");

// localStorage.setItem("mode", "light");

if (mode == "dark") {
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");
}

if (mode == "light") {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
}
