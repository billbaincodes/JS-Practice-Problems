const chai = require('chai');
const problem = require('./problem');

describe('Sum of Differences', () => {
  it('Computes positive numbers', () => {
    let result = problem([1, 2, 10]);
    chai.expect(result).to.equal(9)
  });

  it('Computes negative numbers', () => {
    let result = problem([-3, -2, -1] );
    chai.expect(result).to.equal(2)
  });

  it('Computes negative numbers', () => {
    let result = problem([-2,5,-5,-15,-19,-13]);
    chai.expect(result).to.equal(24)
  });

});

