const { expect } = require("chai");
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("findKeyByValue function", () => {
  it("should search for a key on an object that matches a given value", () => {
    expect(findKeyByValue(bestTVShowsByGenre, "The Wire")).to.equal("drama");
  });
  it("should return undefined if the search value doesn't exist on an object", () => {
    expect(findKeyByValue(bestTVShowsByGenre, "That '70s Show")).to.equal(
      undefined
    );
  });
});
//
