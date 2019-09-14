const chai = require('chai');
const problem = require('./problem')

describe('Reverse String', () => {
  it('Should reverse the letters of a string', () => {
    let result = problem('Hello World!')
    chai.expect(result).equal('!dlroW olleH')
  })
}) 