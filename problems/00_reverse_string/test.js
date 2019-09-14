const chai = require('chai');
const problem = require('./problem')

describe('Reverse String', () => {
  it('Should reverse the letters of a string', () => {
    let result = problem()
    chai.expect(result).equal('candy')
  })
}) 