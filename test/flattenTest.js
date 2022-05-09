const flatten = require("../flatten");
const assert = require("chai").assert;

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("should return [1] for [1]", () => {
    assert.deepEqual(flatten([1]), [1]);
  });

  it("should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] for [1, 2, [3, 4, 5, 6, 7], 8, [9, 10]]", () => {
    assert.deepEqual(
      flatten([1, 2, [3, 4, 5, 6, 7], 8, [9, 10]]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    );
  });
});
