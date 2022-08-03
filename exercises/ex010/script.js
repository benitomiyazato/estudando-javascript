const rectangle = document.getElementById("rectangle");
const drawBtn = document.getElementById("draw");
const resetBtn = document.getElementById("reset");

drawBtn.onclick = () => {
  const rows = document.getElementById("rows").value;
  const columns = document.getElementById("columns").value;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      rectangle.innerHTML += "#";
    }
    rectangle.innerHTML += "<br>";
  }
};

resetBtn.onclick = () => {
  rectangle.innerHTML = "";
};

function happyBirthday(name, age) {
  console.log("Happy birthday, ", name, "!");
  console.log("You are ", age, " years old!");
}

happyBirthday("Jorge", 21);
