const chai = require('chai');
const problem = require('./problem');

describe('problem name', () => {

  it('Encodes din', () => {
    let result = problem('din');
    chai.expect(result).to.equal('(((')
  });

  it('Encodes recede', () => {
    let result = problem('recede');
    chai.expect(result).to.equal('()()()')
  });

  it('Encodes Success', () => {
    let result = problem('Success');
    chai.expect(result).to.equal(')())())')
  });

  it('Encodes (( @', () => {
    let result = problem('(( @');
    chai.expect(result).to.equal('))((')
  });

});

