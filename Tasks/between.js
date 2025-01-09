// Refactor following solution
// Extract substring between prefix and suffix

// Step 5
// Use 'slice' instead 'substring'


"use strict";

const getValueBetween = (string, prefix, suffix) => {

  const startIndex = string.indexOf(prefix);
  if (startIndex === -1) return "";

  let result = string.slice(startIndex + prefix.length);

  if (suffix) {
    const endIndex = result.indexOf(suffix);
    if (endIndex === -1) return "";

    result = result.slice(0, endIndex);
    }

  return result;
};

module.exports = getValueBetween;
