const { assert } = require("chai");
const countLetters = require("../countLetters");

const results1 = countLetters("how are you today");
const results2 = countLetters("lighthouse in the house");

describe("#countLetters", () => {
  it("should return 1 for results1['t']", () => {
    assert.strictEqual(results1["t"], 1);
  });
  it("should return 4 for results2['h']", () => {
    assert.strictEqual(results2["h"], 4);
  });
});
//
