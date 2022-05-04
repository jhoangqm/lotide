//flatten is a function which does something like this. 
// Given an array with other arrays inside, it can flatten it into a single-level array.

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`🔥 Assertion success:  ${arr1} === ${arr2}`);
  } else {
    return console.log(`🛑 Assertion failed:  ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => false
console.log(flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
