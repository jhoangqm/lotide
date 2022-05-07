const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const even = (array) => array.length % 2 === 0 && array.length > 2;
const middle = function (array) {
  let midArray = [];
  let findMiddle = Math.floor(array.length / 2);
  if (array.length < 3) return midArray;
  if (!even(array)) {
    midArray.push(array[findMiddle]);
    return midArray;
  }
  midArray = array.slice(findMiddle - 1, findMiddle + 1);
  return midArray;
};

module.exports = middle;
