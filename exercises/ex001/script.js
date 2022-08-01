function helloWorld(name) {
  let message;
  if (name == "" || name == null) {
    message = "Hello, World!";
  } else {
    message = "Hello, " + name + "!";
  }
  return message;
}

const p = document.getElementById("p1");
p.innerHTML = helloWorld("Friend");
