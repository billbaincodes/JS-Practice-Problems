
const problem = (num) => {
  // Your code here
  let counter = 1
  num = num.toString().split('')

  if (num.length === 1) { return 0 }
  multiplier = (num) => {
    const product = num.reduce((prod, curr) => {
      return prod * curr
    }, 1)
    if (product.toString().length >= 2) {
      counter++
      multiplier(product.toString().split(''))
    } 
    return product
  }

  multiplier(num)
  return counter
}

module.exports = problem;
