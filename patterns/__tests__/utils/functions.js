'use strict';

const _ = require('lodash');

async function double(n) {
  return new Promise((resolve) => {
    const delay = _.random(2, 50);
    setTimeout(() => {
      resolve(n << 1);
    }, delay);
  });
}

module.exports = double;
