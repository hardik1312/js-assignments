'use strict'

/*
Write a program in JavaScript to map the student ids, names and scores.
a) Add data for 3 students (use map functions)
b) Get Student Names using map functions
c) Delete Student Scores using map functions

d) Display 1 parameter (only value), 2 parameters (value + key), and 3
parameters (value + key + map) for the student
Sample Input:
"id": [ 1, 2, 3 ]
"name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
"scores": [ 90, 88, 92 ]
Output:
[ 'Hitanshu', 'Ninad', 'Amandeep' ]
-----one parameter-----
[ 1, 2, 3 ]
[ 'Hitanshu', 'Ninad', 'Amandeep' ]
[ 90, 88, 92 ]
-----two parameter-----
id 1, 2, 3
name Hitanshu,Ninad,Amandeep
scores 90,88,92
-----three parameter-----
id 1, 2, 3
Map(3) {
'id' => [ 67, 48, 29 ],
'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
'scores' => [ 90, 88, 92 ]
}
name Hitanshu,Ninad,Amandeep
Map(3) {
'id' => [ 1, 2, 3 ],
'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
'scores' => [ 90, 88, 92 ]
}
scores 90,88,92
Map(3) {
'id' => [ 1, 2, 3 ],
'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
'scores' => [ 90, 88, 92 ]
}
*/

// creates a Map 
const students = new Map()

// a) Add data for 3 students (use map functions)
students.set('id', [29, 48, 67])
students.set('name', ["Hitanshu", "Ninad", "Amandeep"])
students.set('scores', [90, 88, 92])

// b) Get Student Names using map functions
const studentNames = console.log(students.get("name"))

// c) Delete Student Scores using map functions
const deleteScores = students.delete("scores")


// d) Display 1 parameter (only value), 2 parameters (value + key), and 3
// parameters (value + key + map) for the student

console.log("-- parameter one --")
const valueOnly = students.forEach(value => console.log(value))

console.log("-- parameter two --")
const keyValueBoth = students.forEach((value, key) => console.log(`${key} ${value}`))

console.log("-- parameter three --")
const keyValueMap = students.forEach((value,key,map) => (console.log(`${key} ${value} ${map}`)))