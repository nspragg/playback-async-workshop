'use strict';

const toAsync = require('./private/toAsync');
const fixedExecutor = require('./private/executor');

module.exports = async function each(arr, fn) {
  return fixedExecutor(arr, toAsync(fn));
};
