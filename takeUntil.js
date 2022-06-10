//Takes a callback and return all the nubers from the array up until the callback return nuber.

const takeUntil = function(array, callback) {
  let resultingArray = [];
  for (let element of array) {
    if (!(callback(element))) {
      resultingArray.push(element);
    } else {
      return resultingArray;
    }
  }
  return resultingArray;
};

module.exports = takeUntil;
