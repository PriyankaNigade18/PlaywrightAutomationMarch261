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

//Print Hello statement 5 times

for(let i=1;i<=5;i++)
{
    console.log("Hello");
    
}

console.log("----------------");

//print 1 to 10 numbers

for(let i=1;i<=10;i++)
{
    console.log(i);
    
}

console.log("----------------");
//print 10 to 1 numbers

for(let i=10;i>=1;i--)
{
    console.log(i);
    
}

console.log("----------------");

//factorial of 5!=5*4*3*2*1=120

let fact=1;

for(let i=5;i>=1;i--)
{
 fact=fact*i;
}

console.log("Factorial of 5 : "+fact);

console.log("----------------");

//sum of 100 naturals number=5050
//1+2+3+4.....+100=5050
let sum=0;
for(let i=1;i<=100;i++)
{
sum=sum+i;
}

console.log("Sum of 100 natural numbers are: "+sum);

console.log("----------------");
/*By default for loop condition is always true
so code will execute infinite time.

for(;;)
{
    console.log("Hi");
    
}
*/












