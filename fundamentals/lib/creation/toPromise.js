'use strict';

const util = require('util');

module.exports.toPromise = (fn) => {
  return util.promisify(fn);
};
