const without = function(arr1, arr2) {
  const newArr = arr1.map(x => x);
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j])
        newArr.splice(j, 1);
    }
  } return newArr;
};

module.exports = without;


// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse",'hello']));

// console.log(without(['1','2','3'],['1','2','3']));