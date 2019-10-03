
const problem = (str) => {
  // Your code here
  let open = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      open++
    } else {
      open--
    }
    if (open < 0 ){
      return false
    }
  }
  return open === 0
}

module.exports = problem;
