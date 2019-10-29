const chai = require('chai');
const problem = require('./problem');

describe('Password Validator', () => {

  describe('Length requirement', () => {
    it('Too short', () => {
      let result = problem('pass');
      chai.expect(result).to.be.false
    });

    it('Correct length', () => {
      let result = problem('password');
      chai.expect(result).to.be.true
    });
  })

  describe('Lowercase requirement', () => {
    it('Rejects password without lowercase letter', () => {
      let result = problem('PASSWORD');
      chai.expect(result).to.be.false
    });

    it('Accepts a password with a lowercase letter', () => {
      let result = problem('Password');
      chai.expect(result).to.be.true
    });
  })

  describe('Uppercase requirement', () => {
    it('Rejects password without uppercase letter', () => {
      let result = problem('password');
      chai.expect(result).to.be.false
    });

    it('Accepts a password with an uppercase letter', () => {
      let result = problem('Password');
      chai.expect(result).to.be.true
    });
  })

  describe('Contains a number', () => {
    it('Rejects password without a number', () => {
      let result = problem('password');
      chai.expect(result).to.be.false
    });

    it('Accepts a password with a number', () => {
      let result = problem('password123');
      chai.expect(result).to.be.true
    });
  })

  describe('Contains only alphanumerics', () => {
    it('Rejects invalid characters', () => {
      let result = problem('password@#$%^');
      chai.expect(result).to.be.false
    });

    it('Accepts letters and numbers', () => {
      let result = problem('1A2b3c4d');
      chai.expect(result).to.be.true
    });
  })

  describe('Checks all requirements', () => {
    it('Accepts valid password #1', () => {
      let result = problem('djI38D55');
      chai.expect(result).to.be.true
    });

    it('Accepts a valid password', () => {
      let result = problem('a2.d412');
      chai.expect(result).to.be.false
    });
  })


});

