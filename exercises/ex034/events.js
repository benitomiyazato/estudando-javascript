const body = document.body;
const button = document.querySelector("#writeButton");
const p = document.querySelector("#p");
const text = document.querySelector("#textBox");
const div = document.querySelector("#div");

p.innerHTML += "aaaa";

body.onload = alertSomething;
button.onclick = writeSomething;
text.onchange = alertSomething;
div.onmouseover = changeToPurple;
div.onmouseout = changeToYellow;

div.onmousedown = changeToRed;
div.onmouseup = changeToGreen;

function writeSomething() {
  button.innerHTML += "asdad";
}

function alertSomething() {
  window.alert("SOMETHING");
}

function changeToRed() {
  div.textContent = "aaa";
  div.style.backgroundColor = "red";
}
function changeToYellow() {
  div.style.backgroundColor = "yellow";
}
function changeToPurple() {
  div.style.backgroundColor = "purple";
}
function changeToGreen() {
  div.style.backgroundColor = "green";
}
