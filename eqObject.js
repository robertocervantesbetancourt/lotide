const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObject = function(object1, object2) {

  let lengthObj1 = Object.keys(object1).length;
  let lengthObj2 = Object.keys(object2).length;

  //console.log(lengthObj1, lengthObj2);
  if (lengthObj1 !== lengthObj2) {
    //console.log('Error 1');
    return false;
  }

  for (const elem in object1) {
    if (typeof object1[elem] === 'object' && !Array.isArray(object1[elem])) {
      if(!eqObject(object1[elem], object2[elem])){
         return false;
      }
    } else if (Array.isArray(object1[elem])) {
        if (!(eqArrays(object1[elem], object2[elem]))) {
          //console.log('Error 2');
          return false;
        }
    } else {
      if (object1[elem] !== object2[elem]) {
        //console.log('Error 3');
        return false;
      }
    }
    return true;
  }
};

module.exports = eqObject;


//EXPLORING SOLUTION WITH MENTOR
// const isObject = function (val){
//   return (typeof val === 'object' && !Array.isArray(val));
// };

// const eqObject = function(obj1,obj2){
//   const key1 = Object.keys(obj1);
//   const key2 = Object.keys(obj2);

//   if(key1.length !== key2.length){
//     return false;
//   }
//   for(let key of key1){
//     if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
//       if(!eqArrays(obj1[key], obj2[key])){
//         return false;
//       }
//     } else if (isObject(obj1[key]) && isObject(obj2[key])){
//         if(!eqObject(obj1[key], obj2[key])){
//           return false;
//         }
//     } else if (obj1[key] !== obj2[key]) {
//         return false;
//     }
//   }
//   return true;
// }


// const restult0 = eqObject({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
// console.log('Result0 ===', restult0);
// //console.log(eqObject({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); //=>false

// console.log(eqObject({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2, c: 0 })); //=>false
// console.log(eqObject({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); //=> false
// console.log(eqObject({ a: { z: 1 }, b: 2, c: [1,2,3]}, { a: { z: 1 }, b: 2, c:[1,2,3]})); //=>true




// const ab = {a:'1', b:'2'};
// const ba = {b:'2', a:'1'};
// const abc = {a:'1', b:'2', c:'3'};
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };


// //eqObjects(ab,ba);
// //eqObjects(ab,abc);
// //eqObjects(cd, dc);
// //eqObjects(cd, cd2);
// //eqObjects(ef,fe);
// //eqObjects(ef,fe2);

// assertEqual(eqObjects(ab,ba),true);
// assertEqual(eqObjects(ab,abc),false);
// assertEqual(eqObjects(cd,dc),true);
// assertEqual(eqObjects(cd,cd2),false);

// assertEqual(eqObject({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
// assertEqual(eqObject({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
// assertEqual(eqObject({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));