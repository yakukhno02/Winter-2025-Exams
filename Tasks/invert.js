// Refactor following solution
// Reverse an array, you can't use .reverse()

// Step 3
// Improve naming;

"use strict";

const getInvertedArray = (array) => {
  const invertedArray  = [];
  while (array.length > 0) {
    invertedArray.push(array.pop());
  }
  return invertedArray;
};

module.exports = getInvertedArray;
