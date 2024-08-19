// Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
function isAnagram(str1, str2) {
  const cleanStr1 = str1.replace(/\w/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\w/g, "").toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("apple", "pale"));

// Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  transactions.forEach((transaction) => {
    const { category, amount } = transaction;

    if (categoryTotals[category]) {
      categoryTotals[category] += amount;
    } else {
      categoryTotals[category] = amount;
    }
  });

  return Object.keys(categoryTotals).map((category) => {
    return {
      category: category,
      totalSpent: categoryTotals[category],
    };
  });
}
const transactions = [
  { id: 1, amount: 50, category: "Groceries" },
  { id: 2, amount: 150, category: "Electronics" },
  { id: 3, amount: 30, category: "Groceries" },
  { id: 4, amount: 200, category: "Clothing" },
  { id: 5, amount: 100, category: "Electronics" },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);

// Write a function `findLargestElement` that takes an array of numbers and returns the largest element.

function findLargestElement(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}
console.log(findLargestElement([2, 6, 8, 5, 9]));
console.log(findLargestElement([70, 54, 30, 56]));

// Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World"));
