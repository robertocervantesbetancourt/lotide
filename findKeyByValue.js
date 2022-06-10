//find the key of a specific value

const findKeyByValue = function(obj, val) {
  let key = undefined;
  
  for (const element in obj) {
    if (obj[element] === val) {
      key = element;
    }
  }
  return key;
};

module.exports = findKeyByValue;
