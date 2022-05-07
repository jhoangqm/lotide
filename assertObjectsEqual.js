const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    return console.log(
      `🔥🔥🔥🔥 Assertion success:  ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    return console.log(
      `🛑🛑🛑🛑 Assertion failed:  ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

module.exports = assertObjectsEqual;
