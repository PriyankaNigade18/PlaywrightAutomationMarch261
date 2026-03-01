/*
Variable
==============
Variable is name of storage location where we can store data

In Javascript we use 3 keywords to declare variable
--------------------------------------------------------
-----------------------
Scope: Global and Functional scope
- Redeclaration is allowed
- Reassignment is allowed

2.let(Modern js)
---------------------
Scope: Global + Block scope
-any Mutable data declare with let
-Redeclaration is not allowed
-Reassignment allowed

3.const(Modern Js): like final keyword in java
-----------------------
Scope: Global + Block scope
-any Immutable data declare with const
-Redeclaration is not allowed
-Reassignment is not allowed

Scope
======
1.Global:
------------------
Any variable declare as global scope we can access it anywhere 
inside file/inside function or outside of function

2.Functional Scope: 
-------------------
Any variable declare inside function (Local variable) that you can access 
withing function

3.Block scope:
-------------------
Any variable declare inside { } block (if statment,for loop,while)and we can 
access it within a block is called block scope



Syntax:
============
let variableName=value;
const variableName=value;

*/

console.log("-----------global scope--------");

//Global data
var fname="Hiteshi";
let location="Us";
const email="hiteshi@gmail.com";


console.log("first name is: "+fname);
console.log("location is: "+location);
console.log("email is: "+email);

console.log("---Calling Global data inside function-----");

function show()
{
console.log("first name is: "+fname);
console.log("location is: "+location);
console.log("email is: "+email);
}

//call
show();





