const chai = require('chai');
const problem = require('./problem');

describe('Letter count', () => {
  it('Count the letters of a string', () => {
    const result = problem('Hello World!');
    chai.expect(result).equal({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      w: 1,
      r: 1,
      d: 1,
    });
  });
});
