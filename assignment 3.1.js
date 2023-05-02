'use strict'

/*
Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10
*/


let rows = 4
let pattern = ""
let variable = 1

for(let n=1; n<=rows; n++){
    for(let num=1; num<=n; num++){
        pattern += variable + " "
        variable++
    }
    pattern += "\n"
}

console.log(pattern)