'use strict';

async function square(n) {
  return n * n;
}

module.exports.sumOfSquares = async (arr) => {
  // Fix the simple bug. `.reduce` MUST be used
  const acc = 0;
  return arr.reduce(async (acc, value) => {
    acc = await acc + await square(value);
    return acc;
  }, acc);
};

