
const problem = (string) => {
  let numberArr = string.split(' ')
  let pairs = numberArr.reduce((accum, number) => {
    let weight = number.split('').reduce((accum, int) => accum += Number(int), 0)
    accum.push({[number]: weight})
    return accum;
  }, [])

  pairs = pairs.sort((a, b) => {
    let [[aVal], [bVal]] = [Object.values(a), Object.values(b)];
    let [[aKey], [bKey]] = [Object.keys(a), Object.keys(b)];
    if (aVal === bVal) {
      if (aKey < bKey) { return -1 }
      else if (aKey > bKey) { return 1 }
      return 0;
    }
    return aVal - bVal;
  });

  let answer = pairs.map(pair => {
    return Object.keys(pair);
  })

  return answer.join(' ')
}

module.exports = problem;
