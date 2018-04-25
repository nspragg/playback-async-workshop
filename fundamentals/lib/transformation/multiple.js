'use strict';

// returns a function that when invoked returns the next letter of the alphabet
const generateNextChar = require('./generateChar');

module.exports.multple = async () => {
  const next = generateNextChar();
  const allChars = [];
  for (let i = 0; i < 26; i++) {
    allChars.push(await next());
  }
  return allChars.join('');
};
