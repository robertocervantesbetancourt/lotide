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
    return;
  }
  console.log('Both arrays are equal');
  return;
};

const takeUntil = function(array, callback) {
  let resultingArray = [];
  for (let element of array) {
    if (!(callback(element))) {
      resultingArray.push(element);
    } else {
      return resultingArray;
    }
  }
  return resultingArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(eqArrays(takeUntil(data1, x => x < 0),[1,2,5,7,2]));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(eqArrays(takeUntil(data2, x => x === ','),['I\'ve', 'been', 'to', 'Hollywood']));
