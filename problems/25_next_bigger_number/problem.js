
const problem = (num) => {
  // Your code here
  if (num < 10) { return -1 }

  let arr = `${num}`.split('')
  let rounds = arr.length;

  let result = []
  for (let i = 0; i < rounds; i++) {
    let perm = []
    perm.push(arr[i])

    let j = i;
    while( arr[j+1] ) {
      console.log('+', arr[j+1])
      perm.push(arr[j+1])
      j++
    }
    j = i
    while( arr[j-1] ) {
      console.log('-', arr[j-1])
      perm.push(arr[j-1])
      j--
    }
    result.push(Number(perm.join('')))
  }

  console.log({ result })

  for (let i = 0; i < result.length; i++) {
    if (result[i] > num) {
      return result[i]
    }
  }

  return -1
}

module.exports = problem;
