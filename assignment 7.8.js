'use strict'

/*
Write a Javascript function to test whether the first character of a string
is lowercase.
*/

// comparing first char of string with same char in lower case

function lowercase(str){
    if(str[0] === str[0].toLowerCase()){
            return true
    }
    return false
}

console.log(lowercase('Love'))
