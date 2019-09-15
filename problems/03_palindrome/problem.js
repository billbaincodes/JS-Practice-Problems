const { compact } = require('lodash')

const problem = (str) => {
  // Your code here
  let letters = str.toLowerCase().replace(/\W/g, '').split('');
  let revLetters = str.toLowerCase().replace(/\W/g, '').split('').reverse();
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== revLetters[i]) {
      return false;
    }
  }
  return true;
};

module.exports = problem;
