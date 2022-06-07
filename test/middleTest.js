const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual(eqArrays(middle([1]),[]));
assertArraysEqual(eqArrays(middle([1,2]),[]));
assertArraysEqual(eqArrays(middle([1,2,3]),[2]));
assertArraysEqual(eqArrays(middle([1,2,3,4]),[2,3]));