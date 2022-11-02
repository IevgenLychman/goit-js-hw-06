const refs = {
  btnPlusOne: document.querySelector("[data-action='increment']"),
  btnMinusOne: document.querySelector("[data-action='decrement']"),
  valueTextContent: document.getElementById("value"),
};

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  refs.valueTextContent.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  refs.valueTextContent.textContent = counterValue;
};

refs.btnPlusOne.addEventListener("click", increment);
refs.btnMinusOne.addEventListener("click", decrement);

// Не можу зрозуміти чому в такому варіанті не працює. Як що можна дайте пояснення. Дякую

// const refs = {
//   btnPlusOne: document.querySelector("[data-action='increment']"),
//   btnMinusOne: document.querySelector("[data-action='decrement']"),
//   valueTotal: document.querySelectorAll("#value"),
// };

// let counterValue = 0;

// const decrement = () => {
//   counterValue -= 1;
//   refs.valueTotal.textContent = counterValue;
// };

// const increment = () => {
//   counterValue += 1;
//   refs.valueTotal.textContent = counterValue;
// };

// refs.btnPlusOne.addEventListener("click", increment);
// refs.btnMinusOne.addEventListener("click", decrement);
