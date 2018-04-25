'use strict';

function flatten(args) {
  let arr = [];
  for (const e of args) {
    if (Array.isArray(e)) {
      arr = arr.concat(e);
    } else {
      arr.push(e);
    }
  }
  return arr;
}

module.exports = async (...args) => {
  args = flatten(args);
  let result = await args[0]();
  for (let i = 1; i < args.length; ++i) {
    result = await args[i](result);
  }
  return result;
};
