// Refactor following solution
// Extract substring between prefix and suffix

// Step 3
// improve naming


"use strict";

const getValueBetween = (string, prefix, suffix) => {
  const startIndex = string.indexOf(prefix);
  if (startIndex === -1) return "";

  const key = startIndex + prefix.length;
  string = string.substring(key);

  if (suffix) {
    const endIndex = string.indexOf(suffix);
    if (endIndex === -1) return "";

    string = string.substring(0, endIndex);
    }

  return string;
};

module.exports = getValueBetween;
