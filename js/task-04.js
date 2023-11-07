const decrementButton = document.querySelector(
    'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
    'button[data-action="increment"]'
);
const counterValue = document.querySelector("#value");

let counter = 0;

counterValue.textContent = counter;

decrementButton.addEventListener("click", () => {
    counter -= 1;
    counterValue.textContent = counter;
});

incrementButton.addEventListener("click", () => {
    counter += 1;
    counterValue.textContent = counter;
});
