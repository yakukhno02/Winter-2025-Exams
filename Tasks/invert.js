// Refactor following solution
// Reverse an array, you can't use .reverse()

// Step 2
// Add "use strict";
// Add 'const';

"use strict";

const invert = (A) => {
  const T = [];
  while (A.length > 0) {
    T.push(A.pop());
  }
  return T;
};

module.exports = invert;
