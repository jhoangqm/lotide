const assertEqual = require("./assertEqual");

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

module.exports = countLetters;
