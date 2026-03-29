/*
Functions in Js
------------------
1.Function declaration
2.Function Expression
    2.1: Anonymous function
    2.2: Arrow function
*/


console.log("-----function declaration------");

//function definition
function test1()
{
    console.log("test1() function is calling.....");
    
}

//call
test1();

console.log("-----Anonymous function------");
//Function without name is called Anonymous function

let test2=function()
        {

            console.log("test2() Anonymous function is calling......");
            
        }


//call
test2();

console.log("-----Arrow function------");
let test3=()=>{console.log("Arrow function is calling....");};

//call
test3();
