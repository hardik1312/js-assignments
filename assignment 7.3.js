'use strict'

/*
Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii”
*/

// using split, reverse, and join methods

function string(s){
    let newString = s.split(" ")
    console.log(newString.reverse().join(' '))
}

string("Hii Boy")