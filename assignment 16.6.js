'use strict'

/*
Create a function that takes a word and returns true if the word
has two consecutive identical letters.
Examples
doubleLetters("loop") ➞ true
doubleLetters("yummy") ➞ true
*/

function doubleLetters(str){
    const result = ((/(\w)\1/).test(str))
    console.log(result)
}

doubleLetters("yummy")
doubleLetters("loop")