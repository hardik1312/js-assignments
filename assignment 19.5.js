'use strict'

/*  
Write a function delay that returns a promise. And that promise
should return a setTimeout that calls resolve after 1000ms.
*/


const promise = new Promise(resolve => setTimeout(()=> {resolve("timeout for 1 second")},1000))
const delay = () => {promise.then((result)=> {console.log(result)})}

delay()
