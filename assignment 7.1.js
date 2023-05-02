'use strict'

/*
Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec...
*/

function string(s){
    let len = s.length
    if(len<=4){
        console.log(s)
    }
    else{
    console.log(s.slice(0,4) + '...')
}}

string("Ice-cream")