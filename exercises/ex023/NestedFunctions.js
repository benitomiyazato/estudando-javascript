// nested functions adds security to your code, its similar to private methods in Java.

let username = "Fulano";
let inbox = 3312;

login();

// displayUsername();
// displayInbox();

function login() {
  displayUsername();
  displayInbox();

  function displayUsername() {
    console.log(`Hi, ${username}!`);
  }

  function displayInbox() {
    console.log(`You have ${inbox} messages in your inbox!`);
  }
}

// function displayUsername() {
//   console.log(`Hi, ${username}!`);
// }

// function displayInbox() {
//   console.log(`You have ${inbox} messages in your inbox!`);
// }
