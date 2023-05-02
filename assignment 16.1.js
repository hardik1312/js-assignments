'use strict'

/*
The time has a format: hours:minutes. Both hours and minutes
have two digits, like 09:00.
Make a regex to find time in the string: Lunch at 10:10 in the room
123:456. In this task there’s no need to check time correctness yet,
so 25:99 can also be a valid result. The regex should not match
333:333.
*/

const str = "Lunch at 10:10 in the room 123:456. 333:333"

const regex = /[0-2][0-9]:[0-9][0-9]/

if(regex.test(str)){
    console.log("Match is found")
}
else{
    console.log("Not matching the input")
}

