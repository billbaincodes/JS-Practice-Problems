const chai = require('chai');
const { problemA, problemB } = require('./problem');

describe('IP Converter', () => {

  it('Converts 192.168.1.1', () => {
    let result = problemA('192.168.1.1');
    chai.expect(result).to.equal(3232235777)
  });

  it('Converts 10.0.0.0', () => {
    let result = problemA('10.0.0.0');
    chai.expect(result).to.equal(167772160)
  });

  it('Converts 176.16.0.1', () => {
    let result = problemA('176.16.0.1');
    chai.expect(result).to.equal(2953838593)
  });



  it('Converts 3232235777', () => {
    let result = problemB(3232235777);
    chai.expect(result).to.deep.equal('192.168.1.1')
  });

  it('Converts 167772160', () => {
    let result = problemB(167772160);
    chai.expect(result).to.deep.equal('10.0.0.0')
  });

  it('Converts 2953838593', () => {
    let result = problemB(2953838593);
    chai.expect(result).to.deep.equal('176.16.0.1')
  });

  

});

