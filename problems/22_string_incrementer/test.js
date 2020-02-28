const chai = require('chai');
const problem = require('./problem');

describe('string incrementer', () => {
  it('Start at one: foo -> foo1', () => {
    let result = problem('foo');
    chai.expect(result).to.equal('foo1')
  });

  it('Increment: foobar23 -> foobar24', () => {
    let result = problem('foobar23');
    chai.expect(result).to.equal('foobar24')
  });

  it('Ignore zeroes: foo0042 -> foo0043', () => {
    let result = problem('foo0042');
    chai.expect(result).to.equal('foo0043')
  });

  it('should use existing zero columns', () => {
    let result = problem('foo099');
    chai.expect(result).to.equal('foo100')
  });

  it('handle just numbers', () => {
    let result = problem('009');
    chai.expect(result).to.equal('010')
  });

  it('should do it all', () => {
    let result = problem('foobar000');
    chai.expect(result).to.equal('foobar001')

    let result2 = problem('foo0099');
    chai.expect(result2).to.equal('foo0100')
  })
});
