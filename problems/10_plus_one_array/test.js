const chai = require('chai');
const problem = require('./problem.js');

describe('+1 Array', () => {

  it('Returns null for invalid input', () => {
    let result = problem([1, -9]);
    chai.expect(result).to.be.null;
  });

  it('Correctly +1\'s [9, 9] to 100', () => {
    let result = problem([9, 9]);
    chai.expect(result).to.deep.equal([1, 0, 0]);
  });

  it('Correctly +1\'s [2, 3, 9] to 240', () => {
    let result = problem([2, 3, 9]);
    chai.expect(result).to.deep.equal([2, 4, 0]);
  });

  it('Correctly +1\'s [4, 3, 2, 5] to 4326', () => {
    let result = problem([4, 3, 2, 5]);
    chai.expect(result).to.deep.equal([4, 3, 2, 6]);
  });

});

