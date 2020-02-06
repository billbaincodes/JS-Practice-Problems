const chai = require('chai');
const problem = require('./problem');

describe('string incrementer', () => {
  it('should start counting at 1 if no number present', () => {
    let result = problem('foo');
    chai.expect(result).to.equal('foo1')
  });

  it('should add to number if present', () => {
    let result = problem('foobar23');
    chai.expect(result).to.equal('foobar24')
  });

  it('ignore leading zeros', () => {
    let result = problem('foo0042');
    chai.expect(result).to.equal('foo0043')
  });

  it('should use existing zero columns', () => {
    let result = problem('foo099');
    chai.expect(result).to.equal('foo100')
  });
});

