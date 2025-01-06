// Get the checkbox element
const themeToggle = document.getElementById("theme-toggle");

// Add the click event listener
themeToggle.addEventListener("click", function () {
  // Check if the checkbox is checked
  if (themeToggle.checked) {
    // If checked, apply dark mode
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    // If unchecked, apply light mode
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
});
