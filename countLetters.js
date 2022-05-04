const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`🔥 Assertion success:  ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion failed:  ${actual} !== ${expected}`);
  }
};

// Creating a function that will take in a sentence and then return a count of each of the letters.
const countLetters = function (string) {
  // Store the results in an object
  const results = {};
  // Define a variable that removes spaces from a string
  const noSpaces = string.split(" ").join("");
  // debugging console.log(noSpaces);
  // for..of loop
  for (letter of noSpaces) {
    // debugging console.log(letter);
    // using .match method regex!!
    if (letter.match(/[a-zA-Z]/i)) {
      if (results[letter]) {
        results[letter] += 1;
      } else results[letter] = 1;
    }
  }
  // return results
  return results;
};

// test cases?
// const expected = {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// };

console.log(countLetters("lighthouse in the house"));
