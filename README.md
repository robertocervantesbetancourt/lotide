# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @robertocervantesbetancourt/lotide`

**Require it:**

`const _ = require('@robertocervantesbetancourt/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Takes two values and prints Pass / Fail to console if the values are the same or not.
```javascript
//asserEqual example
assertEqual("Lighthouse Labs", "Bootcamp"); // => ❌❌❌ Assertion Failed: ${actual} !== ${expected}
assertEqual(1, 1); // => ✅✅✅ Assertion Passed: ${actual}  ===  ${expected}
```
* `head(arr)`: Return the first value on an array.
```javascript
//head example
head([5,6,7]) // => 5
```
* `tail(arr)`: Return the values in the array that come after the first value.
```javascript
//tail example
tail(["Hello", "Lighthouse", "Labs"]) // => ["Lighthouse", "Labs"]
```
* `middle(arr)`: Return the middle value in an array. If the array has even number of values, then the function returns the two middle values.
```javascript
//middle example
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1]) // => []
middle([1, 2]) // => []
```
* `flatten(arr)`: Takes a nested array and flatens it by removing the nesting. Returns a flat array.
```javascript
//flatten example
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
```
* `eqArrays(arr1, arr2)`: Takes two arrays and compare them to se if they are equal. Returns true / false
```javascript
//eqArrays example
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
``` 
* `assertArraysEqual(value)`: Works with .eqArrays and prints Both arrays as equal / Arrays are NOT equal.
```javascript
//assertArraysEqual example
assertArraysEqual(eqArrays([1,2,3],[1,2,3])) // => "Both arrays are equal"
assertArraysEqual(eqArrays([1,2,3],[3,2,1])) // => "Arrays are NOT equal"
```
* `without(arr1, arr2)`: Removes the values in arr2 from the values in arr1.
```javascript
//without example
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
```
* `countOnly(allItems, itesmToCount)`: Takes in an array (allItems) and an object (itemsToCount) and counts how many times specific items appear.
```javascript
//countOnly example
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];
countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false}); // => 3
```
* `countLetters(sentence)`: Takes in a sentence and returns an object with the number of times each letter shows up in the sentence. Letter:key , count:values.
```javascript
//countLetters example
countLetters('lighthouse in the house'); // => { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
```
* `letterPositions(sentence)`: Takes in a sentence and returns an object with the position of each letter in the sentence. 
```javascript
//letterPositions example
letterPositions('hello'); // => { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
```
* `findKeyByValue(obj, val)`: Takes in an object and a specific value and returns the key for that value.
```javascript
//findKeyByValue example
const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};
findKeyByValue(bestTVShowsByGenre, 'The Expanse') // => sci_fi
findKeyByValue(bestTVShowsByGenre, 'That 70s Show') // => undefined
```
* `eqObject(obj1, obj2)`: Takes in two objects and checks if they are equal. Returns true / false
```javascript
//eqObject example
eqObject({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
eqObject({ a: { z: 1 }, b: 2, c: [1,2,3]}, { a: { z: 1 }, b: 2, c:[1,2,3]}); // => true
```
* `assertObjectEqual(actual, expected)`: Takes in the value from eqObjects and an expected value and returns Pass / Fail. 
```javascript
// assertObjectEqual example
const ab = {a:'1', b:'2'};
const ba = {b:'2', a:'1'};
const abc = {a:'1', b:'2', c:'3'};
assertObjectsEquals(eqObjects(ab,ba),true); // => ✅✅✅ Assertion Passed
assertObjectsEquals(eqObjects(ab,abc),true); // => 🛑🛑🛑 Assertion Failed
```
* `map(array, callback)`: Takes a callback and returns the value form the array.
```javascript
//map example
const words = ["ground", "control", "to", "major", "tom"];
map(words, word => word[0]) // => [ 'g', 'c', 't', 'm', 't' ]
```
* `takeUntil(array, callback)`: Takes a callback and return all the nubers from the array up until the callback return nuber.
```javascript
//takeUntil example
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // => [ 1, 2, 5, 7, 2 ]

```
* `findKey(object, callback)`: Takes the return from the callback and uses it as a value to find its corresponding key in the object. Returns the key.
```javascript
//findKey example
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
```

