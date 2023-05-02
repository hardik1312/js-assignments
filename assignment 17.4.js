'use strict'

/*
In the following two arrays find which two elements match
using iterators.
Array 1 - [“a”, “b”, “c”, “d”]
Array 2 - [“e”, “f”, “g”, “h”, “a”, “i”, “j”]
*/

const array1 = ["a", "b", "c", "d"];
const array2 = ["e", "f", "g", "h", "a", "i", "j"];

const matches = array1.filter(element1 => array2.includes(element1));

console.log(matches);