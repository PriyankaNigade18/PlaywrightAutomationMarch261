
//primitive data type in Ts 

//syntax: let variableName:type=value

//number
let marks:number=100;
console.log(marks);
console.log(typeof marks);

//string
let sname:string="Raj";
console.log(sname);
console.log(typeof sname);

//boolean
let status:boolean=true;
console.log(status);
console.log(typeof status);

//undefined
let data;
console.log(data);//undefined
console.log(typeof data);//undefined

//null
let age=null;
console.log(age);//null
console.log(typeof age);

//New Data types
//1.any : any type of data we can add

let testValue:any;

testValue=200;
testValue="Playwright";
testValue=true;

console.log(testValue);//true
console.log(typeof testValue);//boolean

//2.unknown : not known data
//there is no difference/use case for any or unknown

let value:unknown;

value=1000;
value="Hello";

console.log(value);
console.log(typeof value);

//3.void : applicable for function and it is return type 
//void means we does not return anything from function 

//example1
function testing():void
{
    console.log("Hello testing....");
    
}

testing();

//example2:

function getMarks(sname:string):void
{
    console.log("Student "+sname+" Marks are: "+100);
    
}

getMarks("Ravi");

//example3:
let test=function():void
{
console.log("Anonymous function is calling");

}

//call
test()


/*
never:
-----------
never means the function will never complete normally--
it will throw an error  or run forever.

To design any function which always throw an error as per scenario 
then we use never

*/

//Environment test:
// qa,prod,stage,"ERROR:"(uat)
/*
function throwEnvError(envName:string):never
{
    throw new Error("Invalid Environment: "+envName);
}


//call
throwEnvError("UAT");
*/
/*
//scenario: error for locator

function throwLocatorError(locator:string):never
{
throw new Error(locator+" Is not found!");

}

//call
throwLocatorError("loginButton");
*/

//Union (|):A union type allows a variable to store more than one type
//we use |(pipe) symbol  

let zipcode:number|string;
zipcode=411047;
zipcode="411047";


console.log(zipcode);//"411047"
console.log(typeof zipcode);


























