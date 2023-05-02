'use strict'

/*
Is it possible to nest async functions in JavaScript? Explain with
examples.
*/

// Yes.
async function outerFunction() {
    // some code here
  
    async function innerFunction() {
      // some code here
    }
  
    await innerFunction();
  
    // some more code here
  }