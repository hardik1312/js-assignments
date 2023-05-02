'use strict'

/* 

Write a JavaScript program to filter the hospitals according to:
a) Number of Beds > 200
b) Availability of Beds = Yes
c) Location = Pune

Sample Input:
let hospitals = [
{
"id": 1,
"name":"Hospital A",
"location":"Delhi",
"noOfBeds":450,
“availability”:”Yes”
},
{
"id": 2,
"name":"Hospital B",

"location":"Pune",
"noOfBeds":150,
“availability”:”No”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350.
“availability”:”Yes”
}]
Output:
[
{
"id": 1,
"name":"Hospital
A",
"location":"Delhi",
"noOfBeds":450,
“availability”:”Yes”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
“availability”:”Yes”
}
]
[
{
"id": 1,
"name":"Hospital
A",
"location":"Delhi",

"noOfBeds":450,
“availability”:”Yes”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
“availability”:”Yes”
}
]
[
{
"id": 2,
"name":"Hospital B",
"location":"Pune",
"noOfBeds":150,
“availability”:”No”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
“availability”:”Yes”
}
]*/

let hospitals = [
{
"id": 1,
"name":"Hospital A",
"location":"Delhi",
"noOfBeds":450,
"availability": "Yes"
},
{
"id": 2,
"name":"Hospital B",

"location":"Pune",
"noOfBeds":150,
"availability": "No"
},
{
"id": 3,
"name":"Hospital C",
"location":"Pune",
"noOfBeds":350,
"availability": "Yes"
}]

// a) Number of Beds > 200
const bed = hospitals.filter(hospital => hospital.noOfBeds > 200)
console.log(bed)

// b) Availability of Beds = Yes
const availability = hospitals.filter(hospital => hospital.availability === "Yes")
console.log(availability)

// c) Location = Pune
const location = hospitals.filter(hospital => hospital.location === "Pune")
console.log(location)
