'use strict'

//Write a program to find the factorial of a number.

function findFactorial(fact){
    if(fact<0){
        return "Please enter a positive number."
    }
    else if(fact==0){
        return 1
    }
    else{
        let facto = 1
        for(let i=1;i<=fact;i++){
            facto = facto * i
        }
        return facto
    }
}

let factorial = findFactorial(5)
console.log(factorial)