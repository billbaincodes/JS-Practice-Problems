const chai = require('chai');
const problem = require('./problem');

const square2 = [[1, 0], [0, 1]]

describe("Diagonal Sums", () => {

  it("Sums 3, 4", () => {
    let square2 = [
      [3, 0],
      [0, 4]
    ]

    let result = problem(square2)
    chai.expect(result).to.equal(7)
  });

  it("Sums 1, 1, 1, 1", () => {
    let square4 = [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]]

    let result = problem(square4);
    chai.expect(result).to.equal(4)
  });


  it("Sums 0, 0, 0, 0", () => {
    let square4 = [
      [0, 9, 9, 9],
      [9, 0, 9, 9],
      [9, 9, 0, 9],
      [9, 9, 9, 0]]

    let result = problem(square4);
    chai.expect(result).to.equal(0)
  });

  it("Sums 2, 1, 9, 3, 4", () => {
    let square5 =
      [[2, 5, 1, 3, 9],
      [4, 1, 3, 0, 8],
      [1, 0, 9, 7, 6],
      [1, 7, 7, 3, 0],
      [3, 3, 8, 2, 4]]

    let result = problem(square5);
    chai.expect(result).to.equal(19)
  });

});

