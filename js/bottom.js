
document.addEventListener("DOMContentLoaded", function () {
  const brightnessSlider = document.getElementById('brightnessSlider');
  const mainContainer = document.querySelector('.main-container');

  brightnessSlider.addEventListener('input', function () {
    let value = brightnessSlider.value;   // 0–100
    let minBrightness = 0.3;              // set minimum brightness (30%)
    let brightness = (value / 100) * (1 - minBrightness) + minBrightness;
    mainContainer.style.filter = `brightness(${brightness})`;
  });
});
