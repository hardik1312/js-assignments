'use strict'

/*
Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.
*/
// EXTRA: Added functionality to loop through 0 to 100 as parameters and priting grade for each of them.

// function containing switch case to obtain grade by providing obtained marks 
function marksObtained(marks){
    switch(true){
        case marks < 0:
            return "Invalid marks"
            break
        case marks <= 40:
            return "Student has failed"
            break
        case marks <= 50:
            return "E grade"
            break
        case marks <= 60:
            return "D grade"
            break
        case marks <= 70:
            return "C grade"
            break
        case marks <= 80:
            return "B grade"
            break
        case marks <= 90:
            return "A grade"
            break
        case marks <= 100:
            return "S grade"
    }
}

// this loop changes the value of marksObtained each time starting from 0 to 100.
//built this to test my code :)
for(let i=0;i<=100;i++){
        var grade = marksObtained(i)
        console.log(grade)
}

