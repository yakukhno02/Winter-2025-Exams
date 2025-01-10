// Refactor following solution
// Sum all numbers from an array

// Step 4
// Improve readability;

"use strict";

const calcSum = (array) => {
  return array.reduce((total, item) => (typeof item === "number" ? total + item : total), 0);
};

module.exports = calcSum;
