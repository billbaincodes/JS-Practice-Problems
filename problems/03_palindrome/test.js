const chai = require('chai');
const problem = require('./problem');

describe('Palindrome', () => {
  it('Determines "madam" is a palindrome', () => {
    const result = problem('madam');
    chai.expect(result).to.equal(true);
  });
  it('Determines "vertigo" is not a palindrome', () => {
    const result = problem('vertigo');
    chai.expect(result).to.equal(false);
  });
  it('Determines "A man, a plan, a canal, Panama!" is a palindrome', () => {
    const result = problem('A man, a plan, a canal, Panama!');
    chai.expect(result).to.equal(true);
  });
  it('Determines "elvis lives" is not a palindrome', () => {
    const result = problem('elvis lives');
    chai.expect(result).to.equal(false);
  });
});
