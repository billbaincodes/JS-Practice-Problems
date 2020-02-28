const chai = require('chai');
const problem = require('./problem');

describe('time formatter', () => {
  it('should handle zero', () => {
    let result = problem(0);
    chai.expect(result).to.equal('now')
  });

  it('should handle seconds', () => {
    let result = problem(1);
    chai.expect(result).to.equal('1 second')
  });

  it('should handle minutes', () => {
    let result = problem(62);
    chai.expect(result).to.equal('1 minute and 2 seconds')
  });

  it('should use one unit of time when possible ', () => {
    let result = problem(120);
    chai.expect(result).to.equal('2 minutes')
  });

  it('should handle hours ', () => {
    let result = problem(3600);
    chai.expect(result).to.equal('1 hour')
  });

  it('advanced cases', () => {
    let result = problem(3662);
    chai.expect(result).to.equal('1 hour, 1 minute and 2 seconds')
  });
});

