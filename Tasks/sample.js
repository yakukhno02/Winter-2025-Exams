// Refactor following solution
// Get one random element from an array

// Step 1
// Improve naming

const getRandomElement = (array) => {
  array = array[Math.floor(Math.random() * array.length)];
  return array;
};

module.exports = getRandomElement;
