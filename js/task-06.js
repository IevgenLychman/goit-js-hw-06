const refs = {
  inputField: document.querySelector("#validation-input"),
  inputLength: document.querySelector("input").getAttribute("data-length"),
};
function fieldValid() {
  refs.inputField.classList.add("valid");
  refs.inputField.classList.remove("invalid");
}

function fieldInvalid() {
  refs.inputField.classList.remove("valid");
  refs.inputField.classList.add("invalid");
}

const inputCheckContent = () => {
  refs.inputField.value.length === Number(refs.inputLength)
    ? fieldValid()
    : fieldInvalid();
};

refs.inputField.addEventListener("blur", inputCheckContent);
