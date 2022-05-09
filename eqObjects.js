const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    // added recursion if it's an typeof Object
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (
      typeof object1[key] === "object" &&
      typeof object2[key] === "object"
    ) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// Old eqObjects just in case
/*
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

*/

module.exports = eqObjects;
