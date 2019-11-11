const chai = require('chai');
const problem = require('./problem');

describe('Generate Integer Range', () => {
  it('Calculates range for 2, 10, 2', () => {
    let result = problem(2, 10, 2);
    chai.expect(result).to.deep.equal([2, 4, 6, 8, 10])
  });

  it('Calculates range for 1, 10, 3', () => {
    let result = problem(1, 10, 3);
    chai.expect(result).to.deep.equal([1, 4, 7, 10])
  });

  it('Calculates range for 1, 10, 5', () => {
    let result = problem(1, 10, 5);
    chai.expect(result).to.deep.equal([1, 6])
  });

  it('Calculates range for 1, 10, 4', () => {
    let result = problem(1, 10, 4);
    chai.expect(result).to.deep.equal([1, 5, 9])
  });
});

