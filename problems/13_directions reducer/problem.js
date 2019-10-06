const problem = arr => {
  // Your code here
  let opposites = [
    ["NORTH", "SOUTH"],
    ["SOUTH", "NORTH"],
    ["EAST", "WEST"],
    ["WEST", "EAST"]
  ];

  let oppositeFinder = array => {
    let result = false
    opposites.forEach(pair => {
      if (pair[0] === array[0] && pair[1] == array[1]) {
        result = true
      }
    });
    return result
  };

  let answer = []
  console.log('arr', arr)

  for (let i = 0; i < arr.length; i++) {
    let front2 = [arr[i], arr[i+1]];
    
    if (oppositeFinder(front2)) {
      i += 2
    } else {
      // if (arr[i+1] === undefined) { return answer}
      answer.push(arr[i])
    }
    console.log('answer', answer)
  }
  return answer
};

module.exports = problem;
