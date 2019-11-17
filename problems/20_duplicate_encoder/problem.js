
const problem = (str) => {
  // Your code here

  arr = str.split("")

  let dupes = arr.reduce((accum, curr) => {

    if (accum.curr){
      accum.curr++
    } else {
      accum.curr = 1
    }
    return accum

  }, {})

  return arr.map((letter) => {
    if (dupes.letter) {
      return ')'
    } else {
      return '('
    }
  }).join('')

}

module.exports = problem;
