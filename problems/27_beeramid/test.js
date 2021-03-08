const chai = require('chai');
const problem = require('./problem');

describe('Beeramid', () => {
  it('Creates a small beeramid', () => {
    let result = problem(9, 2);
    chai.expect(result).to.equal(1)
  });

  it('Creates a medium beeramid', () => {
    let result = problem(21, 1.5);
    chai.expect(result).to.equal(3)
  });

  it('Creates a large beeramid', () => {
    let result = problem(454, 5);
    chai.expect(result).to.equal(5)
  });

  it('Creates any beeramid', () => {
    let result = problem(455, 5);
    chai.expect(result).to.equal(6)
  });
});

