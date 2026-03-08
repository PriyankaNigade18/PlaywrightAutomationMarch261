/*
Variable
==============
Variable is name of storage location where we can store data

In Javascript we use 3 keywords to declare variable
--------------------------------------------------------
1.Var(older/not recommended)
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

console.log("-----------var variable functional scope------");

//var:Global + functional(local)

function display()
{
    var bname="chrome";
    let platform="windows";
    const version=15;

    console.log("Browser name is: "+bname);
    console.log("Platform name is: "+platform);
    console.log("Version is: "+version);
    
   
}

//call
display();

console.log("-----Outside of Function call----");
 //console.log("Browser name is: "+bname);//ReferenceError: bname is not defined
//console.log("Platform name is: "+platform);//ReferenceError: platform is not defined
//console.log("Version is: "+version);//ReferenceError: version is not defined

console.log("-------Block scope variable (let and const)-----");

if(true)
{
    let toolVersion=4.32;
    const toolName="Selenium";
   

    console.log("ToolName is: "+toolName);
    console.log("ToolVersion is: "+toolVersion);
    
    
}

  //console.log("ToolName is: "+toolName);//ReferenceError: toolName is not defined
//console.log("ToolVersion is: "+toolVersion);//ReferenceError: toolVersion is not defined


console.log("-------Redeclaration & Reassignment-----");

//var: Redeclaration and reassignment is allowed

var toolName="Selenium";

var toolName="Cypress";

var toolName="Playwright";
toolName="Vibum";//assigning new data

console.log(toolName);

//let: redeclaration is not allowed and reassignment is allowed 

let book="Java Programming";
//Cannot redeclare block-scoped variable 'book'.
//let book="Python Programing";
book="Python Programming";//reassignment
console.log(book);


//const: redeclaration and reassignment is not allowed
const pi=3.14;
//Cannot redeclare block-scoped variable 'pi'.(strict mode error)
//const pi=3.14;
//pi=6.78;//TypeError: Assignment to constant variable.




