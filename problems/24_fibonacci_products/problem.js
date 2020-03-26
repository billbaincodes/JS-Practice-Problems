
const problem = (prod) => {
  // Your code here
  let fib1 = 0
  let fib2 = 1
  while (fib1 * fib2 <= prod) {
    if (fib1 * fib2 === prod) { 
      return [ fib1, fib2, true ]
    }
    [fib1, fib2] = [fib2, (fib1 + fib2)]
  };
  return [ fib1, fib2, false ];
}

module.exports = problem;
