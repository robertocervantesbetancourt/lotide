const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(value) {
  if (value === false) {
    console.log('Arrays are NOT equal');
    return
  } 
  console.log('Both arrays are equal');
  return
}

const flatten = function(arr) {
  let flattenArray = [];
  for (let x = 0; x < arr.length; x++){
    let results = Array.isArray(arr[x]);
    //console.log(results);
    if (results === false) {
      flattenArray.push(arr[x]);
      //console.log(flattenArray);
    } else {
      for (let i = 0; i < arr[x].length; i++){
        flattenArray.push(arr[x][i]);
      }
    }
  }
  console.log(flattenArray);
  return
} 
  
flatten([1, 2, [3, 4], 5, [6]])