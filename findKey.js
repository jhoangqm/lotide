const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`🔥 Assertion success:  ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion failed:  ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
    return undefined;
  }
};

// test case
assertEqual(
  findKey(
    "noma",
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  )
); // => "noma"
