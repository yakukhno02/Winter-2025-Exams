// Refactor following solution
// Sum all numbers from an array

// Step 4
// Replace loop (for ... of ...) with reduce method;

"use strict";

const calcSum = (array) => array.reduce((total, item) => (typeof item === "number"? total + item : total), 0);

module.exports = calcSum;
