const chai = require('chai');
const problem = require('./problem');

describe('Password Validator', () => {

    it('Checks length', () => {
      let result = problem('aB1');
      chai.expect(result).to.be.false
    });

    it('Checks for a lowercase letter', () => {
      let result = problem('PASSWORD1234');
      chai.expect(result).to.be.false
    });

    it('Checks for an uppercase letter', () => {
      let result = problem('password1');
      chai.expect(result).to.be.false
    });

    it('Checks for a number', () => {
      let result = problem('StrongPassworD');
      chai.expect(result).to.be.false
    });

    it('Accepts valid example #1', () => {
      let result = problem('djI38D55');
      chai.expect(result).to.be.true
    });

    it('Accepts valid example #2', () => {
      let result = problem('adfgr234SDF');
      chai.expect(result).to.be.true
    });

    it('Accepts valid example #3', () => {
      let result = problem('4c1dbuRn');
      chai.expect(result).to.be.true
    });

});

