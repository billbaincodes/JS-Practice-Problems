const chai = require('chai');
const problem = require('./problem');

describe('problem name', () => {

  it('should sort alphabetically by last name', () => {
    let result = problem(`Tony:Tanker;Abatha:Abagnale`);
    chai.expect(result).to.equal('(ABAGNALE, ABATHA)(TONY, TANKER)')
  });

  it('should sort alphabetically by first name with same last name', () => {
    let result = problem(`Tony:Tanker;Tanya:Tanker`);
    chai.expect(result).to.equal('(TANKER,TANYA)(TANKER,TONY)')
  });

});

