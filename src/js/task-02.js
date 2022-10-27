const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ind = document.querySelector("#ingredients");

const addIngredients = ingredients.map((ingredient) => {
  const ingredientsList = document.createElement("li");
  ingredientsList.textContent = ingredient;
  ingredientsList.classList.add("item");
  return ingredientsList;
});

ind.append(...addIngredients);

console.log(addIngredients);
