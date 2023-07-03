const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputBlur);

function inputBlur() {
  const dataLength = input.getAttribute("data-length");
  const currentLength = input.value.length;
  input.classList.add("invalid");
  if (Number(dataLength) === Number(currentLength)) {
    input.classList.replace("invalid", "valid");
  }
}
