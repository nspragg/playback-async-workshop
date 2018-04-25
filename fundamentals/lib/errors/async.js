'use strict';

const ServiceError = require('../ServiceError');

module.exports.handleAsyncError = async (service) => {
  try {
    return await service.makeRequest();
  } catch (err) {
    throw new ServiceError(err);
  } finally {
    service.shutdown();
  }
};
