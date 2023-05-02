'use strict'

/*
How can you break a string to a newline in Javascript ?
*/

// using replace method and regex to change space into newline
let string = "My name is apple"

let newString = string.replace(/ /g, "\n")
console.log(newString)