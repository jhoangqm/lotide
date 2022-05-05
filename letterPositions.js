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
