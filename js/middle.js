function switchOn(buttonElement) {
    if (buttonElement.querySelector("i")?.textContent === "brightness_4") {
    document.querySelector(".middle").classList.toggle("dark-mode");
    buttonElement.classList.toggle("active");
    return;
  }

  buttonElement.classList.toggle("active");
}