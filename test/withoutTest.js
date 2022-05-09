const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("should return [2, 3], for ([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('should return ["1", "2"], for (["1", "2", "3"], [1, 2, "3"])', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});

// console.log(
//   assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
// );
module.exports = without;
