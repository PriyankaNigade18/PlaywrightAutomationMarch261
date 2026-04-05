
/*
IIFE Immediate invoked function expression in javascript
Before modern Js syntax we use to follow this function



*/

(function()
{
    console.log("Hello Everyone!");
    
})();

console.log("---------------");


(function(name)
{
    console.log("User name is: "+name);
    
})("Kiran");

console.log("---------------");

((name)=>{
    console.log("name is: "+name);
    
})("Radha");
console.log("---------------");


let data=(function(name)
    {
    return name.toUpperCase();
    })("Pranita");

    console.log(data);
    