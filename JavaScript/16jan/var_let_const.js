// variable is function scoped, let is block scoped ,let and const have same behaviour

// ..................var................
// function exampleFunction()
// {
//     if(true)
//     {
//         var functionScopedvar = "I am function-scoped";
//     }
//     console.log(functionScopedvar);
// }
// exampleFunction();
// console.log(functionScopedvar);  //ReferenceError: functionScopedvar is not defined

// .........................let....................
// function exampleFunction()
// {
//     if(true)
//     {
//         let functionScopedvar = "I am function-scoped";
//         console.log(functionScopedvar);
//     }
// }
// exampleFunction();


// ..........................Hoisting...............
// console.log(x);  //  output: undefined
// var x =5;        // gives error with 'let'
// console.log(x);  // output: 5


// ......................hoisting with function.................
// hello();
// function hello()
// {
//     console.log("Hello , World !");
// }

// .....................Object data type..................

// keys are strings , values can be any data type
// let person = {
//     name: "Alice",
//     age : 30,
//     isStudent : false,
// };
// console.log(person.name);
// console.log(person); //print whole object

// ..................Arrays............

// let fruits =[1, "banana", "orange"];
// console.log(fruits[0]);

// ........................Type Coercion...................
//used with different ,values are automatically  converted to a common type during a opertion
// follows BODMAS rule
// let result1 = 5 + "5";  //55
// let result2= "2" + "2"; //22
// let result3= 2 + 2 -2; //0
// let result4= "2" + "2" / "2";  //20 , minus cannot be performed between strings , so converted to number
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);


//....................comparison operator..........
let a = 10;
let b = 5;

console.log(a>b);        // greater than: true
console.log(a<b);        // less than: false
console.log(a===b);        //  equal to : false (value is not equal)  compare data type as well


