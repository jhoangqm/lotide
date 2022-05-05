const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    if (Array.isArray(object1[key])) {
      if (eqArrays(object2[key], object1[key])) {
        return true;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

// assertObjectsEqual(cd, dc);
// assertObjectsEqual(cd, cd2);
