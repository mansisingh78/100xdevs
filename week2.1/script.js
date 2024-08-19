// Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}
wait(3).then(() => {
  console.log("3 second have passed");
});

// Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.

function sleep(ms) {
  return new Promise((resolve) => {
    const start = Date.now();
    while (Date.now() - start < ms) {}
    resolve();
  });
}
console.log("Start");
sleep(2000);
console.log("End");

// * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.

function wait1(t1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`resolved after ${t1} seconds`);
    }, t1 * 1000);
  });
}

function wait2(t2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`resolved after ${t2} seconds`);
    }, t2 * 1000);
  });
}

function wait3(t3) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`resolved after ${t3} seconds`);
    }, t3 * 1000);
  });
}
wait1(1).then(console.log);
wait1(2).then(console.log);
wait1(3).then(console.log);
