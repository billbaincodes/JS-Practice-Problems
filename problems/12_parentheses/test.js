const chai = require('chai');
const problem = require('./problem');

describe('Parentheses', () => {

  it('Find "()" to be true', () => {
    let result = problem('()');
    chai.expect(result).to.equal(true)
  });

  it('Find ")(()))" to be false', () => {
    let result = problem(')(()))');
    chai.expect(result).to.be.false
  });

  it('Find "(" to be false', () => {
    let result = problem('(');
    chai.expect(result).to.equal(false)
  });

  it('Find "(())((()())())" to be true', () => {
    let result = problem('(())((()())())');
    chai.expect(result).to.equal(true)
  });

});

