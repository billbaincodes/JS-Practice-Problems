
const problem = (min, max, step) => {
  // Your code here
  let result = [];
  for (let i = min; i <= max; i += step) { result.push(i) };
  return result;
}

module.exports = problem;
