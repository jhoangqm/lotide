const assertEqual = (actual, expected) =>{
  if (actual === expected) {
    return console.log(`🔥 Assertion success:  ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion failed:  ${actual} !== ${expected}`);
  }
};

// function which takes an array as argument
const tail = (arr) =>{
  //creating an array to store results
  const find = [];
  //storing data in a variable and adding a counter
  let first = 0;
  
  for (let i = 1; i < arr.length; i++) {
    find[first] = arr[i];
    first++;
  }
  // returning results
  return find;
};

// Test case 1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test case 2 check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!