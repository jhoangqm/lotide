const assertEqual = require("./assertEqual");

const findKey = (object, callback) => {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
