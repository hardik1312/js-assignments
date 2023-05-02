'use strict'

/*
Write a JavaScript program to get an array from the user and return the:
a) Sum of all elements in the array using reduce()
b) Average of all elements in the array using reduce()
Sample Input:
[ 1, 2, 3, 4, 5 ]
Output:
15
3
*/

// created a function that takes array as an input
function program(array){
// a) Sum of all elements in the array using reduce()
    const sum = array.reduce((sum,num) => sum + num,0)
    console.log(sum)

// b) Average of all elements in the array using reduce()
    const average = sum/array.length
    console.log(average)
}

let array1 = [1,2,3,4,5]
program(array1)