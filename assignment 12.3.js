'use strict'

/*
Write a JavaScript program to iterate over an array inputted by the user using
mapping. Perform the square of all elements in the original array, store the
squares in a new array and make a mapping for the squares and display it.
Sample Input:
[ 1, 2, 3, 4, 5 ]
Explanation:
Original Array = [ 1, 2, 3, 4, 5 ]
New Array = [ 1, 4, 9, 16, 25 ]
Mapping = squares => [ 1, 4, 9, 16, 25 ]
Output:
[ 1, 4, 9, 16, 25 ]
*/

// created the array for input
let array = [1,2,3,4,5]

// created Map and added a key value pair
let squareMap = new Map()
squareMap.set("arr", array)

// got the value of array and squared it using map function
const newArray = squareMap.get("arr").map(num => Math.pow(num,2))

// added the new suared arry into Map
squareMap.set("squared", newArray)
console.log(squareMap)