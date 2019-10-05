
const problem = (arr) => {
  // Your code here
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i]) || arr[i] < 0) {
      return null
    }
  }
  let result = []
  let number = arr.join('')
  number++
  numberString = number.toString()

  for (let i = 0; i < numberString.length; i++) {
    result.push(Number(numberString[i]))
  }

  return result


}

module.exports = problem;
