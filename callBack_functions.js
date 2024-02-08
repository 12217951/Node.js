// callBack_functions  -->function can be passed as arg to other functions, executed  after the compleetion of an asynchronous operation 
// Types --> synchrnous (instantly exceuted)
//          -->  asynchronous (executed later)

// higher order func  --> takes other function as arg

// Synchronous callback function
function parentFunction(name, callback)
{
    callback();
    console.log("Hey "+name);
}
// this is callback function
function randomFunction()
{
    console.log("Hey I am callback Function");
}

parentFunction("Random String" ,randomFunction);



// Asynchronous callback function
function parentFunction(name, callback)
{
    setTimeout(callback,1000);
    console.log("Hey "+name);
}
// this is callback function
// function randomFunction()
// {
//     console.log("Hey I am callback Function");
// }
// parentFunction("Random String" ,randomFunction);

// .................Or...................
parentFunction("Random String",function(){
    console.log("Hey I am a callback Function");
});

// .......................or...................
// const parentFunction   ("random String ",()=>
// console.log()) //incomplete code



