const chai = require('chai');
const problem = require('./problem');

describe('Persistent Bugger', () => {

  it('3 steps for 39', () => {
    let result = problem(39);
    chai.expect(result).to.equal(3);
  });

  it('999 steps for 4', () => {
    let result = problem(999);
    chai.expect(result).to.equal(4);
  });

  it('4 steps for 0', () => {
    let result = problem(4);
    chai.expect(result).to.equal(0);
  });

});

