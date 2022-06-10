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

* `assertEqual(actual, expected)`: Takes two values and returns Pass / Fail if the values are the same or not.
* `head(arr)`: Return the first value on an array.
* `tail(arr)`: Return the values in the array that come after the first value.
* `middle(arr)`: Return the middle value in an array. If the array has even number of values, then the     function returns the two middle values.
* `flatten(arr)`: Takes a nested array and flatens it by removing the nesting.
* `eqArrays(arr1, arr2)`: Takes two arrays and compare them to se if they are equal. 
* `assertArraysEqual(value)`: Works with .aqArrays and returns Pass / Fail.
* `without(arr1, arr2)`: Removes the values in arr2 from the values in arr1.
* `countOnly(allItems, itesmToCount)`: Takes in an array (allItems) and an object (itemsToCount) and counts how many times specific items appear.
* `countLetters(sentence)`: Takes in a sentence and returns an object with the number of times each letter shows up in the sentence. Letter:key , count:values.
* `letterPositions(sentence)`: Takes in a sentence and returns an object with the position of each letter in the sentence. 
* `findKeyByValue(obj, val)`: Takes in an object and a specific value and returns the key for that value.
* `eqObjects(obj1, obj2)`: Takes in two objects and checks if they are equal.
* `assertObjectEqual(actual, expected)`: Takes in the value from eqObjects and an expected value and returns Pass / Fail. 
* `map(array, callback)`: Takes a callback and returns the value form the array.
* `takeUntil(array, callback)`: Takes a callback and return all the nubers from the array up until the callback return nuber.
* `findKey(object, callback)`: Takes the return from the callback and uses it as a value to find its corresponding key in the object. Returns the key.
