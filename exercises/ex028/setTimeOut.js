// setTimeOut

// setTimeout(log, 2000);
// setTimeout(log, 3000);
// setTimeout(log, 4000);
// let timeout4 = setTimeout(log, 5000);
// clearTimeout(timeout4);

// function log() {
//   console.log(`Executing the function`);
// }

// setInterval

let count = 0;
let max = 200;

let interval1 = setInterval(() => {
  count += 1;
  console.log(count);
  if (count >= max) {
    clearInterval(interval1);
  }
}, 10);
