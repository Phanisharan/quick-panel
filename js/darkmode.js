// Dark Mode Toggle + Persistence
function switchOn(buttonElement) {
  const iconText = buttonElement.querySelector("i")?.textContent.trim();

  if (iconText === "brightness_4") {
    // Toggle dark mode
    document.querySelector(".middle")?.classList.toggle("dark-mode");
    document.querySelector(".top")?.classList.toggle("dark-mode");
    document.querySelector(".bottom")?.classList.toggle("dark-mode");
    document.querySelector(".main-container")?.classList.toggle("dark-mode");
    document.querySelector(".inner-container")?.classList.toggle("dark-mode");

    // Toggle button active state
    buttonElement.classList.toggle("active");

    // Save dark mode state
    const isDark =
      document.querySelector(".middle")?.classList.contains("dark-mode") ||
      document.querySelector(".main-container")?.classList.contains("dark-mode");

    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  } else {
    // For other buttons: toggle active class
    buttonElement.classList.toggle("active");

    // Save state for THIS button in localStorage
    const btnId = buttonElement.id || iconText; // use ID if available, fallback to icon
    const isActive = buttonElement.classList.contains("active");

    localStorage.setItem(`btn-${btnId}`, isActive ? "on" : "off");
  }
}

// Apply states on page load
window.addEventListener("DOMContentLoaded", () => {
  // Restore dark mode
  const isDark = localStorage.getItem("darkMode");
  if (isDark === "enabled") {
    document.querySelector(".middle")?.classList.add("dark-mode");
    document.querySelector(".top")?.classList.add("dark-mode");
    document.querySelector(".bottom")?.classList.add("dark-mode");
    document.querySelector(".main-container")?.classList.add("dark-mode");
    document.querySelector(".inner-container")?.classList.add("dark-mode");
    document.querySelector(".inner_div")?.classList.add("dark-mode");


    document.querySelectorAll("button").forEach((btn) => {
      if (btn.querySelector("i")?.textContent.trim() === "brightness_4") {
        btn.classList.add("active");
      }
    });
  }

  // Restore other buttons
  document.querySelectorAll("button").forEach((btn) => {
    const iconText = btn.querySelector("i")?.textContent.trim();
    const btnId = btn.id || iconText;

    const savedState = localStorage.getItem(`btn-${btnId}`);
    if (savedState === "on") {
      btn.classList.add("active");
    }
  });
});
