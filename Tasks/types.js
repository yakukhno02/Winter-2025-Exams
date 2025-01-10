// Refactor following solution
// Count types in an array

// Step 1
// Add "use strict";
// Add 'const' and 'let';
// Remove unreachable code;
// Remove senseless blocks;

"use strict";

const types_ = function (s) {
  const types_ = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (let i of s) {
    const t = typeof i;
    types_[t]++;
  }
  return types_;
};

module.exports = types_;
