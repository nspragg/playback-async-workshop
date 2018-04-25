'use strict';

module.exports.reverse = (str, cb) => {
  let rev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  cb(null, rev);
};
