const eqArrays = require('./eqArrays');

const assertArraysEqual = function(value) {
  if (value === false) {
    console.log('Arrays are NOT equal');
    return
  } 
  console.log('Both arrays are equal');
  return
}

module.exports = assertArraysEqual;

assertArraysEqual(eqArrays(["1","2","3"], ["1","2","3"]));
assertArraysEqual(eqArrays(["1","2","3"], ["1","2",3]));
