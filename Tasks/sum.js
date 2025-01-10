// Refactor following solution
// Sum all numbers from an array

// Step 2
// Improve naming
// Replace array 'sum' with a single variable 'total'

"use strict";

const calcSum = (array) => {
  let total = 0
  for (const item of array) {
    let type = typeof item;
    if (type === "number") {
      if (array.length > 0) {
        total += item;
      }
    }
  }
  return total;
};

module.exports = calcSum;
