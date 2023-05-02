'use strict'

/*
E) IS NOT DONE

Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.

c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string
*/

let s = "I am from ahmedabad."

//a) Convert the String into upper case.
console.log(s.toUpperCase())

//b) Convert only the first character to uppercase.
console.log(s[0].toUpperCase())

//c) Convert the String into lower case.
console.log(s.toLowerCase())

//d) Break the string into two halves and swap them.
function halfSwap(str){
    console.log(str)
    let str1 = str.slice(0,str.length/2)
    let str2 = str.slice(str.length/2,str.length)
    console.log(str2 + " " + str1)
}
halfSwap("lets play some games")
//e) Count the repeating characters.


//f) Reverse the string
function reverseStr(str){
    let splitStr = str.split("")
    let reverseString = splitStr.reverse()
    console.log(reverseString.join(""))
    
}

reverseStr("Hardik Lives in Ahmedabad")