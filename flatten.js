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
  return;
};

module.exports = flatten;
  
