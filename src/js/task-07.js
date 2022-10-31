const refs = {
  inputSlider: document.querySelector("#font-size-control"),
  spanText: document.querySelector("#text"),
};

const inputRange = (event) => {
  refs.spanText.style.fontSize = event.currentTarget.value + "px";
};

refs.inputSlider.addEventListener("input", inputRange);
