const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


// const eqArrays = function(arr1, arr2) {
//   for (let x = 0; x < arr1.length; x++) {
//     if (arr1[x] !== arr2[x]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(value) {
//   if (value === false) {
//     console.log('Arrays are NOT equal');
//     return
//   }
//   console.log('Both arrays are equal');
//   return
// }


// const words = ["ground", "control", "to", "major", "tom"];



// assertArraysEqual(eqArrays(map(words, word => word),words));

// const result = map(words, word => word[0]);
// console.log(result);