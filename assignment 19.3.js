'use strict'

/* What will be the output of this code?:

const promise = new Promise(res => res(2));
promise.then(v => {
console.log(v);
return v * 2;
})
.then(v => {
console.log(v);
return v * 2;
})
.finally(v => {
console.log(v);
return v * 2;
})
.then(v => {
console.log(v);
});
*/


// 2
// 4
// undefined
// 8