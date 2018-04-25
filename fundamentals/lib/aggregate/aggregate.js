'use strict';

// for optional exercises
// const all = require('../advanced/all');

module.exports.aggregateWithPromises = (service) => {
  const pending = [];
  for (let i = 0; i < 50; i++) {
    pending.push(service.makeRequest());
  }
  return Promise.all(pending);
};
