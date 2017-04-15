/* eslint-env mocha, chai */
/* global sumFor, sumWhile, sumRecursion, sumTheSimpleWay, chai */

const One = ['a', 'b', 'c'];
const Two = [1, 2, 3];

describe('zipList', function () {
  it('should return a single array of six elements', function () {
    chai.expect(zipList(One, Two)).to.have.length(6);
  });
  it('should deep equal the passed six element array', function () {
    chai.expect(zipList(One, Two)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
  });
});
describe('zipListTheSimpleWay', function () {
  it('should return a single array of six elements', function () {
    chai.expect(zipListTheSimpleWay(One, Two)).to.have.length(6);
  });
  it('should deep equal the passed six element array', function () {
    chai.expect(zipListTheSimpleWay(One, Two)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
  });
});
