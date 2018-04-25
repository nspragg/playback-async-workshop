'use strict';

module.exports = function race(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise.then(resolve).catch(reject);
    }
  });
};
