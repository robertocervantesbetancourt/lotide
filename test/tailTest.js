const assertEqual = require ('../assertEqual');
const tail = require('../tail');

const numbers = [1,2,3];
tail(numbers);
assertEqual(numbers.length,3);

const empty = [];
const onlyOne = [1];

console.log(tail(empty));
console.log(tail(onlyOne));
console.log(tail(numbers));