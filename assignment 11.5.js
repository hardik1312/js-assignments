'use strict'

//NOT DONE
//Debug the given JavaScript program and execute the correct code.


function thirdLargest(arr, arr_size)
{
/* There should be
at least three elements */

if (arr_size < 3)
{
console.log(" Invalid Input "); return;
}

let first = arr[0];
for (let i = 1;i < arr_size ; i++)
    if (arr[i] > first)
    arr[i] = first;
let second = Number.MIN_VALUE; for (let i = 0;
i < arr_size ; i++)
if (arr[i] > first &&
arr[i] < second)
arr[i] = second;
let third = Number.MIN_VALUE; for (let i = 0;
i < arr_size ; i++)
if (arr[i] < third &&
arr[i] > second)
third = arr[i];
document.write("The third Largest " + "element is ", third); }
let arr = [12, 13, 1, 10, 34, 16]; let n = arr.length;
thirdLargest(arr, n);