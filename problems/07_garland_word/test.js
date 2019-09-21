const chai = require('chai')
const problem = require('./problem.js')

describe('New Test', () => {

  it('Finds 0 in "programmer"', () => {
    let result = problem('programmer')
    chai.expect(result).to.equal(0)
  });

  it('Finds 1, "c", in "ceramic"', () => {
    let result = problem('ceramic')
    chai.expect(result).to.equal(1)
  });

  it('Finds 2, "on, in "onion"', () => {
    let result = problem('onion')
    chai.expect(result).to.equal(2)
  });

  it('Finds 4, "alfa", in "alfalfa"', () => {
    let result = problem('alfalfa')
    chai.expect(result).to.equal(4)
  });

  it('Finds 4, "hots", in "hotshots"', () => {
    let result = problem('hotshots')
    chai.expect(result).to.equal(4)
  });

});