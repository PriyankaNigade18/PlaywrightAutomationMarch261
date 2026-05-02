/*
In Js and Ts we have predefined Error interface

Error is any unwanted situation or wrongly written code 
and becauseof that execution intruptted

Error handling is important

we can use try-catch block 
we can use finally block

we can throw error also in logic/code



*/

function div(a:number,b:number):number{

    if(b===0)
    {
        //error 
        throw new Error("Cannot devide by 0");
    }else
    {
        return a/b;
    }

}

console.log(div(10,2));

//console.log(div(10,0));//throw error



//how to handle any error 

function parsing():void
{
    try{
        let result=JSON.parse("hi hello");//not valid json
        console.log(result);
    }catch(error)
    {
        console.log("Please provide valid Json string otherwise "+error);
        
    }



}

//call
parsing();//SyntaxError: Unexpected token 'h', "hi hello" is not valid JSON

console.log("done!");


console.log("------");
/*
Finally block
------------------
Finally block always executed with or without Error
Any special code we can execute using finally block

*/


function division(a:number,b:number){
try{


    if(b===0)
    {
        //error 
        throw new Error("Cannot devide by 0");
    }else
    {
        return a/b;
    }

}catch(error)
{
console.log("Please Provide other number than 0");

}
finally{
    console.log("Finally block called.....");
    
}
}

console.log(division(100,15));
//console.log(division(100,0));//undefined
division(100,0);

console.log("-----------");

//how to create custom error class?

class BrowserError extends Error {
    constructor(message:string)
    {
        super(message);
    }
}

//scenario: error should appear for Wrong browserName

//let bname="chrome";valid result
let bname="opera";

switch (bname) {
    case "chrome":
        console.log("Open Chrome");
          break;

    default:
        throw new BrowserError("======Invalid Browser=====");
        break;
}









