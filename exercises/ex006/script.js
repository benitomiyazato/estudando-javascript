const body = document.getElementById("body");

document.getElementById("submit-button").onclick = function () {
  let a = document.getElementById("a-input").value;
  let b = document.getElementById("b-input").value;
  let hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  body.innerHTML +=
    "<p>" +
    "The hypotenuse of this triangle is equal to: " +
    hypotenuse +
    "</p>";
};
