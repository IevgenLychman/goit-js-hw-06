const refs = {
  inputField: document.querySelectorAll("input"),
  btn: document.querySelector("button"),
};

// function alert(event) {
//   event.preventDefault();
//   const wtf = () => {
//     if (refs.inputField.value.length === "") {
//       alert("fuck");
//     }
//   };
// }

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

refs.btn.addEventListener("submit", alert);

console.log(refs.btn);
