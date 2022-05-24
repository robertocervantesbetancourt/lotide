

const without = function(arr1, arr2) {
  const newArr = arr1.map(x => x);
  console.log(newArr);
  for (let i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
    for (let j = 0; j < arr1.length; j++){
      //console.log(arr1[j]);
      if (arr2[i] === arr1[j])
        newArr.splice(j, 1);
      }
      console.log(newArr);
    }
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse",'hello']);

without(['1','2','3'],['1','2','3']);