const chai = require('chai');
const problem = require('./problem');

describe('Weight for weight', () => {

  it('Sorts by sum of integer values', () => {
    let result = problem("601 101 56");
    chai.expect(result).to.equal('101 601 56')
  });

  it('Sort identical weights normally', () => {
    let result = problem("202 400 103");
    chai.expect(result).to.equal('103 202 400')
  });

  it('Harder still', () => {
    let result = problem("103 123 4444 99 2000");
    chai.expect(result).to.equal('2000 103 123 4444 99')
  });

  it('Hardest weights', () => {
    let result = problem("2000 10003 1234000 44444444 9999 11 11 22 123");
    chai.expect(result).to.equal("11 11 2000 10003 22 123 1234000 44444444 9999")
  });

});

