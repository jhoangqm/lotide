const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
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
// This challenge is similar to countLetters and allows us to spend some more time
// solving problems with objects.

// We'll implement a new function letterPositions which will return all the indices
// (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences,
// multiple numbers may be needed to represent all the places in the string that it shows up

// Create function that will take the sentence and show the position of each letter and its occurences
const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].match(/[a-zA-Z]/i)) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
console.log(letterPositions("hello how are you"));
assertArraysEqual(letterPositions("how are you").e, [6]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
