
const problem = (str) => {
  // Your code here
  let dupes = 0
  letters = str.split('')
  letters.reduce((accum, char) => {
    let lowerChar = char.toLowerCase();
    if (lowerChar === ' ') { return accum }
    if (!accum[lowerChar]) {
      accum[lowerChar] = 1
      return accum
    } else if (accum[lowerChar] === 1) {
      dupes += 1
      accum[lowerChar]++ 
      return accum
    }
    return accum
  }, {})
  return dupes
}; 

module.exports = problem;