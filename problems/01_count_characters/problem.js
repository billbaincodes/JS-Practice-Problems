
const problem = (str) => {
  // Your code here
  let result = str.toLowerCase().split('');
  result = result.reduce((accum, letter) => {
    if (letter === ' ') { return accum; }
    else if (!accum[letter]) { accum[letter] = 1; }
    else { accum[letter] += 1;}
    return accum;
  }, {});

  return result;
};

module.exports = problem;
