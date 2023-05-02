'use strict'

/*
LAST PART NOT DONE - hcf
Write a JavaScript program to take an array as input from the user and calculate
the sum of numbers in odd places and the sum of numbers at even places.

a) Print the difference between the two sums
b) Print the number of elements in odd places
c) Print the number of elements in even places
d) Print the average of all elements in the array
e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
Places
Sample Input:
[ 1, 2, 3, 4, 5 ]
Explanation:
Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
Sum of Numbers at Even Places = 2 + 4 = 6
Difference = 9 - 6 = 3
Sample Output:
Difference = 3
Odd Elements = 3
Even Elements = 2
Average = 3
GCD = 3
*/

// Write a JavaScript program to take an array as input from the user and calculate
//the sum of numbers in odd places and the sum of numbers at even places.
function plus(arr){
   let result1 = arr.filter((num) => (num%2===0))
      .reduce((sum,num)=> sum + num)
      console.log(result1)

   let result2 = arr.filter(num => num%2===1)
      .reduce((sum,num) => sum+ num)
      console.log(result2)

   //a) Print the difference between the two sums
   if(result1 ===result2){
      console.log("Sum of odd and even numbers is same.")
   }
   
   else if(result1 > result2){
      let dif1 = result1 - result2
      console.log(`${result1} - ${result2} = ${dif1}`)
   }
   else{
      let dif2 = result2-result1
      console.log(`${result2} - ${result1} = ${dif2}`)
   }

   //b) Print the number of elements in odd places
   let odd = arr.filter(num => num%2===1).length
   console.log(`Odd elements: ${odd}`)

   //c) Print the number of elements in even places
   let even = arr.filter(num => num%2===0).length
   console.log(`Even elements: ${even}`)

   //d) Print the average of all elements in the array
   let average = arr.reduce((sum,num) => (sum + num))
                  / arr.length
   console.log(`Average : ${average}`)


   //e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
   //Places
   
   let oddNums = arr.filter(num => num%2===1)
         .reduce((sum,num) => sum + num)
    
   let evenNums = arr.filter(num => num%2===0)
         .reduce((sum,num) => sum + num)

   for(let i=1; i<=oddNums && i<=evenNums;i++){
      if(oddNums%i===0 && evenNums&i===0){
         let gcd = i
         console.log(gcd)
      }
   }

}


let array = [2,4,5,6,7,8,9,3,2,5,6]
plus(array) 