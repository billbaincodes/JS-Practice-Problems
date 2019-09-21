
const problem = (arrs) => {
  // Your code here
  let result = 0

  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs.length; j++) {
      if (i === j) {
        result += arrs[i][j]
      }
    }
  }

  return result
}

module.exports = problem;
