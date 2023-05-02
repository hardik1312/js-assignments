'use string'

/*
Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy”
*/

//function removeSpaces(string){
//    console.log(string.replace(/ +/g,"")) // using replace method and regex
//}

function removeSpaces(string){
    console.log(string.split(' ').join(''))  // using split and join method
}

removeSpaces("hii BOy")