'use strict'

/*  
Create a function to iterate over the following list [“John”,
“Rohn”, “Danny”, “James”]
*/

function iterate(arr){
    let itr = arr[Symbol.iterator]()
    let firstValue = itr.next()
    let secondValue = itr.next()
    let thirdValue = itr.next()
    let fourthValue = itr.next()

    console.log(firstValue)
    console.log(secondValue)
    console.log(thirdValue)
    console.log(fourthValue)
}

iterate(["John", "Rohn", "Danny", "James"])