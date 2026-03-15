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

let arr=[];
console.log(arr);//[]
console.log(typeof arr);//object
console.log(arr.length);//0


console.log("------Array Literal way--------");

//similar type of element
let sid=[101,102,103,104,105];
console.log(sid);//[ 101, 102, 103, 104, 105 ]
        //index:     0     1     2   3    4

//length
console.log("Total ids are: "+sid.length);//5
        
//single entry
console.log(sid[3]);//104
//for wrong index
console.log(sid[7]);//undefined
//for negative index
console.log(sid[-1]);//undefined


console.log('------------------');

//mix type of elements in array
let empData=["Sarang","Pune",30,'M',89.76756,99879868];
console.log("Employee data length: "+empData.length);//6

console.log(empData);//[ 'Sarang', 'Pune', 30, 'M', 89.76756, 99879868 ]

console.log("------Array Constructor--------");

let id=new Array(10,20,30,40,50);
console.log(id);

//length
console.log(id.length);//5


//single entry
console.log(id[2]);//30

console.log(id[9]);//undefined

console.log("--------");
/*
Whenever we provide one entry into Array constructor
then this will be consider as size of array
*/
let arr1=new Array(5);//here 5 is size
console.log("length is: "+arr1.length);//5
console.log(arr1);//[ <5 empty items> ]















