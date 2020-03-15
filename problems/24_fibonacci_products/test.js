const chai = require('chai');
const problem = require('./problem');

describe('problem name', () => {
  it('40 is a fib product of 5 * 8', () => {
    let result = problem(40);
    chai.expect(result).to.deep.equal([ 5, 8, true ])
  });

  it('4895 is a fib product of 55 * 89', () => {
    let result = problem(4895);
    chai.expect(result).to.deep.equal([ 55, 89, true ])
  });

  it('5895 is in between fibs 89 * 144', () => {
    let result = problem(5895);
    chai.expect(result).to.deep.equal([ 89, 144, false ])
  });

  it('74049690 is a fib product of 6765 * 10946', () => {
    let result = problem(74049690);
    chai.expect(result).to.deep.equal([ 6765, 10946, true ])
  });
});

/*
Test.assertSimilar(productFib(4895), [55, 89, true])
Test.assertSimilar(productFib(5895), [89, 144, false])
Test.assertSimilar(productFib(74049690), [6765, 10946, true])
*/
