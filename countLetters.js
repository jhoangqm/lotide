const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`🔥 Assertion success:  ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion failed:  ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  const results = {};
  const noSpaces = string.split(" ").join("");
  for (letter of noSpaces) {
    if (letter.match(/[a-zA-Z]/i)) {
      if (results[letter]) {
        results[letter] += 1;
      } else results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));
