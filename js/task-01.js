const categoriesList = [];

const categoriesLength = document.querySelector("#categories").children.length;
categoriesList.push(`Number of categories: ${categoriesLength}`);

const categoriesFilling = document.querySelectorAll(".item");
categoriesFilling.forEach((element) => {
  categoriesList.push(
    `Category: ${element.firstElementChild.textContent}`,
    `Elements: ${element.lastElementChild.children.length}`
  );
});

console.log(categoriesList);
