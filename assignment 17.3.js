'use strict'

/*
Create a functional iterator, with a next function.
*/

function iterator(str){
    const itr = str[Symbol.iterator]()
    let next = itr.next()
    console.log(next)
}

iterator(str)