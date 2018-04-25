'use strict';

module.exports = function all(promises) {
  return new Promise((resolve, reject) => {
    const values = [];
    let pending = promises.length;
    promises.forEach((promise, i) => {
      promise
        .then((result) => {
          values[i] = result;
          if (--pending === 0) resolve(values);
        })
        .catch((err) => {
          reject(err);
        });
    });
    if (promises.length === 0) resolve(values);
  });
};
