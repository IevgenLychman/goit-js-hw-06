function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnChangeColor: document.querySelector(".change-color"),
  bodyColor: document.querySelector("body"),
  spanColor: document.querySelector(".color"),
};

const changeBodyColor = () => {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = getRandomHexColor();
};

refs.btnChangeColor.addEventListener("click", changeBodyColor);
