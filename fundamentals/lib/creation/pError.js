'use strict';

module.exports.withError = (message) => {
  return new Promise((resolve, reject) => {
    reject(new Error(message));
  });
};
