const chai = require('chai')
const problem = require('./problem')

describe('Up Down', () => {

  it('Correctly describes up', () => {
    let result = problem([1, 2, 3, 4])
    chai.expect(result).to.deep.equal(["up", "up", "up"])
  });

  it('Correctly describes down', () => {
    let result = problem([9, 8, 7, 6])
    chai.expect(result).to.deep.equal(["down", "down", "down"])
  });

  it('Correctly describes even', () => {
    let result = problem([5, 5, 5, 5])
    chai.expect(result).to.deep.equal(["even", "even", "even"])
  });

  it('Correctly describes all changes', () => {
    let result = problem([5, 8, 3, 3])
    chai.expect(result).to.deep.equal(["up", "down", "even"])
  });

});