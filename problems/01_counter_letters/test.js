const chai = require('chai');
const problem = require('./problem');

describe('Letter count', () => {
  it('Count the letters of a string', () => {
    const result = problem();
    chai.expect(result).equal('letter count');
  });
});
