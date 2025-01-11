// Refactor following solution
// Reverse an array, you can't use .reverse()

// Step 4
// Improve logic by using for loop

"use strict";

const getInvertedArray = (array) => {
  const invertedArray  = [];
  for (let i = array.length - 1; i >= 0; i--){
    invertedArray.push(array[i]);
  }
  return invertedArray;
};

module.exports = getInvertedArray;
