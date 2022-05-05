const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`🔥 Assertion success:  ${arr1} === ${arr2}`);
  } else {
    return console.log(`🛑 Assertion failed:  ${arr1} !== ${arr2}`);
  }
};

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    // console.log("item BEFORE: ", item);
    // console.log("item AFTER: ", callback(item));
    // console.log("---");
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(
  map(["1111", "1245", "12345"], (test) => test[0], ["2", "3"])
);
assertArraysEqual(map(["11", "12345"], (test) => test[0] + "lol", ["2", "3"]));
assertArraysEqual(map(["1111", "1245", "12345"], (test) => test / 2, [2, 3]));
