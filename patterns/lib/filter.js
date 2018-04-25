'use strict';

module.exports = async (arr, fn) => {
  const results = [];
  for (const item of arr) {
    if (await fn(item)) {
      results.push(item);
    }
  }
  return results;
};
