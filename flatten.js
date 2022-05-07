const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const flatten = function (arr) {
  let newArr = arr.reduce((previous, current) => {
    return previous.concat(current);
  }, []);
  return newArr;
};

module.exports = flatten;
