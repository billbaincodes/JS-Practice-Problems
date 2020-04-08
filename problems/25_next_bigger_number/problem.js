
const problem = (num) => {
  // Your code here
  if (num < 10) { return -1 }

  let arr = `${num}`.split('')
  let rounds = arr.length;

  let result = []
  for (let i = 0; i < rounds; i++) {
    for (let j = 0; j < rounds; j++) {
      let currArr = `${num}`.split('');
      console.log({currArr})
      currArr[i] = currArr[j];
      result.push(currArr)
    }
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
