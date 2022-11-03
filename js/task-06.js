const refs = {
  inputField: document.querySelector("#validation-input"),
  inputLength: document.querySelector("input").getAttribute("data-length"),
};
function fieldValidation(add, remove) {
  refs.inputField.classList.add(add);
  refs.inputField.classList.remove(remove);
}

const inputCheckContent = () => {
  refs.inputField.value.length === Number(refs.inputLength)
    ? fieldValidation("valid", "invalid")
    : fieldValidation("invalid", "valid");
};

refs.inputField.addEventListener("blur", inputCheckContent);
