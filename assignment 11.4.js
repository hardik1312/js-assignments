'use strict'

/*
NOT DONE
Write a JavaScript program to take an array as input from the user and:
a) Store all duplicate elements in a separate array
b) Remove the duplicate elements from the original array
Sample Input:
[ 1, 2, 3, 2, 3, 4, 5 ]
Output:
Duplicate Elements = [ 2, 3 ]
Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
*/
let array = [ 1, 2, 3, 2, 3, 4, 5 ]
let unique = [...new Set(array)]



console.log(unique)