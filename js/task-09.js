function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const colors = document.querySelector(".color");
btn.addEventListener("click", clickBtn);
function clickBtn() {
  document.body.style.backgroundColor = colors.textContent =
    getRandomHexColor();
}
