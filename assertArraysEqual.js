
const eqArrays = function(arr1, arr2) {
  // define a boolean value of a variable start with false
    let equal = false;
    // for loop to increment to check elements in each array via an index
    for (let i = 0; i < arr1.length; i++) {
      // if both array indexes are equal the variable will be true
      if (arr1[i] === arr2[i]) {
        equal = true;
        // otherwise the variable will be false
      } else {
        equal = false;
      }
    }
    // return results to see if both are perfect match
    return equal;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`🔥 Assertion success:  ${arr1} === ${arr2}`);
  } else {
    return console.log(`🛑 Assertion failed:  ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => false
