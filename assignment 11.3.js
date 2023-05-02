'use strict'

/*
Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
array.
Note: Do not use array.flat();
Sample Input:
[ 1, 2, [ 3, 4, [ 5 ] ] ]
Output:
[ 1, 2, 3, 4, 5 ]
*/

let array = [ 1, 2, [ 3, 4, [ 5 ] ] ]
let flatArray = [].concat(...array)
let flatterArray = [].concat(...flatArray)


console.log(flatterArray)