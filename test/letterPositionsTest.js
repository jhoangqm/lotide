const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

const results1 = letterPositions("hello");
const results2 = letterPositions("lighthouse in the house");

describe("#letterPositions", () => {
  it("should return [0] for results1['h']", () => {
    assert.deepEqual(results1["h"], [0]);
  });

  it("should return [3, 5, 15, 18] for results2['h']", () => {
    assert.deepEqual(results2["h"], [3, 5, 15, 18]);
  });
});
//
