const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const results1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Kavith: false,
  Joey: false,
});

describe("#countOnly", () => {
  it("should return 1 for result1['Jason']", () => {
    assert.equal(results1["Jason"], 1);
  });

  it("should return { Fang: 2, Jason: 1 } for (firstNames, {'Jason': true, 'Jesus': true, 'Fang': true, 'Kavith': false, 'Joey': true})", () => {
    assert.deepEqual(results1, { Fang: 2, Jason: 1 });
  });

  it("should return undefined for result1['Jesus']", () => {
    assert.equal(results1["Jesus"], undefined);
  });
});
//
