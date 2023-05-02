'use strict'

/* 
Is it possible to use async/await with promise chains? If yes,
how can this be achieved?
*/


async function test() {
    let v1 = await func1();
    let v2 = await func2(v1); 
    return await func3(v1, v2);  
}

/*  
Some of the benefits of Async/Await over Promise Chains are:-

Simple syntax, hence, more readable code.
Chaining is very easy.
Only the Promise Chain is asynchronous whereas the entire wrapper function is asynchronous in async/await.
The code becomes quite flexible.
Efficient error handling.
Easier Debugging.
No nested structures of callbacks, therefore, simplified code layout.
*/