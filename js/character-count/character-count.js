const input = document.getElementById("input");
const countDisplay = document.getElementById("count");
let timeoutId;

const DELAY_ms = 1000;

input.addEventListener("input", () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    countDisplay.textContent = `文字数：${input.value.length}`;
  }, DELAY_ms);
});