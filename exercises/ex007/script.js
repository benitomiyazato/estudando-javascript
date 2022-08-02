const displayNumber = document.getElementById("display-number");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

let count = 0;

decreaseButton.onclick = () => {
  if (count > 0) {
    count -= 1;
    displayNumber.innerText = count;
  }
};

resetButton.onclick = () => {
    count = 0;
    displayNumber.innerText = 0;
};

increaseButton.onclick = () => {
  count += 1;
  displayNumber.innerText = count;
};
