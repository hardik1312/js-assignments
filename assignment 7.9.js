'use strict'

/*
Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ?
*/

function input(str){
    let lowerCase = str.toLowerCase()
    if(lowerCase === "yes"){
        console.log("User input is valid")
    }
    else{
        console.log("User Input is not valid")
    }
}

input("yes")
input("YES")
input("Yes")
input("yEs")
input("yeS")