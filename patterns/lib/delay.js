'use strict';

const util = require('util');

// module.exports = async (delayMs) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// };

// Or
const timeout = util.promisify(setTimeout);
module.exports = async (delayMs) => {
  return timeout(delayMs);
};
