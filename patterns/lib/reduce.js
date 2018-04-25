'use strict';

module.exports = async (iterable, fn, initial) => {
  let accumulator = initial;
  for (const item of iterable) {
    accumulator = await fn(accumulator, item);
  }
  return accumulator;
};
