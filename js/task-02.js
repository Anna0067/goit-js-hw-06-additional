const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const elements = [];

for (let i = 0; i < ingredients.length; i++) {
    const listItem = document.createElement("li");

    listItem.textContent = ingredients[i];

    listItem.classList.add("item");

    elements.push(listItem);
}

ingredientsList.append(...elements);
