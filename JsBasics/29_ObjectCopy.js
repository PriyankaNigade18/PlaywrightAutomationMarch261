/*
...Spread operator
--------------------
Applicable for Array/Object and function
copy of array/ copy of object 
for function we can pass n number parameter using ...spread operator

*/

let num1=[1,2,3,4,5];
let num2=[...num1];//copied num1 array into num2

console.log(num1);
console.log(num2);


let u1={
    name:"Seema",
    location:"Pune"
}

let u2={...u1}//copied object1 u1 into u2
console.log(u1);
console.log(u2);
console.log("------------");

//after copy two objects will create in memory
//modify 
u2.name="Akhil";

console.log(u1);
console.log(u2);







