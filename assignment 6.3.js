'use strict'

/*
Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.
*/

function computeDash(number){
    let string = number.toString()
    let len = string.length
    let result = [string[0]]

    for(let i=1;i<len;i++){
        if((string[i-1]%2===0) && (string[i]%2===0)){
            result.push('-', string[i])
        }
        else{
            result.push(string[i])
        } 
    }
    console.log(result.join(''))
}


computeDash(124685234657924)