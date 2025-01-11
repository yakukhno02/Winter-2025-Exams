// Refactor following solution
// Reverse an array, you can't use .reverse()

// Step 1
// Remove empty blocks and magic numbers
// Remove unused parameters
// Improve logic

invert = (A) => {
  T = [];
  while (A.length > 0) {
    T.push(A.pop());
  }
  return T;
};

module.exports = invert;
