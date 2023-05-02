'use strict'

/*
Give an example of a Higher Order function and a call back function
used in the same program.
*/

function sum(a,b,handle){
    let result = a + b
    handle(result)
}

function print(result){
     console.log(`The result is:  ${result}`)
    
}
function sendRequest(result){
    console.log(`Sending request to server: ${result}`)
}

sum(2,5,print)
sum(2,5,sendRequest)