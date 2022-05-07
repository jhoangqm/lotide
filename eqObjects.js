const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    if (Array.isArray(object1[key])) {
      console.log("Array:", object1[key]);
      if (eqArrays(object2[key], object1[key])) {
        return true;
      }
    }
    if (object1[key] !== object2[key]) {
      console.log(
        "object1 key: ",
        object1[key],
        "object2 value: ",
        object2[key]
      );
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
