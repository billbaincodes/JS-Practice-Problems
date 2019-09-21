const chai = require('chai');
const problem = require('./problem');

describe('Character count', () => {

  it('Counts nothing from an empty string', () => {
    const result = problem('');
    chai.expect(result).to.deep.equal({});
  });

  it('Counts the letters in "Paparazzi"', () => {
    const result = problem('Paparazzi');
    chai.expect(result).to.deep.equal({
      p: 2,
      a: 3,
      r: 1,
      z: 2,
      i: 1
    });
  });



  it('Counts the letters in "Hello World!"', () => {
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
