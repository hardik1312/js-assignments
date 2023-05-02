'use strict'

/*
Write a JavaScript program to
a) Calculate grades on basis of marks
>90 = A
>80 = B
>70 = C
>60 = D
>50 = E
else = F
b) Map the grades of each student
c) Group students according to the grades they have received and display.
Sample Input:
let students = [
{ name: "John", marks: “92” },
{ name: "Oliver", marks: “85” },
{ name: "Michael", marks: “79” },
{ name: "Dwight", marks: “95”},
{ name: "Oscar", marks: “64” },
{ name: "Kevin", marks: “48” },
];
Output:

{
'A': [ { name: "John", grade: “A” },
{ name: "Dwight", grade: “A” } ],
'B': [ { name: "Oliver", grade: “B” } ],
'C': [ { name: "Michael", grade: “C” } ],
'D': [ { name: "Oscar", grade: “D” } ],
'E': [ ],
'F': [ { name: "Kevin", grade: “F” } ],
}
*/

const students = [
    { name: "John", marks: 92 },
    { name: "Oliver", marks: 85 },
    { name: "Michael", marks: 79 },
    { name: "Dwight", marks: 95},
    { name: "Oscar", marks: 64 },
    { name: "Kevin", marks: 48 },
    ]

const grades = new Map()
grades.set("A", [])
grades.set("B", [])
grades.set("C", [])
grades.set("D", [])
grades.set("E", [])
grades.set("F", [])

students.forEach(student => {
    let grade
    if(student.marks > 90){
        grade = "A"
    }
    else if(student.marks > 80){
        grade = "B"
    }
    else if(student.marks > 70){
        grade = "C"
    }
    else if(student.marks > 60){
        grade = "D"
    }
    else if(student.marks > 50){
        grade = "E"
    }
    else{
        grade = "F"
    }
    student.grade = grade
    grades.get(grade).push(student)
})
console.log(grades)