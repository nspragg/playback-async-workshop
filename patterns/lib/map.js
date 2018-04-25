'use strict';

const fixedExecutor = require('./private/executor');

/** Simple solution
async function map(arr, fn) {
  if (!arr) return [];
  return await Promise.all(arr.map(fn));
}
*/

// reuse executor without specifying a limit - defaults to Infinity
async function map(iterable, fn) {
  if (!iterable) return [];
  return fixedExecutor(iterable, fn);
}

module.exports = map;
