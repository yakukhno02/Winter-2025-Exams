// Refactor following solution
// Get one random element from an array

// Step 3
// Add "use strict";
// Simplify function;

"use strict";

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

module.exports = getRandomElement;
