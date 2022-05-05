const assertEqual = (actual, expected) =>{
  if (actual === expected) {
    return console.log(`🔥 Assertion success:  ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion failed:  ${actual} !== ${expected}`);
  }
};


const countOnly = (allItems, itemsToCount) => {
  let results = {};
  for (items of allItems) {
    if (itemsToCount[items]) {
      if (results[items]) {
        results[items] += 1;
      } else {
        results[items] = 1;
      }
    }
  }
  console.log(results);
  return results;
};

// test cases
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

