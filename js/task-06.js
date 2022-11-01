const refs = {
  inputField: document.querySelector("#validation-input"),
  inputLength: document.querySelector("input").getAttribute("data-length"),
};

const inputCheckContent = () => {
  refs.inputField.value.length === Number(refs.inputLength)
    ? (refs.inputField.classList.add("valid"),
      refs.inputField.classList.remove("invalid"))
    : (refs.inputField.classList.remove("valid"),
      refs.inputField.classList.add("invalid"));
};

refs.inputField.addEventListener("blur", inputCheckContent);
