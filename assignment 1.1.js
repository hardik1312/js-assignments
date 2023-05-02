'use strict'
// find out wether a given year is a leap year or not.

function isLeapYear(year){
    if(year%4===0)
        return `${year} is a leap year.`
    else
        return `${year} is not a leap year`
}

let leapYear = isLeapYear(2001)
console.log(leapYear)