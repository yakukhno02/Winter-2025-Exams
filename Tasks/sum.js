// Refactor following solution
// Sum all numbers from an array

// Step 3
// Remove unnecessary checks to simplify logic

"use strict";

const calcSum = (array) => {
  let total = 0
  for (const item of array) {
    if (typeof item === "number") {
        total += item;
    }
  }
  return total;
};

module.exports = calcSum;
