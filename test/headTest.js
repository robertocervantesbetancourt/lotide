const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]),5);
assertEqual(head([5,6,7]),6);
assertEqual(head(['Hello','Bye','Love']),'Hello');