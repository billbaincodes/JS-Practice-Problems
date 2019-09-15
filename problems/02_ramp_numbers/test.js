const chai = require('chai');
const problem = require('./problem');

describe('Ramp Numbers', () => {
  it('Determines if 1367 is a ramp', () => {
    const result = problem(1367);
    chai.expect(result).to.equal(true);
  });
  it('Determines if 886410 is a ramp', () => {
    const result = problem(886410);
    chai.expect(result).to.equal(false);
  });
  it('Determines if 1122 is a ramp', () => {
    const result = problem(1122);
    chai.expect(result).to.equal(true);
  });
  it('Determines if 1648 is a ramp', () => {
    const result = problem(1648);
    chai.expect(result).to.equal(false);
  });
});
