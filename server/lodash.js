const q=require('lodash');
const num=[1,2,3,4];
const double =q.map(num,n=>n*2);
console.log("Original:",num);
console.log("oubled: ",double);