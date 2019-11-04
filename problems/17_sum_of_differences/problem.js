
const problem = (arr) => {
  // Your code here
  let result = arr.sort((a, b) => { return b - a }).reduce((accum, curr, idx) => {
    if (idx+1 < arr.length) { accum += (curr - arr[idx+1]) }
    return accum
  }, 0)

  return result
}

module.exports = problem;
