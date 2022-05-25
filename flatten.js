
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