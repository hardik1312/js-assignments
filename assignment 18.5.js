'use strict'

/*  Print an infinite series of natural numbers using a generator.*/

function * generator(){
    let i = 1
    yield
    while(i>0){
        console.log(i)
        i++
    }    
}

const infinity = generator()
infinity.next()
infinity.next()
infinity.next()
