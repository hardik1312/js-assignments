'use strict'

/*
Iterate over all the characters of the word “iNeuron”.
*/

const str = "iNeuron"

const itr = str[Symbol.iterator]()
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())