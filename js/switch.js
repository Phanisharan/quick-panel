const simCards = document.querySelectorAll(".sim-card");
const radioJio = document.getElementById("radio-jio");
const radioVi = document.getElementById("radio-vi");

// Function to activate selected SIM
function activateSim(sim) {
  simCards.forEach(card => {
    card.classList.remove("active");
    const defaultText = card.querySelector(".default-text");
    if (defaultText) defaultText.remove(); // remove "Default data card" if exists
  });

  if (sim === "jio") {
    const jioCard = document.querySelector('[data-sim="jio"]');
    jioCard.classList.add("active");

    // Add "Default data card" line
    let text = document.createElement("p");
    text.className = "used highlight default-text";
    text.innerText = "Default data card";
    jioCard.appendChild(text);

    radioJio.checked = true;
  } else if (sim === "vi") {
    const viCard = document.querySelector('[data-sim="vi"]');
    viCard.classList.add("active");

    // Add "Default data card" line
    let text = document.createElement("p");
    text.className = "used highlight default-text";
    text.innerText = "Default data card";
    viCard.appendChild(text);

    radioVi.checked = true;
  }
}

// Click on card
simCards.forEach(card => {
  card.addEventListener("click", () => {
    const sim = card.getAttribute("data-sim");
    activateSim(sim);
  });
});

// Click on radio
radioJio.addEventListener("change", () => activateSim("jio"));
radioVi.addEventListener("change", () => activateSim("vi"));
