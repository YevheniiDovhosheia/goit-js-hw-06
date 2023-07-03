const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener("input", inputSize);
function inputSize(event) {
  span.style.fontSize = ` ${event.target.value}px`;
  console.log(span.computedStyleMap.fontSize);
}
