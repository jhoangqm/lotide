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
// Create functions
const even = (array) => array.length % 2 === 0 && array.length > 2;
const middle = function(array) {
  // define variable as middle array
  let midArray = [];
  let findMiddle = Math.floor(array.length / 2);
  // if the length of the array is uneven return the middle index
  if (array.length < 3) return midArray;
  // if the array is even, return results of mid array
  if (!even(array)) {
    midArray.push(array[findMiddle]); return midArray;
  }
  // slice the array of find middle and return mid array
  midArray = array.slice(findMiddle - 1, findMiddle + 1);
  return midArray;

};
// Testing the function middle
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(assertArraysEqual(middle([1]), [])); // => []
console.log(assertArraysEqual(middle([1, 2]), [])); // => []
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // => [3]
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // => [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]