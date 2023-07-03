const selectors = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
selectors.input.addEventListener("input",textinput);
function textinput(event) {
  selectors.output.textContent = event.target.value.trim();
  if (!event.target.value.trim()) {
    selectors.output.textContent = "Anonymous";
  }
}
