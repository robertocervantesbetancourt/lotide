//check if two objects are the same and return true/false


const eqArrays = require('./eqArrays');

const eqObject = function(object1, object2) {

  let lengthObj1 = Object.keys(object1).length;
  let lengthObj2 = Object.keys(object2).length;

  if (lengthObj1 !== lengthObj2) {
    return false;
  }

  for (const elem in object1) {
    if (typeof object1[elem] === 'object' && !Array.isArray(object1[elem])) {
      if(!eqObject(object1[elem], object2[elem])){
         return false;
      }
    } else if (Array.isArray(object1[elem])) {
        if (!(eqArrays(object1[elem], object2[elem]))) {
          return false;
        }
    } else {
      if (object1[elem] !== object2[elem]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqObject;

