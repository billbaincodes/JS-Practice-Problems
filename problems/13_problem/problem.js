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

  for (let i = 0; i < arr.length; i++) {
    console.log('arr1', arr)
    let front2 = [arr[0], arr[1]];
    console.log('front2', front2)
    if (oppositeFinder(front2)) {
      arr.splice(0, 2);
    }
    console.log('arr2', arr)
  }
  return arr;
};

module.exports = problem;
