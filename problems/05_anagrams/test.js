const chai = require('chai')
const problem = require('./problem')

describe('Anagram', () => {

  it('Determines "pameesxl" and "examples" are anagrams', () => {
    let result = problem('examples', 'pameesxl')
    chai.expect(result).to.equal(true)
  });

  it('Determines "abc" and "ddd" are not anagrams', () => {
    let result = problem('abc', 'ddd')
    chai.expect(result).to.equal(false)
  });

  it('Determines "elvis" and "lives" are anagrams', () => {
    let result = problem('Elvis', 'lives')
    chai.expect(result).to.equal(true)
  });

});