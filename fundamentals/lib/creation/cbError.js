'use strict';

module.exports.createError = (message, cb) => {
  cb(new Error(message));
};
