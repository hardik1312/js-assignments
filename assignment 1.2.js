'use strict'
/* Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/

function toFahrenheit(cel){
    let celToFah = (cel * 9/5) + 32
    return `${cel}°C is ${celToFah}°F`
}

function toCelcius(fah){
    let fahToCel = (fah - 32) * 5/9
    return `${fah}°F is ${fahToCel}°C`
}

let fahrenheit = toFahrenheit(60)
console.log(fahrenheit)

let celcius = toCelcius(45)
console.log(celcius)