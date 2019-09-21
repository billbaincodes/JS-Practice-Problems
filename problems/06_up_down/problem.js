const problem = (arr) => {
  // Your code here
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] > arr[i]) {
      result.push('down')
    } else if (arr[i-1] < arr[i]) {
      result.push('up')
    } else {
      result.push('even')
    }
  }
  return result
};

module.exports = problem;