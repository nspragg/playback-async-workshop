'use strict';

const fixedExecutor = require('./private/executor');

module.exports = async (iterable, fn, limit) => {
  if (!iterable || limit < 1) return [];
  return fixedExecutor(iterable, fn, limit);
};
