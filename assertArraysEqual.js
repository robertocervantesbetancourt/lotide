const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  } 
  return true;
};

const assertArraysEqual = function(value) {
  if (value === false) {
    console.log('Arrays are NOT equal');
    return
  } 
  console.log('Both arrays are equal');
  return
}


assertArraysEqual(eqArrays(["1","2","3"], ["1","2","3"]));
assertArraysEqual(eqArrays(["1","2","3"], ["1","2",3]));
