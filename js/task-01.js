const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

console.log(`Liczba kategorii w ul#categories: ${categoryItems.length}`);

categoryItems.forEach((item, index) => {
    const header = item.querySelector("h2");
    const categoryItemsList = item.querySelectorAll("li");

    console.log(`Kategoria ${index + 1}: ${header.textContent}`);
    console.log(
        `Liczba elementów w kategorii ${index + 1}: ${categoryItemsList.length}`
    );
});
