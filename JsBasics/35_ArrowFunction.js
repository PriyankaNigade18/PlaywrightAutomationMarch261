/*
Functions in Js
------------------
1.Function declaration

2.Function Expression
    2.1: Anonymous function: function without name 
    2.2: Arrow function
*/

console.log("-----Function without parameter-----");

let test1=()=>{
            console.log("Arrow function is calling!");

                }

//call
test1();

console.log("-----Function with parameter-----");
/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
let multipy=(a,b)=>{
                console.log("Multiplication is: "+(a*b));
                
            }

//call
multipy(10,20);

//single parameter
//let testEle=(ele)=>{console.log("Element text is: "+ele);}
let testEle=ele=>{console.log("Element text is: "+ele);}
//call
testEle("Dropdown");

console.log("-----Function with parameter and return-----");

let evenLogic=ele=>{
                    ele%2===0;
                    return "Number is even";

                    }

//call
console.log("Number status: "+evenLogic(10));