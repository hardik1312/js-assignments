'use strict'

/*
Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.

eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);

obj.getVolume();

Formulas for volumes of the shapes-
1) Cylinder- Volume = πr^2h

where r is the radius and h is the height of the cylinder.
2)Sphere- Volume= 4/3πr
3
where r is the radius
3) Cone- Volume= πr
2h/3

where r is the radius and h is the height of the cone.
*/

class Cylinder{
    constructor(radius, height){
        this.radius=radius
        this.height=height
    }
    getVolume(){
        let result = (Math.PI * (Math.pow(this.radius,2)) * this.height).toFixed(4)
        return result
    }
}

let obj1 = new Cylinder(2,5)
console.log(obj1.getVolume())

class Sphere{
    constructor(radius,height){
    this.radius=radius
    this.height=height
}
    getVolume(){
        let result = (4/ (3 * Math.PI * Math.pow(this.radius,3))).toFixed(4)
        return result
    }
}

let obj2 = new Sphere(2,5)
console.log(obj2.getVolume())


class Cone{
    constructor(radius,height){
        this.radius=radius
        this.height=height
    }
    getVolume(){
        let result = ((Math.PI * Math.pow(this.radius,2) * this.height) / 3 ).toFixed(4)
        return result
    }
}

let obj3 = new Cone(2,5)
console.log(obj3.getVolume())