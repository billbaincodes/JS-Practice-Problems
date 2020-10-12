const problem = (num) => {
  // Your code here
  if (num < 10) { return -1 }

  let arr = `${num}`
  
  let findPermutations = (string) => {
    if (string.length < 2 ){
      return string
    }
  
    let permutationsArray = []
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      if (string.indexOf(char) != i)
      continue
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
      for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
  }

  permList = findPermutations(arr).sort();
  let current = permList.indexOf(arr)
  return Number(permList[current+1]) || -1;
}

module.exports = problem;
