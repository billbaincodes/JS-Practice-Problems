
const problem = (str) => {
  // Your code here
  arr = str.split("")
  return arr.map((l1, i) => {
    let dupe
    for (let j = 0; j < arr.length ; j++) {
      if (j !== i) { dupe = l1.toLowerCase() == arr[j].toLowerCase() ? true : dupe }
    }
    return dupe ? ')' : '('
  }).join('')

  // original answer
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
