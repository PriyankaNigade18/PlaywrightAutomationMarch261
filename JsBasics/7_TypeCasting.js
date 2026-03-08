/*
Type Casting
==================
Conversion of one type of data into other type is called type casting
Rule:
data should be compatible and covertable

Two types
=============
1.Implicit Casting/Type Coercion
--------------------------------------
Data will be automatically converted by Js

2.Explicit Casting
-------------------------
Data forcefully/manually converted

String()
Number()
Boolean()

Truthy value vs Falsy value
--------------------------------
Truthy
========
Any true value in boolean context is called truthy
Example'
---------
nonZero number,nonempty string


Falsy
===========
Any false value in boolean context is called falsy value
Example:
----------
0,"",NaN,null,undefined

*/

console.log("--------ImplicitCasting---------------");
console.log("------String coercion-------------");
/*
Whenever we use any expression and values with String and with + operator 
then other values(number/boolean)
will coerced into String type
*/


let s1="Hello"+"All";
console.log(s1);//HelloAll
console.log(typeof s1);//string

let s2="Hello"+100;//100 which is number is coerced into string
console.log(s2);//Hello100
console.log(typeof s2);//string

let s3="100"+200+30;//200 and 30 get coerced into String
console.log(s3);//10020030
console.log(typeof s3);//string

let s4=500+200+"60";//500+200=700-->"700"+"60"="70060"
console.log(s4);//70060
console.log(typeof s4);//string

let s5=10+"100"+70;//10 and 70 coerced into string
console.log(s5);//1010070
console.log(typeof s5);//string


let s6=true+"90";//true is coerced into String
console.log(s6);//true90
console.log(typeof s6);//string

console.log("-----number coercion-------");
/*
In Expression if any convertable string along with other arithemetic operators
(*,/,-) then string will coerced into number
*/

let n1="Hello"-70;
console.log(n1);//NaN
console.log(typeof n1);//number

let n2="100"/10;//"100" will coerced into number 100/10=10
console.log(n2);//10
console.log(typeof n2);//number

let n3=200+30-"100";//200+30=230 then "100"-->100=230-100=130
console.log(n3);//130
console.log(typeof n3);//number

let n4=10*10*"10";//"10" will coerced into number
console.log(n4);//1000
console.log(typeof n4);//number

let n5=true-"90";//"90" & true will coerced into number 1-90=-89
console.log(n5);//-89
console.log(typeof n5);//number

console.log("------Explicit Casting----------");

//string to number:Number()
let ss1="1000";
console.log(ss1+200);//1000200
console.log(typeof ss1);//string

let num1=Number(ss1);//number constructor
console.log(num1);//1000
console.log(typeof num1);//number
console.log(num1+200);//1200

console.log("---------------");
//number to string:String()

let num2=800;

let ss2=String(num2);
console.log(ss2);//"800"
console.log(typeof ss2);//string

console.log("-------Real use case on Type casting----------");

/*Use Case:
validate bill amount
bill:"Your amount is 5000"
Validate amount is less that 10000
*/

let bill="Your amount is 5000";
        //0      1     2   3
let data=bill.split(" ")[3];//"5000"
console.log(typeof data);//string
//"5000"---->5000
let amount=Number(data);//5000

if(amount<10000)
{
    console.log("Amount is valid ....Test Pass!");
    
}else{
       
    console.log("Amount is not valid ....Test Fail!");

}

console.log("------Number()------------");

console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(Number(""));//0

console.log("------Boolean Conversion----------");
/*
Truthy value vs Falsy value
--------------------------------
Truthy
========
Any true value in boolean context is called truthy
Example'
---------
nonZero number,nonempty string


Falsy
===========
Any false value in boolean context is called falsy value
Example:
----------
0,"",NaN,null,undefined
*/


console.log(Boolean("Jay"));//true
console.log(Boolean(190));//true
console.log(Boolean(-190));//true
console.log(Boolean(56.77));//true

console.log("------------");

console.log(Boolean(0));//false
console.log(Boolean(""));//false
console.log(Boolean(NaN));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false






























