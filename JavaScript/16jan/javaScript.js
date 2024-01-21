// let can't be redeclared
function exampleFunction()
{
    if(true)
    {
        let functionScopedVar = "I am function-scoped";
    }
    console.log(functionScopedVar);//"I am functionScoped"
}

exampleFunction();
console.log(functionScopedVar); //Error:functionScoped is not defined