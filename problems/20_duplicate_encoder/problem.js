
const problem = (str) => {
  // Your code here
  arr = str.split("")

  let answer =  arr.map((letter, i) => {


    for ( let j = 0; j < arr.length ; j++) {
      let l2 = arr[j]
      console.log({ letter, l2})
      if (j !== i) {
        if (letter.toLowerCase() == l2.toLowerCase()) {
          console.log('DUUPE')
          return ')'
        } else {
          return '('
        }
    }
  }



    // return arr.forEach((l2, i2) => {
    //   console.log({ letter, l2})
    //   if (i2 !== i) {
    //     if (letter.toLowerCase() == l2.toLowerCase()) {
    //       console.log('DUUPE')
    //       return ')'
    //     } else {
    //       return '('
    //     }
    //   }
    // })

  }).join('')

  console.log({ answer });
  return answer;

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
