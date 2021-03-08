
const problem = (bonus, price) => {
  // Your code here
  let beeramid = 0;
  let wallet = bonus;

  solver = (price, level) => {
    let cost = price * (level**2);
    wallet -= cost;
    if (wallet >= 0) {
      beeramid += 1;
      solver(price, level + 1);
    }
    return beeramid;
  }

  return solver(price, 1);
}

module.exports = problem;
