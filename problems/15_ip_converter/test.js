const chai = require('chai');
const problem = require('./problem');

describe('IP Converter', () => {

  it('Converts 192.168.1.1', () => {
    let result = problem('192.168.1.1');
    chai.expect(result).to.equal(3232235777)
  });

});

