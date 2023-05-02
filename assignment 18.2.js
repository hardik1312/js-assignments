'use strict'

/*  What is the syntax of a generator?*/

function * generator(){
    // statement 1
    yield
    // statement 2
    yield
    // statement 3
    yield
    // statement 4
}

const call = generator()
call.next()