'use strict'

/*  
Write a sleep function using a promise in javascript?
*/

const promise = new Promise((resolve,reject) => {
    setTimeout(() => {resolve("Slept for two seconds")},2000)
})

const consumer = () => {
    promise.then((result)=> console.log(result))
}

consumer()