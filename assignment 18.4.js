'use strict'

/*  Create a generator for multiplying? */

function * multiplier(num1,num2){
    console.log(`${num1} + ${num2} = ?`)
    yield
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
}


const multiply = multiplier(5,2)
multiply.next()
multiply.next()