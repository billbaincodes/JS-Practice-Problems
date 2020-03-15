
const problem = (prod) => {
  // Your code here
  let fibSet = [0, 1];
  let idx = 2;
  let fibProd = 0;

  while(fibProd < prod) {
    fibProd = fibSet[idx - 1] *  fibSet[idx - 2];
    if (fibProd === prod) { 
      return [
        fibSet[idx - 2],
        fibSet[idx - 1],
        true,
      ]
    }
    fibSet.push(fibSet[idx - 1] + fibSet[idx - 2]);
    idx++
  };

  return [
    fibSet[fibSet.length - 3],
    fibSet[fibSet.length - 2],
    false,
  ];
}

module.exports = problem;
