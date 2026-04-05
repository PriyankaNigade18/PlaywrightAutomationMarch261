/*
Call Back function/ Higher Order function
===========================================
When any function we pass as pa parameter to other function then it is
referred as Call back function
*/


//call back function
function getName(name)//one parameter:variable
{
console.log("Hello....."+name);

}

//main: Business logic
function greet(callBackfun,username)//2 parameters
{
callBackfun(username);
}

//call
greet(getName,"Parag");

console.log("-------------------");

function add(a,b)
{
console.log("Addition is: "+(a+b));

}

function sub(a,b)
{
console.log("Subtraction is: "+(a-b));

}

function mul(a,b)
{
console.log("Multiplication is: "+(a*b));

}

function div(a,b)
{
console.log("Division is: "+(a/b));

}

//business logic
function calculator(callBackFun,num1,num2)
{
callBackFun(num1,num2);
}

//call
calculator(add,100,200);
calculator(div,100,15);
calculator(mul,10,20);
calculator(sub,100,34);




