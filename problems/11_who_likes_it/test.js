const chai = require('chai');
const problem = require('./problem');

describe('Who likes it?', () => {

  it('Displays zero likes', () => {
    let result = problem([]);
    chai.expect(result).to.equal("No one likes this")
  });

});

