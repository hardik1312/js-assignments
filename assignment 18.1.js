'use strict'

/* What is the difference between a generator and a function? */

// When we call a function, all the statements are executed at oncuechange,
// we dont have any control over the flow.

// generator functions give us control over the execution of the code, 
// with the help of yield keyword and next() method. yield will work as a 
// pause place for the code until next() is called. 