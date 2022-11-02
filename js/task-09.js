function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnChangeColor: document.querySelector(".change-color"),
  bodyColor: document.querySelector("body"),
  spanColor: document.querySelector(".color"),
};

const changeBodyColor = () => {
  const color = getRandomHexColor();
  refs.bodyColor.style.backgroundColor = color;
  refs.spanColor.textContent = color;
};

refs.btnChangeColor.addEventListener("click", changeBodyColor);
