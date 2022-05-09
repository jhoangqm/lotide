const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3, "dog"], [1, 2, 3, "dog"]);

module.exports = assertArraysEqual;
//
