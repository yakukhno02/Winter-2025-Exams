// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 2
// improve naming;

"use strict";

const zip = function (array1 = [], array2 = []) {
  let index1 = 0;
  let index2 = 0;

  for (let item of array2) {
    const pair = [array1[index1++], item];
    if (index1 < index2) {
      delete array1[index1++];
    } else {
      array2[index2++] = pair;
      if (pair[0] === undefined) array2.length -= 1;
    }
  }
    return array2;
};

module.exports = zip;
