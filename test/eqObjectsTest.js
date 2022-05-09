const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

const ab = { a: "1", b: "2" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

const isNested = { a: 1, b: 2, c: { c: 3 } };
const notNested = { a: 1, b: 2, c: 3 };
const similarNest = { a: 1, b: 2, c: { c: 3 } };
const differentNest = { a: 1, b: 3, c: { c: 3 }, d: 6 };

describe("#eqObjects", () => {
  it('should return true for ({ a: "1", b: "2" }, { b: "2", a: "1" })', () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });

  it("should return false for (ab, abc)", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it("should return true for (cd, dc)", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it("should return false for (cd, cd2)", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });

  it("should return true for (isNested, similarNest)", () => {
    assert.deepEqual(eqObjects(isNested, similarNest), true);
  });

  it("should return false for (isNested, notNested)", () => {
    assert.deepEqual(eqObjects(isNested, notNested), false);
  });

  it("should return false for (isNested, differentNest)", () => {
    assert.equal(eqObjects(isNested, differentNest), false);
  });
});
