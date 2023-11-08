let counterValue = 0;

const counterElement = document.querySelector("#value");

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

function updateView() {
    counterElement.textContent = counterValue;
}

decrementButton.addEventListener("click", () => {
    counterValue -= 1;
    updateView();
});

incrementButton.addEventListener("click", () => {
    counterValue += 1;
    updateView();
});
