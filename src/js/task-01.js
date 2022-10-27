// const categoriesQty = document.querySelector("#categories").children.length;
// console.log("Number of categories: ", categoriesQty);

// const categoriesNames = document.querySelector("h2").textContent;
// console.log("Category:  ", categoriesNames);

const categoriesFirstLi = Array.from(
  document.querySelector("#categories").children
);

const categoriesUl = Array.from(
  document.querySelectorAll("#categories  li ul")
);

const categoriesList = [{}];

categoriesFirstLi.forEach((element) => {
  categoriesList.push(
    `Number of categories: ${categoriesFirstLi.length}`,
    `Category: ${element.firstChild.textContent.trim()}`,
    `Elements: ${element.firstElementChild.children.length}`
  );
});

console.log(categoriesList);
