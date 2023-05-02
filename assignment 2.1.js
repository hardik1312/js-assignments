'use strict'

/*Write a Javascript function to check whether a triangle is equilateral,
isosceles or scalene 
*/

function isTrinagle(side1,side2,side3){
    if(side1 != side2 && side2 != side3 && side3 != side1){
        return "This is a scalene triangle"
    }
    else if(side1 === side2 && side1 != side3){
        return "This is an isosceles triangle"
    }
    else if(side2 === side3 && side2 != side1){
        return "This is an isosceles triangle"
    }
    else if(side3 === side1 && side3 != side2){
        return "This is an isosceles triangle"
    }
    else{
        return "This is an equilateral triangle"
    }
}

let triangle = isTrinagle(30,20,10)
console.log(triangle)