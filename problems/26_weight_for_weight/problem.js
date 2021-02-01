
const problem = (string) => {
  let pairs = string.split(' ').reduce((acc, n) => {
      acc.push({[n]: n.split('').reduce((acc, int) => acc += Number(int), 0)});
      return acc;
    }, []);

  pairs = pairs.sort((a, b) => {
    let [[aVal], [bVal]] = [Object.values(a), Object.values(b)];
    if (aVal === bVal) {
      return Object.keys(a)[0].localeCompare(Object.keys(b)[0]);
    }
    return aVal - bVal;
  });

  return pairs.map(pair => Object.keys(pair)).join(' ');
}

module.exports = problem;
