const chai = require('chai');
const problem = require('./problem');

describe('Pete the Baker', () => {

  it('Returns more cakes when more ingredients are available', () => {
    let result = problem(
      { flour: 500, sugar: 200, eggs: 1 }, 
      { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
    );
    chai.expect(result).to.equal(2)
  });

  it('Returns 0 when not enough ingredients are available.', () => {
    let result = problem(
      {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
      {sugar: 500, flour: 2000, milk: 2000}
    );
    chai.expect(result).to.equal(0)
  });

  it('Returns correct cakes for large availability.', () => {
    let result = problem(
      {"cream":64,"apples":41,"eggs":76},
      {"cream":4300,"flour":4600,"apples":6600,"crumbles":1900,"sugar":8600,"milk":3800,"cocoa":5000,"chocolate":2600,"eggs":6500,"pears":2700,"oil":8500,"butter":2900,"nuts":6500}
    );
    chai.expect(result).to.equal(67)
  });

});

