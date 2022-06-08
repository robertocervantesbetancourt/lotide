const eqArrays = require('./eqArrays');
const eqObject = require('./eqObject');

const assertObjectsEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed`);
    return;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
    return;
  }
};

module.exports = assertObjectsEquals;

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (let x = 0; x < arr1.length; x++) {
//       if (arr1[x] !== arr2[x]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// const eqObjects = function(object1, object2) {
//   if (Object.keys(object1).length === Object.keys(object2).length) {
//     for (const elem in object1) {
//       if (Array.isArray(object1[elem])) {
//         if (!(eqArrays(object1[elem], object2[elem]))) {
//           return false;
//         }
//       } else {
//         if (object1[elem] !== object2[elem]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
//   return false;
// };


// const ab = {a:'1', b:'2'};
// const ba = {b:'2', a:'1'};
// const abc = {a:'1', b:'2', c:'3'};
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertObjectsEquals(eqObjects(ab,ba),true);