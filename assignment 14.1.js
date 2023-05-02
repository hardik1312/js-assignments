'use strict'

/* 
Write a JavaScript program to:
a) filter employees according to department = IT
b) filter employees who earn a salary < 65000
Sample Input:
let employees = [
{
"id": 1,
"name":"Abhinav",
"department":"IT",
"Salary":75000
},
{
"id": 2,
"name":"Gaurav",
"department":"Sales",
"Salary":52000
},
{
"id": 3,
"name":"Raj",
"department":"IT",
"Salary":64000
}]
Output:
[
{
"id": 1,
"name":"Abhinav",
"department":"IT",
"Salary":75000
},
{

"id": 3,
"name":"Raj",
"department":"IT",
"Salary":64000
}
]
[
{
"id": 2,
"name":"Gaurav",
"department":"Sales",
"Salary":52000
},
{
"id": 3,
"name":"Raj",
"department":"IT",
"Salary":64000
}
]
*/

let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }]


// a) filter employees according to department = IT
const IT = employees.filter(employee => employee.department == "IT")
console.log(IT)

// b) filter employees who earn a salary < 65000
const salary = employees.filter(employee => employee.Salary<65000 )
console.log(salary)