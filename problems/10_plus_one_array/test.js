const chai = require('chai');
const problem = require('./problem.js');

describe('+1 Array', () => {

  it('Returns null for invalid input', () => {
    let result = problem([1, -9]);
    chai.expect(result).to.equal(null);
  });


  it('Correctly +1\'s [2, 3, 9]', () => {
    let result = problem([2, 3, 9]);
    chai.expect(result).to.equal([2, 4, 0]);
  });

});

