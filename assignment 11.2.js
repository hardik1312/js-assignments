'use strict'

/*
Write a JavaScript program to take 2 arrays from the user and check if the
number 4 exists in any of the arrays, or both of the arrays.
Sample Input 1:
[ 1, 2, 3, 4, 5 ]
[ 4, 6, 1, 8, 2 ]
Output:

4 in both arrays
Sample Input 2:
[ 1, 2, 3, 6, 5 ]
[ 4, 6, 1, 8, 2 ]
Output:
4 in array 2
Sample Input 3:
[ 1, 2, 3, 4, 5 ]
[ 5, 6, 1, 8, 2 ]
Output:
4 in array 1
*/

function find(arr1,arr2){
    let arr1Out = arr1.includes(4)
    let arr2Out = arr2.includes(4)

    if(arr1Out && arr2Out){
        console.log("4 in both arrays")
    }
    else if(arr1Out || arr2Out){
        if(arr1Out){
            console.log("4 in array1")
        }
        else{
            console.log("4 in array2")
        }
    }
    else{
        console.log("4 is not in any array")
    }
}
    
let array1 = [2,5,6,9,8,7]
let array2 = [5,6,9,8,3,2]
find(array1,array2)