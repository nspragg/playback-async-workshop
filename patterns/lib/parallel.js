'use strict';

async function handleArray(iterable) {
  return await Promise.all(iterable.map((fn) => fn()));
}

async function handleObject(iterable) {
  const pending = [];
  const results = {};
  for (const k of Object.keys(iterable)) {
    const fn = iterable[k];
    pending.push(fn().then((v) => {
      results[k] = v;
    }));
  }
  await Promise.all(Object.values(pending));

  return results;
}

module.exports = async (iterable) => {
  if (Array.isArray(iterable)) return handleArray(iterable);
  return handleObject(iterable);
};
