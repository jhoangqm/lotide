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

const without = function(arr1, arr2) {
  const newArr = arr1.filter((results) => !arr2.includes(results));
// console.log('newArr:', newArr); //debug without function
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
