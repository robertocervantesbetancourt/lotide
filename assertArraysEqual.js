const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      console.log(`${arr1} is NOT equal to ${arr2}`);
      return 
    }
  } 
  console.log(`${arr1} is equal to ${arr2}`);
  return 
};

eqArrays(["1","2","3"], ["1","2","3"]);
eqArrays(["1","2","3"], ["1","2",3]);
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);