const player = document.querySelector(".player");

let x = 0;

let y = 0;
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      y -= 5;
      player.style.top = y + "px";
      break;
    case "ArrowDown":
      y += 5;
      player.style.top = y + "px";
      break;
    case "ArrowRight":
      x += 5;
      player.style.left = x + "px";
      break;
    case "ArrowLeft":
      x -= 5;
      player.style.left = x - "px";
      break;
    default:
      break;
  }
});
