const chai = require('chai');
const problem = require('./problem');

describe('Character count', () => {
  it('Count the letters of a string', () => {
    const result = problem('Hello World!');
    chai.expect(result).to.deep.equal({
      l: 3,
      o: 2,
      h: 1,
      e: 1,
      w: 1,
      r: 1,
      d: 1,
      '!': 1,
    });
  });
});
