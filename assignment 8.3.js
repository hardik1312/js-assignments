'use strict'

/*
Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods.
*/

let set1 = new Set()
set1.add(Math.floor((Math.random(4))*11))
set1.add(Math.floor((Math.random(4))*11))
set1.add(Math.floor((Math.random(4))*11))
set1.add(Math.floor((Math.random(4))*11))

console.log(set1.has(8))