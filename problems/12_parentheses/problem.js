
const problem = (str) => {
  // Your code here
  let open = 0

  for (let i = 0; i < str.length; i++) {
    if (str[0] === '(') {
      open++
    } else {
      open--
    }
    if (open < 0 ){
      return false
    }
  }

  if (open !== 0) {
    return false
  }

  return true

}

module.exports = problem;
