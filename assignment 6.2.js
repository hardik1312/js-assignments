'use strict'

/*
Write a javascript function find_largest to return the nth largest number

in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]

find_largest(3) will return third largest number from the above array -
which is 8.
*/



function find_largest(n){
    let array1 = [3,45,6,7,23,5,7,8]
    let array2 = array1.sort((a,b) => b - a )  // using arrow function to sort in descending 
    let i = n - 1
    console.log(array2[i])
}

find_largest(3)