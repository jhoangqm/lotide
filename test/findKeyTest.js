const assert = require("chai").assert;
const findKey = require("../findKey");

const stars = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);

const foodReview = {
  Pho: { review: 10 },
  "Com Ga Nuong": { review: 9 },
  "Bun Bo Hue": { review: 10 },
  "Licorice Candy": { review: 5 },
};

const bestFood = (num) => num.review === 10;
const worstFood = (num) => num.review <= 5;

const review1 = findKey(foodReview, bestFood);
const review2 = findKey(foodReview, worstFood);

describe("findKey function", () => {
  it("should return noma for stars", () => {
    assert.strictEqual(stars, "noma");
  });

  it('should return "Pho" and "Bun Bo Hue" for review1', () => {
    assert.strictEqual(review1, "Pho", "Bun Bo Hue");
  });

  it('should return "Licorice Candy" for review2', () => {
    assert.strictEqual(review2, "Licorice Candy");
  });
});
//
