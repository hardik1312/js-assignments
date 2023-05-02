'use strict'

/*
SOLVED USING OBJECT DATA STRUCTURE
Write a JavaScript program to map Employee Records according to Employee
IDs.
Employee: { id, name, salary }
a) Print an array of all employee ids
b) Print count of employees
c) Print the name of the employee according to their id { key: value }
d) Store the salaries of all employees in an array
e) Calculate the average salary the company is paying to its employees
Sample Input:
"id": [ 67, 48, 29 ]
"name": [ "Hitanshu", “Ninad”, “Amandeep” ]
"salary": [ 75000, 82000, 98000 ]
Output:
[ 67, 48, 29 ]
3
67: Hitanshu
48: Ninad
29: Amandeep
[ 75000, 82000, 98000 ]
85000
*/

// create an array of objects with provided values
const employees = [
  {id: 67, name: "Hitanshu", salary: 75000},
  {id: 48, name: "Ninad", salary: 82000},
  {id: 29, name: "Amandeep", salary: 98000}
]

// a) Print an array of all employee ids
const employeeID = employees.map(employee => employee.id)
console.log(employeeID)

// b) Print count of employees
const totalEmployees = employees.length
console.log(totalEmployees)


// c) Print the name of the employee according to their id { key: value }
const employeeName = {}
employees.forEach(employee => {
  employeeName[employee.id] = employee.name
 })
console.log(employeeName)

// d) Store the salaries of all employees in an array
const employeesSalary = employees.map(employee => employee.salary)
console.log(employeesSalary)

// e) Calculate the average salary the company is paying to its employees
const totalSalary = employeesSalary.reduce((acc, salary) => acc + salary, 0)
const averageSalary = totalSalary/employees.length
console.log(averageSalary)