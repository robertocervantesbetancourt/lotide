const flatten = function(arr) {
  let flattenArray = [];
  for (let x = 0; x < arr.length; x++) {
    let results = Array.isArray(arr[x]);
    if (results === false) {
      flattenArray.push(arr[x]);
    } else {
      for (let i = 0; i < arr[x].length; i++) {
        flattenArray.push(arr[x][i]);
      }
    }
  }
  console.log(flattenArray);
  return;
};

module.exports = flatten;
  
// flatten([1, 2, [3, 4], 5, [6]]);