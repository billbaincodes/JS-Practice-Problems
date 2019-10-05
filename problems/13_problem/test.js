const chai = require('chai');
const problem = require('./problem');

describe('Directions Reduction', () => {

  it('Cancels out usesless directions', () => {
    let result = problem(["NORTH", "SOUTH", "EAST", "WEST"]);
    chai.expect(result).to.deep.equal([])
  });

  it('Doesnt reduce valid directions', () => {
    let result = problem(["NORTH", "WEST", "SOUTH", "EAST"]);
    chai.expect(result).to.deep.equal(["NORTH", "WEST", "SOUTH", "EAST"])
  });

  it('Does both correctly', () => {
    let result = problem(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
    chai.expect(result).to.deep.equal(["WEST"])
  });

});

