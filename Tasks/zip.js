// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 4
// don't mutate parameters

"use strict";

const zip = function (array1 = [], array2 = []) {
  const minLength = Math.min(array1.length, array2.length);
  const newArray1 = [...array1];
  const newArray2 = [...array2];
  return newArray1.slice(0, minLength).map((index1,index2) => [index1, newArray2[index2]]);
};

module.exports = zip;
