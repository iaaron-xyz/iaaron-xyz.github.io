const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  }
});

// Set initial theme based on local storage or system preference
if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
} else if (
  !("theme" in localStorage) &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.classList.add("dark");
}
