const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("should return true for ([1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return false for ([1, 2, 3], [3, 2, 1])", () => {
    const output = eqArrays([1, 2, 3], [3, 2, 1]);
    const result = false;
    assert.deepEqual(output, result);
  });

  it('should return false for (["1", "2", "3"], ["1", "2", 3])', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("should return true for matching nested arrays", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it("should return false for unmatching  nested arrays", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

  it("should return false for unmatching  nested arrays", () => {
    assert.deepEqual(
      eqArrays(
        [
          [2, 3],
          [4, 5],
          [5, 7],
        ],
        [
          [2, 3],
          [4, 6],
          [5, 7],
        ]
      ),
      false
    );
  });
});
//
