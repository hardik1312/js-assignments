'use strict'

/*
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

// creating a Map
const employees = new Map()

// adding values to the Map
employees.set(67, {id: 67, name: "Hitanshu", salary: 75000})
employees.set(48, {id: 48, name: "Ninad", salary: 82000})
employees.set(29, {id: 29, name: "Amandeep", salary: 98000})

// a) Print an array of all employee ids
const employeeIDs = Array.from(employees.keys())
console.log(employeeIDs)

// b) Print count of employees
const employeeCount = console.log(employees.size)

// c) Print the name of the employee according to their id { key: value }
for(const [id, employee] of employees){
    console.log(`${id} ${employee.name}`)
}

// d) Store the salaries of all employees in an array
const salaries = Array.from(employees.values()).map(employee => employee.salary)
console.log(salaries)

// e) Calculate the average salary the company is paying to its employees
const totalSalary = salaries.reduce((acc, salary) => acc + salary,0)
const averageSalary = totalSalary/employees.size
console.log(averageSalary)