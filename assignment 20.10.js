'use strict'

/* In which scenarios would you use synchronous code instead of
asynchronous code?
*/

// In JavaScript, you might use synchronous code instead of asynchronous code in the following situations:
// 
// When you need to ensure that a particular piece of code has 
// completed before moving on to the next.
// When the order of execution is important, and you need to 
// ensure that certain code runs before or after other code.
// One common example of when you might use synchronous code is when 
// you are reading and writing to a file. Because reading and writing 
// to a file can be a time-consuming operation, you might want to use 
// synchronous code to ensure that the file has been fully read or 
// written before moving on to the next operation.
// 
// Keep in mind that using synchronous code can block the main thread 
// and make your application unresponsive, so it should be used with caution. 
// In general, it is usually best to use asynchronous code whenever possible 
// to avoid blocking the main thread and to allow your application to remain responsive.