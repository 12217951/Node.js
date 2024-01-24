// Creating an array
let fruits = ["Appel", "Banana" , "Orange", "Grape"];

//Accessing elements

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//Adding elements to end 
fruits.push("Kiwi");
console.log(fruits);

//Adding elements to the beginning 
fruits.unshift("Mango");
console.log(fruits);

//Removing the last element
let removedLast =  fruits.pop();

//Removing first element
let removedFirst = fruits.shift();

// Finding index of an element
let indexOfOrange = fruits.indexOf("Orange");

//Iteration using for loop
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

//Slicing an array
let citrus = fruits.slice(1,3);
console.log(citrus);

//Splicing an array (modifying original array)
let removed = fruits.splice(1,2,"pear","melon");
console.log(fruits);

//Concatenating arrays
let moreFruits = ["grapefruit","Pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);