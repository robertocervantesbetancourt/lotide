const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let x = 0; x < arr1.length; x++) {
      if (arr1[x] !== arr2[x]) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    //console.log('Have the same length');
    for (const elem in object1) {
      if (Array.isArray(object1[elem])) {
        //console.log(`There is an array in this object [${object1[elem]}], [${object2[elem]}]`);
        if (!(eqArrays(object1[elem], object2[elem]))) {
          //console.log('Arrays are not the same');
          return false;
        }
      } else {
        if (object1[elem] !== object2[elem]) {
          return false;
        }
      }
    }
    //console.log('single elements are the same');
    //console.log('Arrays are the same')
    //console.log('Both objects are the same');
    return true;
  }
  //console.log("Don't have same length");
  return false;
};


const ab = {a:'1', b:'2'};
const ba = {b:'2', a:'1'};
const abc = {a:'1', b:'2', c:'3'};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


//eqObjects(ab,ba);
//eqObjects(ab,abc);
//eqObjects(cd, dc);
//eqObjects(cd, cd2);
//eqObjects(ef,fe);
//eqObjects(ef,fe2);

assertEqual(eqObjects(ab,ba),true);
assertEqual(eqObjects(ab,abc),false);
assertEqual(eqObjects(cd,dc),true);
assertEqual(eqObjects(cd,cd2),false);
