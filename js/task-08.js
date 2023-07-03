const form = document.querySelector(".login-form");
form.addEventListener('submit', hendlerSubmit);
function hendlerSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    return alert("Fill in all fields");
  }
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  event.currentTarget.reset();
}
