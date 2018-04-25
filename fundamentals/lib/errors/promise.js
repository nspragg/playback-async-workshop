'use strict';

const ServiceError = require('../ServiceError');

module.exports.handleError = (service) => {
  const pending = service.makeRequest()
    .catch((err) => {
      throw new ServiceError(err);
    });

  pending.catch(() => {
    service.shutdown();
  });

  return pending;
};
