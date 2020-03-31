const chai = require('chai');
const problem = require('./problem');

describe('Next Bigger Number', () => {
  it('return -1 for impossible cases', () => {
    let result = problem(9);
    chai.expect(result).to.equal(-1)
  });

  it('return -1 for impossible cases', () => {
    let result = problem(321);
    chai.expect(result).to.equal(-1)
  });

  it('should find 21 after 12', () => {
    let result = problem(12);
    chai.expect(result).to.equal(21)
  });

  it('should find 531 after 513', () => {
    let result = problem(513);
    chai.expect(result).to.equal(531)
  });

  it('should find 2071 after 2017', () => {
    let result = problem(2017);
    chai.expect(result).to.equal(2071)
  });
});
