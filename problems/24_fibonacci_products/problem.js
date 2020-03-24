
const problem = (prod) => {
  // Your code here
  let fib1 = 0
  let fib2 = 1
  // let fibProd = 0;
  while(fib1 * fib2 < prod) {
    // fibProd = fib1 *  fib2;
    if (fib1 * fib2 === prod) { 
      return [
        fib1,
        fib2,
        true,
      ]
    }
    nextFib = fib1 + fib2
    fib1 = fib2
    fib2 = nextFib
  };

  return [
    fib2-fib1,
    fib1,
    false,
  ];
}

module.exports = problem;
