'use strict'

/* not complete
Write a program to find whether a given number is special number or

not-
If the sum of the factorial of digits of a number (N) is equal to the

number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 145
*/

function isSpecial(number){
    
    let sum = 0
    let factorial = 0
    let n = number.length
    if(number<0){
        return `Please enter a positive number`
    }
    else if(number === 0 || number === 1){ 
        return `Factorial of ${number} is 1`
    }
    else{
        let fact = 1
        for(let i=1;i<=n;n++){
            let digit = (number[i]-'0')
                for(let i=1; i<=digit;i++){
                    fact *= i
        }
        factorial = factorial + fact
    }
    }
    if(sum === number){
        return `${number} is a special number`
    }
    else{
        return `${number} is not a special number`
        }    }

// please enter value as a string
let factorialFind = isSpecial("11")
console.log(factorialFind)