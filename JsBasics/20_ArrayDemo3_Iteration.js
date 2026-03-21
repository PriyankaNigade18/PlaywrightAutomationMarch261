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


Array Declaration
=======================
1.Using literal
2.using Array constructor
3.Array.of()

Array Iteration
-----------------
1.simple for loop

2.for...of loop
-------------
- Ietrates over values
- applicable for array/string

3.for...in loop
------------------
-Iterates over index/keys
-applicable for Object

*/

let id=[101,102,103,104,105];
console.log(id);

console.log("--------Simple for loop---------");

for(let i=0;i<id.length;i++)
{
console.log(id[i]);

}

console.log("--------for...of loop---------");
/*
2.for...of loop
-------------
- Ietrates over values
- applicable for array/string
*/
for(let i of id)
{
    console.log(i);
    
}

console.log("--------for...in loop---------");
/*
3.for...in loop
------------------
-Iterates over index/keys
-applicable for Object
*/

for(let i in id)
{
    console.log(i);
    
}

console.log("------------");

for(let i in id)
{
    console.log(id[i]);
    
}
console.log("------------");

for(let i in id)
{
    console.log("at index: "+i+" value is: "+id[i]);
    
}


