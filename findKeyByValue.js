const findKeyByValue = function(obj, val) {
  let key = undefined;
  
  for (const element in obj) {
    if (obj[element] === val) {
      key = element;
    }
  }
  //console.log(key);
  return key;
};

module.exports = findKeyByValue;
