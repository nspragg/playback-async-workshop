'use strict';

module.exports.isUnique = (str) => {
  const seen = new Array(256).fill(false);
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    if (seen[char]) {
      return false;
    }
    seen[char] = true;
  }
  return true;
};
