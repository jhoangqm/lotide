const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`🔥 Assertion success:  ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion failed:  ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  // two objects are equal when they have same numbers of keys
  // create two variables to store data of object
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // if keys length is not equal return false
  if (keys1.length !== keys2.length) return false;
  // loop through keys of one object
  for (const key of keys1) {
    // Check if there's a key that holds an array in object
    if (Array.isArray(object1[key])) {
      console.log("Array:", object1[key]);
      // call the eqArrays function
      if (eqArrays(object2[key], object1[key])) {
        return true;
      }
    }
    // compare both values of keys1 to see if they're the same return false if yes
    if (object1[key] !== object2[key]) {
      console.log(
        "object1 key: ",
        object1[key],
        "object2 value: ",
        object2[key]
      );
      return false;
    }
  }
  // otherwise return true
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba)); // => true

//const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

// testing debug
// console.log(eqObjects(ab, ba));
// console.log(eqObjects(ab, abc));
// console.log(eqObjects(cd, cd2));
// console.log(eqObjects(cd, dc));
