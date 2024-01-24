var shadowedVar = "I am global";
function exampleFunction()
{
    let shadowedVar= " I am local";
    console.log(shadowedVar);
}
console.log(shadowedVar);