const chai = require('chai');
const problem = require('./problem');

describe('Who likes it?', () => {

  it('Displays zero likes', () => {
    let result = problem([]);
    chai.expect(result).to.equal("No one likes this")
  });

  it('Displays one like', () => {
    let result = problem(['Peter']);
    chai.expect(result).to.equal("Peter likes this")
  });

  it('Displays two likes', () => {
    let result = problem(["Jacob", "Alex"]);
    chai.expect(result).to.equal("Jacob and Alex like this")
  });

  it('Displays three likes', () => {
    let result = problem(["Max", "John", "Mark"]);
    chai.expect(result).to.equal("Max, John and Mark like this")
  });

  it('Displays four or more likes', () => {
    let result = problem(["Alex", "Jacob", "Mark", "Max"]);
    chai.expect(result).to.equal("Alex, Jacob and 2 others like this")
  });


});

