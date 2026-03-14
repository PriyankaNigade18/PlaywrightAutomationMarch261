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

//print Hello statment 5 times

let i=1;
while(i<=5)
{
    console.log("Hello");
    i++;
}

console.log("--------------------");

//sum of digits of number num=1234 sum=10


let num=1234,rem,sum=0;


while(num>0)
{
    rem=num%10;
    num=Math.floor(num/10);
    sum=sum+rem;
}

console.log("Sum of digits for 1234: "+sum);

    







