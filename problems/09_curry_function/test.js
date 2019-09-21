const chai = require('chai');
const problem = require('./problem.js');

describe('Curry Function', () => {

  it('Should sum 1, 1 to 2', () => {
    let result = problem(1)(1);
    chai.expect(result).to.equal(2)
  });

  it('Should sum 20, 20 to 40', () => {
    let result = problem(20)(20);
    chai.expect(result).to.equal(40)
  });

  it('Should sum 100, 5 to 105', () => {
    let result = problem(100)(5);
    chai.expect(result).to.equal(105)
  });

  it('Should sum 81, 18 to 99', () => {
    let result = problem(81)(18);
    chai.expect(result).to.equal(99)
  });

});

