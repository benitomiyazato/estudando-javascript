// todo
// muitos triggers

const displayDate = document.getElementById("display-number");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const playButton = document.getElementById("play");

let date = new Date(0, 0, 0, 0, 0, 0);
displayDate.innerHTML = formatDate(date);

let clickedAlready = false;
let pause = false;

playButton.onclick = () => {
  pause = false;
  if (!clickedAlready) {
    date.setSeconds(date.getSeconds() + 1);
    displayDate.innerHTML = formatDate(date);
    const timer = setInterval(() => {
      if (pause) {
        clearInterval(timer);
        return;
      }
      date.setSeconds(date.getSeconds() + 1);
      displayDate.innerHTML = formatDate(date);
    }, 1000);
  }
  clickedAlready = true;
};

pauseButton.onclick = () => {
  pause = true;
  clickedAlready = false;
};

resetButton.onclick = () => {
  date.setSeconds(0);
  date.setMinutes(0);
  displayDate.innerHTML = formatDate(date);
};

function formatDate(date) {
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}
