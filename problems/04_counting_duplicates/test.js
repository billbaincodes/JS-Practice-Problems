const chai = require('chai')
const problem = require('./problem')

describe('Counting Duplicates', () => {

  it('Correctly counts "abcde"', () => {
    let result = problem('abcde')
    chai.expect(result).to.equal(0)
  });

  it('Correctly counts "indivisibilities"', () => {
    let result = problem('indivisibilities')
    chai.expect(result).to.equal(2)
  });

  it('Correctly counts "aA11"', () => {
    let result = problem('aA11')
    chai.expect(result).to.equal(2)
  });

});