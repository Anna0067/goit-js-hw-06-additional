const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item, index) => {
    const header = item.querySelector("h2");
    const categoryItemsList = item.querySelectorAll("li");

    console.log(`Category: ${header.textContent}`);
    console.log(`Elements: ${categoryItemsList.length}`);
});
