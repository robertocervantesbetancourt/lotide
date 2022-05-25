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

const letterPositions = function(sentence) {
  const result = {};
  let index = 0;
  for (const letter of sentence){
    if (result[letter]){
      result[letter].push(index);
      index++;
    } else {
      result[letter] = [];
      result[letter].push(index);
      index++;
    }
  }
  console.log(result);
  return result;
}

const result1 = letterPositions('hello');

assertArraysEqual(eqArrays(result1['h'],[0]));
assertArraysEqual(eqArrays(result1['e'],[1]));
assertArraysEqual(eqArrays(result1['l'],[2,3]));
assertArraysEqual(eqArrays(result1['o'],[4]));