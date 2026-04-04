/*
Every function occupied memory from Heap memory and executed throught stack-->execution stack
*/

function testing()
{
    console.log("Testing is calling......");
    dev();
    
}

function dev()
{
    console.log("Development is calling....");
    testing();
}

//testing();
//dev();

//RangeError: Maximum call stack size exceeded

/*
Recursive function: when function is calling itself is called 
recursion function

Playwright we avoid recursion function

*/


function login()
{
    console.log("Hello.....");
   // login();RangeError: Maximum call stack size exceeded
    
}

login();





