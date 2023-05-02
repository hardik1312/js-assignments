'use strict'

/*  not complete
Write a program to find whether a given number is armstrong number or

not-
The Armstrong number is a number that is equal to the sum of cubes of

its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153
*/

function isArmstrong(number){
    let n = number.length
    let sum = 0

    for(let i=0;i<=n;i++){
        let digit = (number[i]-'0')
        sum = (sum + Math.pow(digit,n))
    }
    if(sum===number){
        return `${number} is an armstrong number`
    }
    else{
        return `${number} is not an armstrong number`
    }
}

let armstrong = isArmstrong("153")
console.log(armstrong)