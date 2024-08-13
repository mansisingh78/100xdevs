// Write a function sum that finds the sum of two numbers
function sum(a, b) {
  let totalSum = a + b;
  return totalSum;
}

console.log(sum(4, 6));

// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
  if (age > 18) {
    console.log(true);
  } else {
    console.log(false);
  }
}
canVote(24);
canVote(14);

// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

function checkNumber(nums) {
  if (nums % 2 === 0) {
    console.log("the number is even ");
  } else {
    console.log("the number is odd ");
  }
}

checkNumber(4);
checkNumber(7);

// Write a function called sum that finds the sum from 1 to a number

function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sum(2));

// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function printEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}
let number = [2, 3, 5, 6, 7];
const evenNumbers = printEven(number);
console.log(evenNumbers);
