
/*
Array
===========
- Array is dynamic data structure in Javascript
- Array is Dynamic Object
- Array stores element based on indexing (starts with 0)

Types
===========
1.Single dimension/1D array
2.Multi dimensiion/ 2D array

Syntax
==========
let arrayvariable=[ele1,ele2,ele3]

Property
------------
length

Note:
---------------
In Javscript array support multiple Methods

push(),unshift(),shift(),pop(),slice(),splice(),join(),reverse(),map(),filter(),reduce()

Array Iteration
-----------------
1.simple for loop
2.for...of loop
3.for...in loop


Array Declaration
=======================
1.Using literal
2.using Array constructor
3.Array.of()
*/

console.log("-----------Array Literal--------");

let number=[10,20,30,40,50];
console.log(number);
console.log(number.length);//5
//to get single value from array
console.log(number[2]);//30
//wrong index
console.log(number[-1]);//undefined

//mix type of array
let stdData=["Poonam","Delhi",20,'F',89.77,9798798789];
console.log(stdData);

console.log(stdData[4]);//89.77

console.log("-----------Array constructor----------");

let location=new Array("Pune","Mumbai","Delhi");
console.log(location);
console.log(location.length);//3


let sid=new Array(11,12,13,14,15);
console.log(sid);
console.log(sid.length);//5

//positive interger
let marks=new Array(10);//here 10 will store as length of this array
console.log(marks);//[ <10 empty items> ]
console.log(marks.length);//

let fname=new Array("Rushikesh");
console.log(fname);
console.log(fname.length);
/*
//for negative number
let n1=new Array(-7);//RangeError: Invalid array length
console.log(n1);
console.log(n1.length);

let n2=new Array(78.66);//RangeError: Invalid array length
console.log(n2);
*/

console.log("--------Array.of()---------------");


let num=Array.of(1,2,3,4,5,6,7);
console.log(num);
console.log(num.length);
console.log(num[3]);//4


console.log("---------Multiple D Array------------");

let credentials=[
                ["Admin","admin123"],
                ["Amit","amit123"],
                ["Sneha","sneha123"],
                ["Kiran","kiran123"]
                ]

console.log(credentials);
console.log(credentials[2]);//[ 'Sneha', 'sneha123' ]

console.log(credentials[1][0]);//Amit
console.log("Row length: "+credentials.length);//4
//row--->cell-->value
console.log("Columns length: "+credentials[0].length);//2












let matrix=[ 
    [ 'Sneha', 10 ],
    [ 'Ram', 20 ],
     [ 'Ketan', 30 ],
    [ 'keshav', 40 ] 
]

console.log(matrix);



















