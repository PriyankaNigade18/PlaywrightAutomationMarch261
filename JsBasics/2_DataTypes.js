/*
Data Types
================
Which help up to define what type of data we can store in variable


Js is dynamically type:
------------------------
While declaraing any variable we dont need to define ant data type 


Js support two types of Data types
======================================
1.Primitive
--------------
1.Number
2.String
3.Boolean
4.undefined
5.null

6.BigInt(ES6) N/A for automation
7.Symbol(ES6) N/A for automation



2.NonPrimitive
---------------------
Object
Array

typeOf Operator
================
In Js to identify type of variable data we have typeOf operator
type of object
type of function
type of variable

*/

console.log("------------Number type-----------");
/*
Any positive integer/Negative negative/Floating point number as 
number type
*/

let num1=80;
console.log("Number 1 is: "+num1);//80
console.log("Type is: "+typeof num1);//number


let num2=-80;
console.log("Number 2 is: "+num2);//-80
console.log("Type is: "+typeof num2);//number

let num3=67.66;
console.log("Number 3 is: "+num3);//67.66
console.log("Type is: "+typeof num3);//number


console.log("------Boolean type(true/false)-------");


let isActive=true;
console.log("Is Student active: "+isActive);//true
console.log("Type is: "+typeof isActive);//boolean

let isEmployeed=false;
console.log("Is student employeed?: "+isEmployeed);//false
console.log("Type is: "+typeof isEmployeed);//boolean

console.log("------String type------");
/*
String is collection of characters
String is Immutable class
In Js String is primitive data type

Note:
--------------
Any single character or collection of character is string in Js

Ways to declare string
-------------------------
1. double quoat "Hello"
2. Single Quoat  'Hello'
3.Template String `Hello` Back tick

*/


let fname="Sumit";
let lname='sharma';
let gender='M'

console.log("First name is: "+fname);//Sumit
console.log("Type is: "+typeof fname);//string

console.log("Last name is: "+lname);//sharma
console.log("Type is: "+typeof lname);//string

console.log("Gender is: "+gender);//M
console.log("Type is: "+typeof gender);//string

/*
For String we use + operator as concatenation sign 
For Back tick we use ${variable name}
*/

let trainername="Priyanka";
const profile=`Hello All,
            My name is ${trainername} 
             I am ISTQB certified tester , 
            having 15 plus years of experience in software testing`;

console.log(profile);
console.log("Type is : "+typeof profile);

let id=101;
let year="2026";

let jsonPayload=`{
  "id": ${id},
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": ${year},
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}`;

console.log(jsonPayload);
console.log("Type is: "+typeof jsonPayload);

console.log("------Undefined-------");
/*

Whenever variable is declare without assignment/initialise of any value
then in Js type of variable and value of variable is undefined
*/

let courseName;
console.log("Course name is: "+courseName);//undefined
console.log("Type  is: "+typeof courseName);//undefined

console.log("------Null type------");
/*
Null means unknown
When we check type of null variable the result is Object
This is intruduce as Bug in Js
*/

let marks=null;
console.log("Marks is: "+marks);//null
console.log("Type is: "+typeof marks);//object


/*
BigInt/Symbol
=================
BigInt and Symbol type added after ES6
BigInt to strore big integer number 
23123123n= BigInt

symbol type
=================
- It is applicable for Object
- to store unique properties of object
- to avoid conflict of same name properties 


*/

console.log(Number.MAX_VALUE);
//1.7976931348623157e+308
let num4=7976931348623157n;
console.log(num4);
console.log(typeof num4);


console.log("------Object Declaration with Literal-------");
//Object literal
let user={};
console.log(user);//{}
console.log(typeof user);//object

let person={
            fname:"Sarang",
            job:"SDET"
            }


console.log(person);
console.log(typeof person);
//How to read properties of Object: use objectName.key
console.log("Personname : "+person.fname);
console.log("Person job is: "+person.job);
/*
//how to add new property to object
person.pid=101;

console.log(person);
console.log(person.pid);//101

person.pid="p101";//update id here

console.log(person.pid);//p101
*/
//to maintain unique property
const pid=Symbol("id");//pid variable which is id type(symbol type mean unique)

//assigning new symbol type property to object
person[pid]=1010;//this is unique
console.log(person);
console.log(person[pid]);

//update it 
person.pid=2020;
console.log(person);
console.log(person[pid]);






































