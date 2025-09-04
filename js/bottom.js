const bar = document.getElementById("bar");
const barFill = document.getElementById("barFill");

// Update blue bar when slider moves
bar.addEventListener("input", () => {
  barFill.style.width = bar.value + "%";
});

