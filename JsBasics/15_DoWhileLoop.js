/*
1.for loop
-----------------
- Number of iterations are firxed

scenarios:
---------
-dropdown
-calendar number of days

2.while loop
----------------
- Entry control loop
- Number of iterations are not fixed

Scenarios:
-----------------
-pagination of table
-page load timeout

3. do-while loop
-------------------------
- Exit control loop
- One time execution without matter condition is true or false

4.for...of loop
-----------------------
- Iterates over values
- It is applicatble for array and string

5.for...in loop
------------------------
-Iterates over keys and indexing
- It is applicable for Object


*/

//print Hello statement 5 time

let i=1;

do{
    console.log("Hello");
    i++;
    
}while(i<=5);

console.log("-------------");


let j=1;

do{
    console.log("Welcome!");
    j++;
    
}while(j===5);
console.log("-------------");

// let k=1;

// do{
//     console.log("Welcome!");
  
// }while(k<=5);