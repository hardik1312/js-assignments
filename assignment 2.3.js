'use strict'

/*Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000
*/

// this creates an array containing values from 1 to 1000
let array = []
for(let i=1;i<=999;i++){
    array.push(i)
}

// this code filters and adds multiples of 3 under 1000
let multipleOf3 =  array.filter(num => num%3===0)
                    .reduce((sum,num) => (sum + num))

// this code filters and adds multiples of 5 under 1000
let multipleOf5 = array.filter(num => num%5===0)
                        .reduce((sum,num) => (sum+num))


// this code adds multiples of 3 and 5 and logs the total
let total = multipleOf3 + multipleOf5
console.log(total)