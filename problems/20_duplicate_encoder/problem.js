
const problem = (str) => {
  // Your code here
  arr = str.split("")

  let dupes = arr.reduce((accum, curr) => {
    let lower = curr.toLowerCase()
    if (accum[lower]){
      accum[lower]++
    } else {
      accum[lower] = 1
    }
    return accum
  }, {})

  return arr.map((letter) => {
    let check = dupes[letter.toLowerCase()]
    if (check > 1) {
      return ')'
    } else {
      return '('
    }
  }).join('')

}

module.exports = problem;
