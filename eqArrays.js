const assertEqual = (actual, expected) =>{
  if (actual === expected) {
    return console.log(`🔥 Assertion success:  ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion failed:  ${actual} !== ${expected}`);
  }
};

// Create a function which takes in two arrays and returns true or false based on a perfect match
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
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));