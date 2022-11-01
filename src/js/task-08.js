const chekingForm = document.querySelector("form");

chekingForm.addEventListener("submit", formToChek);

function formToChek(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка заповніть всі поля!");
  }
  event.currentTarget.reset();
}
