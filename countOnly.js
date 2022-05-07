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

module.exports = countOnly;
