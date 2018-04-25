'use strict';

const ExecutorError = require('./ExecutorError');

const CONCURRENCY_LEVEL = Infinity;

async function parallelExecutor(arr, fn, limit = CONCURRENCY_LEVEL) {
  if (!Array.isArray(arr)) throw new TypeError(`Expecting array but got ${typeof arr}`);

  let active = 0;
  const results = [];
  const i = 0;
  return new Promise((resolve, reject) => {
    function execute() {
      while (active < limit && arr.length > 0) {
        active++;
        const item = arr.shift();
        fn(item, i)
          .then((res) => {
            results.push(res);
            if (--active <= 0 && arr.length === 0) return resolve(results);
            execute(); // refresh active tasks
          })
          .catch((e) => reject(new ExecutorError(e)));
      }
    }

    // initiate task execution
    execute();
  });
}

module.exports = parallelExecutor;
