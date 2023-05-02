'use strict'

/*
Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).
*/

// code to find prime numbers.
// code to find factorial itself
// code to find factorial between a range

function findPrime(num1,num2){
    let array = []
    for(let i=num1; i<=num2;i++){
        let flag=1
        for(let j=2;j<i;j++){
            if(i%j===0){
                flag = 0
                break
            }
        if(flag == 1){
            array.push(i)
            return array
        }
        }
    }
}

let prime = findPrime(1,100)
console.log(prime)
