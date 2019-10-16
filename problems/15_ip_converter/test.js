const chai = require('chai');
const problem = require('./problem');

describe('IP Converter', () => {

  it('Converts 192.168.1.1', () => {
    let result = problem('192.168.1.1');
    chai.expect(result).to.equal(3232235777)
  });

  it('Converts 10.0.0.0', () => {
    let result = problem('10.0.0.0');
    chai.expect(result).to.equal(167772160)
  });

  it('Converts 176.16.0.1', () => {
    let result = problem('176.16.0.1');
    chai.expect(result).to.equal(2953838593)
  });

});

