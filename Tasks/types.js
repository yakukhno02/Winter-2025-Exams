// Refactor following solution
// Count types in an array

// Step 2
// Improve naming

"use strict";

const countTypes = (array) => {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (let item of array) {
    const type = typeof item;
    types[type]++;
  }
  return types;
};

module.exports = countTypes;
