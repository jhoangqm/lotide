const assertObjectsEqual = require("../assertObjectsEqual");

assertObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 });
assertObjectsEqual({ a: 1, b: 5 }, { a: 1, b: 5 });

module.exports = assertObjectsEqual;
//
