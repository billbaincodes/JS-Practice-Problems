
const problem = (str) => {
  // Your code here
  arr = str.split("")

  return arr.map((letter, i) => {

    console.log({ letter, i })

    return arr.forEach((l2, i2) => {
      if (i2 !== i) {
        if (letter.toLowerCase() == l2.toLowerCase()) {
          console.log({ letter, l2})
          return ')'
        }
      }
    })


  }).join('')



  let dupes = arr.reduce((accum, curr) => {
    let lower = curr.toLowerCase()
    accum[lower] ? accum[lower]++ : accum[lower] = 1
    return accum
  }, {})

  return arr.map((letter) => {
    let check = dupes[letter.toLowerCase()]
    return check > 1 ? ')' : '(' 
  }).join('')

}

module.exports = problem;
