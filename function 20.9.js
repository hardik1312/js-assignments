'use strict'

/*
What is the best way to avoid deadlocks when using
async/await?
*/

/*  
A deadlock is a situation where two or more threads are blocked indefinitely, waiting for each other to release a lock or complete a task. In JavaScript, deadlocks can occur when using async/await if you are not careful about how you structure your code.

To avoid deadlocks when using async/await, you should follow these best practices:

Use async/await with try/catch blocks: If an exception is thrown inside an async function, it will be caught by the catch block, which will allow the function to continue executing rather than getting stuck in an indefinite wait.

Avoid creating circular dependencies: If two async functions are dependent on each other, they will both be waiting for the other to complete, resulting in a deadlock. Instead, you should structure your code so that each async function has a single responsibility, and use callbacks or Promises to chain them together.

Use Promise.all() wisely: The Promise.all() method allows you to execute multiple async operations in parallel, but if any of the promises passed to it reject, the entire Promise.all() call will reject. This can lead to a deadlock if you are not careful about handling the rejection.

Use timeouts: If you are waiting for an async operation to complete and it takes longer than expected, you can use a timeout to avoid getting stuck in an indefinite wait. For example, you could use the Promise.race() method to resolve the promise after a certain amount of time if the async operation has not yet completed.

By following these best practices, you can avoid common pitfalls that can lead to deadlocks when using async/await in JavaScript.
*/