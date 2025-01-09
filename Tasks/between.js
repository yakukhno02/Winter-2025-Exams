// Refactor following solution
// Extract substring between prefix and suffix

// Step 2
// remove senseless blocks;
// Add spacing;


"use strict";

const getValueBetween = (string, prefix, suffix) => {
  let index = string.indexOf(prefix);
  if (index === -1) return "";

  const key = index + prefix.length;
  string = string.substring(key);

  if (suffix) {
    index = string.indexOf(suffix);
    if (index === -1) return "";

    string = string.substring(0, index);
    }

  return string;
};

module.exports = getValueBetween;
