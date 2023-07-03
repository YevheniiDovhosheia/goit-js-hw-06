const selectors = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

selectors.decrementBtn.addEventListener("click", decrementClick);
selectors.incrementBtn.addEventListener("click", incrementClick);
let counterValue = 0;
function decrementClick() {
  counterValue -= 1;
  selectors.counter.textContent = counterValue;
}
function incrementClick() {
  counterValue += 1;
  selectors.counter.textContent = counterValue;
}
