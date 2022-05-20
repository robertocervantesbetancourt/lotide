function tail(arr){
  let tailArr = arr.slice(1)
  return tailArr;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const numbers = [1,2,3];
tail(numbers);
assertEqual(numbers.length,3);

const empty = [];
const onlyOne = [1];

console.log(tail(empty));
console.log(tail(onlyOne));