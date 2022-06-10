const eqArrays = require('./eqArrays');

const assertArraysEqual = function(callback) {
  if (callback === false) {
    console.log('Arrays are NOT equal');
    return;
  }
  console.log('Both arrays are equal');
  return;
};

module.exports = assertArraysEqual;


