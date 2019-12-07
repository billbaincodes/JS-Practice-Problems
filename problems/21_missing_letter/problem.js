
const problem = (arr) => {
  // Your code here
  let answer = ''

  arr.reduce((prev, letter) => {
    let currCode = letter.charCodeAt()
    if (prev + 1 !== currCode) {
      answer = String.fromCharCode(prev + 1)
    } 
    prev = currCode
    return prev
  }, '')

  return answer
}

module.exports = problem;
