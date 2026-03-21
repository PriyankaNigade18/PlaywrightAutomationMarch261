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


//Methods
--------------
1.Push(): add element at the last
2.unshift(): add elements at the begining
3.pop(): remove element from last
4.shift(): remove element from begining
5.reverse(): to reverse array element
6.join():join the array element
7.(...spred operator): for copy array elements
8.concat():combine two or more array

*/


let color=["Red","Blue","Yellow","Green"];

console.log(color);
console.log(color.length);//4


//push():Appends new elements to the end of an array, and returns the new length of the array.
color.push("Black");
console.log(color);
console.log(color.length);//5

color.push("Pink","Grey");
console.log(color);
console.log(color.length);//7

//unshift():Inserts new elements at the start of an array, and returns the new length of the array.
color.unshift("White");
console.log(color);
console.log(color.length);//8

//pop():Removes the last element from an array and returns it
let removedColor1=color.pop();
console.log(removedColor1);//Grey
console.log(color);
console.log(color.length);//7

//shift():Removes the first element from an array and returns it. 
let removedColor2=color.shift()
console.log(removedColor2);//White
console.log(color);
console.log(color.length);//6

//join():Adds all the elements of an array into a string, separated by the specified separator string.
let words=["Hello","everyone","lets","learn","Javascript"];
console.log(words);

let sentence=words.join(" ");
console.log(sentence);

//reverse():Reverses the elements in an array in place.
console.log(color);
console.log(color.reverse())

//Copy elements from array:(... Spread operator)
let first=[1,2,3,4];
console.log(first);
let second=[...first];//copy first array elements into second array
console.log(second);
let third=[10,20,...first];
console.log(third);
let forth=[10,...first,20];
console.log(forth);
console.log("---------------");

let arr1=[1,2,3,4,5];
console.log(arr1);

let arr2=[6,7,8];
console.log(arr2);

let arr3=[...arr1,...arr2];
console.log(arr3);

//concat():Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let resultArr=arr1.concat(arr2)
console.log(resultArr);




















