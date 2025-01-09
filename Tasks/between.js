// Refactor following solution
// Extract substring between prefix and suffix

// Step 4
// don't mutate incoming parameter;


"use strict";

const getValueBetween = (string, prefix, suffix) => {
  let result = string;
  const startIndex = result.indexOf(prefix);
  if (startIndex === -1) return "";

  const key = startIndex + prefix.length;
  result = result.substring(key);

  if (suffix) {
    const endIndex = result.indexOf(suffix);
    if (endIndex === -1) return "";

    result = result.substring(0, endIndex);
    }

  return result;
};

module.exports = getValueBetween;
