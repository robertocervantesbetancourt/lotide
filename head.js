function head(arr){
  return arr[0];
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(head([5,6,7]),5);
assertEqual(head([5,6,7]),6);
assertEqual(head(['Hello','Bye','Love']),'Hello');
console.log(head([2,3,4]));
console.log(head([1]));
console.log(head([]))