// setInterval Function
// const repeatedFunction = () =>
// {
//     console.log("repeated function executed!");
// };
// const intervalId = setInterval(repeatedFunction,1000); // executes after 1 sec
// It will keep on going until we reset our windows

// use ctrl+C to stop

// funcion to be executed at intervals
function repeatedFunction(){
    console.log("Executed repeated function..");
}

// set an interval (executed repeated every 1000 millisec)
const intervalId = setInterval(repeatedFunction,1000);

// After some time ,stop the interval
setTimeout(() =>
{
    clearInterval(intervalId);  // stop the interval
    console.log("Interval stopped");
},5000);