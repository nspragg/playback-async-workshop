'use strict';

const mapLimit = require('./mapLimit');
const CONCURRENCY_LEVEL = 1;

// Simple solution

// async function mapSeries(arr, fn) {
//   if (!arr) return [];
//   const results = [];
//   for (const [i, item] of arr.entries()) {
//     results.push(await fn(item, i));
//   }
//   return results;
// }

// reuse executor
async function mapSeries(iterable, fn) {
  return mapLimit(iterable, fn, CONCURRENCY_LEVEL);
}

module.exports = mapSeries;
