'use strict'

/*
Carefully observe this example.
a) Is the InnerFunction() a closure?
b) What is output of this program

function OuterFunction()
    { var outerVariable = 100;
        function InnerFunction() {
            alert(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();
*/

// A) yes, inner function is a closure. Because it 
// accesses the variable defined outside of this function, 
// and also this function is defined after variable.

// B) Alert as a dialogue box with 100 as a value

