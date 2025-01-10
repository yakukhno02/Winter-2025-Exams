// Refactor following solution
// Get one random element from an array

// Step 2
// Don't mutate incoming parameter

const getRandomElement = (array) => {
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
};

module.exports = getRandomElement;
