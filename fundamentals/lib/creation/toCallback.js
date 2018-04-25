'use strict';

const util = require('util');

module.exports.toCallback = (fn) => {
  return util.callbackify(fn);
};
