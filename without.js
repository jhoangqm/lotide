const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const without = function (arr1, arr2) {
  const newArr = arr1.filter((results) => !arr2.includes(results));
  return newArr;
};

module.exports = without;
