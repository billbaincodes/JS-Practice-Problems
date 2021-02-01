
const problem = (string) => {
  let pairs = string.split(' ').reduce((accum, number) => {
      let weight = number.split('').reduce((accum, int) => accum += Number(int), 0);
      accum.push({[number]: weight});
      return accum;
    }, []);

  pairs = pairs.sort((a, b) => {
    let [[aVal], [bVal]] = [Object.values(a), Object.values(b)];
    if (aVal === bVal) {
      let [[aKey], [bKey]] = [Object.keys(a), Object.keys(b)];
      if (aKey < bKey) { return -1 }
      else if (aKey > bKey) { return 1 }
      return 0;
    }
    return aVal - bVal;
  });

  return pairs.map(pair => Object.keys(pair)).join(' ');
}

module.exports = problem;
