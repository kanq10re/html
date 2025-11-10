const input = document.getElementById("input");
const countDisplay = document.getElementById("count");
let timeoutId;

input.addEventListener("input", () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    countDisplay.textContent = `文字数：${input.value.length}`;
  }, 1000);
});