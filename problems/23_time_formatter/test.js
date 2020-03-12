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

  it('should handle hours', () => {
    let result = problem(3600);
    chai.expect(result).to.equal('1 hour')
  });

  it('should handle days', () => {
    let result = problem(15731080);
    chai.expect(result).to.equal('182 days, 1 hour, 44 minutes and 40 seconds')
  });

  it('should handle years', () => {
    let result = problem(253374061);
    chai.expect(result).to.equal('8 years, 12 days, 13 hours, 41 minutes and 1 second')
  });

  it('advanced cases', () => {
    let result = problem(3662);
    chai.expect(result).to.equal('1 hour, 1 minute and 2 seconds')
  });
});

