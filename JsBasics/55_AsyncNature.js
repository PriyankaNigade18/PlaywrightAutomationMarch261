


//Synchronus: one task at a time
for(let i=1;i<=5;i++)
{
    console.log(i);
    
}

console.log("-----------------");

//Asynchronus: task which need some time to finish

console.log("Program started.....");

setTimeout(() => {
    console.log("HelloAll!");
    }, 3000);

console.log("Program ends....");

console.log("-----------------");


//API
// let response=fetch("https://restful-booker.herokuapp.com/booking");
// console.log(response);//Promise { <pending> }

/*Solution
------------
-to handle promise create async method and 
the statement which returns promise use await before that statement
-Any method design with async keyword will become asynchronus method

*/

async function apiTest()
{
let response=await fetch("https://restful-booker.herokuapp.com/booking");
console.log(response);

}

//call

apiTest();

import {readFile} from "fs/promises"
//file reading scenario

// let data=readFile("./JsBasics/Test.txt","utf-8");
// console.log(data);//Promise { <pending> }

async function readFileData()
{
let data=await readFile("./JsBasics/Test.txt","utf-8");
console.log(data);
}

readFileData();