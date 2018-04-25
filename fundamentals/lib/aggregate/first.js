'use strict';

// for optional exerises
// const race = require('../advanced/race');

module.exports.first = (service) => {
  const pending = [];
  for (let i = 0; i < 50; i++) {
    pending.push(service.makeRequest());
  }
  return Promise.race(pending);
};
