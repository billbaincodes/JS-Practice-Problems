const chai = require('chai');
const problem = require('./problem');

describe('Password Validator', () => {

  describe('At least 6 chars long', () => {
    it('Too short', () => {
      let result = problem('pass');
      chai.expect(result).to.be.false
    });

    it('Correct length', () => {
      let result = problem('password');
      chai.expect(result).to.be.true
    });
  })


});

