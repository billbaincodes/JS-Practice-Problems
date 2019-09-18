
const problem = (str) => {
  // Your code here
  let dupes = 0

  letters = str.split('')
  console.log('letters', letters)
  
  letters.reduce((accum, char) => {
    let lowerChar = char.toLowerCase();
    if (lowerChar === ' ') { return accum }
    if (!accum[lowerChar]) {
      accum[lowerChar] = 1
      return accum
    } else if (accum[lowerChar] === 1) {
      dupes += 1
      console.log('dupes', dupes)
      accum[lowerChar]++ 
      return accum
    }
    console.log('accum', accum)
    return accum
  }, {})

  console.log('dupes', dupes)
  return dupes
}; 

module.exports = problem;