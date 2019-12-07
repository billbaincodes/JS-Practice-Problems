const chai = require('chai');
const problem = require('./problem');

describe('Missing Letter', () => {

  it('Finds missing lowercase letter', () => {
    let result = problem(["a","b","c","d","f"]);
    chai.expect(result).to.equal('e')
  });
  
  it('Finds missing uppercase letter', () => {
    let result = problem(["O","Q","R","S"]);
    chai.expect(result).to.equal('P') 
  });

});
