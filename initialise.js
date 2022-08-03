var themeButton = document.querySelector("footer button");
var themeButtonText = document.querySelector("footer button strong");
var themeButtonIcon = document.querySelector("footer button img");

// Allow the user to toggle dark mode (won't persist beyond refresh)
themeButton.style.display = "inline-flex";
themeButton.addEventListener("click", function() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeButtonText.innerText = "Switch to light mode";
    themeButtonIcon.src = "icons/sun-solid.svg";
  } else {
    themeButtonText.innerText = "Switch to dark mode";
    themeButtonIcon.src = "icons/moon-solid.svg";
  }
});
