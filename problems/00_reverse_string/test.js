const chai = require('chai');
const problem = require('./problem')

describe('Reverse String', () => {

  it('Should reverse the letters in "Hello World!"', () => {
    let result = problem('Hello World!')
    chai.expect(result).equal('!dlroW olleH')
  })

  it('Should reverse the letters in "Reservoir Dogs"', () => {
    let result = problem('Reservoir Dogs')
    chai.expect(result).equal('sgoD riovreseR')
  })

  it('Should reverse the letters in "!1Ab;>"', () => {
    let result = problem('!1Ab;>')
    chai.expect(result).equal('>;bA1!')
  })

}) 