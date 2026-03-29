/*
Functions in Js
------------------
1.Function declaration

2.Function Expression
    2.1: Anonymous function: function without name 
    2.2: Arrow function
*/

console.log("-----Function without parameter-----");

let test1=function()
            {
            console.log("Function Anonymous function is calling.....");
    
            
            }

//call
test1();
console.log(typeof test1);//function
console.log(test1.name);//test1

console.log("-----Function with parameter-----");
/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
let sum=function(a,b)
                {
                    console.log("Sum is: "+(a+b));
                    
                }

//call
sum(100,300);

console.log("-----Function with parameter and return keyword-----");
/**
 * 
 * @param {String} msg 
 * @returns 
 */
let getData=function(msg)
            {
            return msg;
            }

//call
let result=getData("Hello Lets learn Functions in detail....");
console.log("Result is: "+result);
