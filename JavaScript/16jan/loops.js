// ....For loop..........

// for(let i =0;i<5;i++)
// {
//     console.log(i);
// }

// ............Whileloop or entry control loop......

// let count =0;
// while(count<0)
// {
//     console.log(count);
//     count ++;
// }

// .......Do while or exit control loop......

// let count = 0;
// do{
//     console.log(count);
//         count ++; 
// }
// while(count < 5);

// .............For..in loop.........
let person = {name: "John", age:30,occupation:"Developer"};
for(let key in person){
    console.log(key + ":" + person[key]);
}