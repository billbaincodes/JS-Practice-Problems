const chai = require("chai");
const problem = require("./problem");

describe("Directions Reduction", () => {
  it("Cancels out usesless directions", () => {
    let result = problem(["NORTH", "SOUTH", "EAST", "WEST"]);
    chai.expect(result).to.deep.equal([]);
  });

  it("Doesnt reduce valid directions", () => {
    let result = problem(["NORTH", "WEST", "SOUTH", "EAST"]);
    chai.expect(result).to.deep.equal(["NORTH", "WEST", "SOUTH", "EAST"]);
  });

  it("Does both correctly, ex1", () => {
    let result = problem([
      "NORTH",
      "SOUTH",
      "SOUTH",
      "EAST",
      "WEST",
      "NORTH",
      "WEST"
    ]);
    chai.expect(result).to.deep.equal(["WEST"]);
  });

  it("Does both correctly, ex2", () => {
    let result = problem([
      "EAST",
      "EAST",
      "WEST",
      "NORTH",
      "WEST",
      "EAST",
      "EAST",
      "SOUTH",
      "NORTH",
      "WEST"
    ]);
    chai.expect(result).to.deep.equal(["EAST", "NORTH"]);
  });

  it("Does both correctly, ex3", () => {
    let result = problem([
    'EAST',
    'WEST',
    'SOUTH',
    'NORTH',
    'EAST',
    'SOUTH',
    'EAST',
    'WEST',
    'SOUTH',
    'NORTH']);
    chai.expect(result).to.deep.equal(["EAST", "SOUTH"]);
  });



});