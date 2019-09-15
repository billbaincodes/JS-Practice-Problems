
const problem = (str) => {
  // Your code here
  let result = str.toLowerCase().split('');
  result = result.reduce((accum, letter) => {
    if (letter === ' ') { return accum; }
    if (!accum[letter]) {
      // eslint-disable-next-line no-param-reassign
      accum[letter] = 1;
    } else {
      // eslint-disable-next-line no-param-reassign
      accum[letter] += 1;
    }
    return accum;
  }, {});

  return result;
};

module.exports = problem;
