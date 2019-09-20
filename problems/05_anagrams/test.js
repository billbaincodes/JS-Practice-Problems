const chai = require('chai')
const problem = require('./problem')

describe('Anagram', () => {

  it('Determines "pameesxl" and "examples" is an anagram', () => {
    let result = problem('examples', 'pameesxl')
    chai.expect(result).to.equal(true)
  });

  it('Determines "abc" and "cba" is not an anagram', () => {
    let result = problem('cba', 'ccc')
    chai.expect(result).to.equal(false)
  });

});