'use strict';

function isNewChar(s, i) {
  return i + 1 >= s.length || s.charAt(i) !== s.charAt(i + 1);
}

module.exports.compress = async (s) => {
  let count = 0;
  const chars = [];
  for (let i = 0; i < s.length; i++) {
    count++;
    if (isNewChar(s, i)) {
      chars.push(s.charAt(i) + count);
      count = 0;
    }
  }
  const compressed = chars.join('');
  return compressed.length > s.length ? s : compressed;
};
