const refs = {
  inputName: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

// const wtf = (event) => {
//   refs.outputName.textContent = event.currentTarget.value;
// };

// refs.inputName.addEventListener("input", wtf);

const wtf = (event) => {
  refs.inputName === ""
    ? (refs.outputName.textContent = "Anon")
    : (refs.outputName.textContent = event.currentTarget.value);
};
console.log(refs.outputName);

refs.inputName.addEventListener("input", wtf);
