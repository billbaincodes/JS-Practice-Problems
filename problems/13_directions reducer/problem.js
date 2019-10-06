const problem = arr => {
  // Check opposites against this arr
  let opposites = [
    ["NORTH", "SOUTH"],
    ["SOUTH", "NORTH"],
    ["EAST", "WEST"],
    ["WEST", "EAST"]
  ];

  // Helper fn to find opps
  let oppositeFinder = array => {
    let result = false
    opposites.forEach(pair => {
      if (pair[0] === array[0] && pair[1] == array[1]) {
        result = true
      }
    });
    return result
  };

  // Loop thru recursively, removing opps until DRY
  let recurStrat = (directions) => {
    for (let i = 0; i < directions.length; i++) {
      let front2 = directions.slice(i, i+2)
      if (oppositeFinder(front2)) {
        directions.splice(i, 2) 
        recurStrat(directions)
      }
    }
    return directions
  }

  return recurStrat(arr)
};

module.exports = problem;



/*


  // Main Logic
  for (let i = 0; i < arr.length; i++) {
    console.log('i', i)
    let front2 = [arr[i], arr[i+1]];

    if (oppositeFinder(front2)) {
      i += 2
    } else {
      answer.push(arr[i])
    }
    console.log('answer', answer)
  }
  return answer


  */