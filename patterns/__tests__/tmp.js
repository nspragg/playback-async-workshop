'use strict';

const Promise = require('bluebird');
const asyncify = require('../lib/asyncify');
const double = require('./utils/functions');
const ExecutorError = require('./../lib/private/ExecutorError');

describe('.mapLimit', () => {

  it('limits the numbers of invokes at a given time', async () => {
    const limit = 2;
    const running = [];

    const results = await asyncify.mapLimit(
      [10, 20, 30, 40, 50, 60],
      async (number) => {
        running.push(number);
        expect(running.length).toBeLessThanOrEqual(limit);
        const doubled = await double(number);
        running.pop();
        return doubled;
      },
      limit
    );

    expect(results).toEqual([20, 40, 60, 80, 100, 120]);
  });
});
