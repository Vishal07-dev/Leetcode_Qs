// Q: Write a function createHelloWorld. It should return a new function that always returns "Hello World".



let createHelloWorld = function()
{
    return function(...args)
    {
        return "Hello World"
    }
}
const f=createHelloWorld();

console.log(f());//test case 1

console.log(f([],{},null,42))// Test case 2