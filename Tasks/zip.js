// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 3
// use map to zip two arrays

"use strict";

const zip = function (array1 = [], array2 = []) {
  const minLength = Math.min(array1.length, array2.length);
  return array1.slice(0, minLength).map((index1,index2) => [index1, array2[index2]]);
};

module.exports = zip;
