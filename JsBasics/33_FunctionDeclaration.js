/*
Functions in Js
------------------
1.Function declaration
2.Function Expression
    2.1: Anonymous function
    2.2: Arrow function
*/

console.log("------Function without parameter------");

function show()
{
    console.log("Show(): Function declaration is calling...");
    

}

console.log(typeof show);//function


//call the function
show();

console.log("------Function with parameter------");
/*
Parameters: refer variable
Arguments: refer real values/data
*/


//js documentation
/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function addition(a,b)//2 parameter function
{
console.log("Addition is: "+(a+b));

}

//call
addition(10,20);
addition('Hi',"Hello");
addition(100,"hello");

console.log("------Function with parameter and return keyword------");
/*
-Any value if you wanted to return from function then we use return keyword
-return keyword return result to calling function
- return can retun at a time only one value
- return statement should be last statement of function
*/

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function subtraction(a,b)
{
    
    return a-b;

}

//call
let result=subtraction(100,30);
console.log("subtraction is: "+result);

//or
console.log("Subtraction is: "+subtraction(200,100));

console.log("-------------");

/*
Scenario: Design a function which accept browsername as parameter
compare it with [chrome/edge/firefox]and return the valuesas boolean
valid:true invalid :false

then launch application for valid browser
*/
/**
 * 
 * @param {string} bname 
 */

function launchBrowser(bname)
{
    switch (bname.toLowerCase().trim()) {
        case "chrome":
            console.log("Launch Chrome Browser");
            return true;
            break;
        case "edge":
            console.log("Launch Edge Browser");
            return true;
            break;
        case "firefox":
            console.log("Launch Firefox Browser");
            return true;
            break;
    
        default:
            console.log("Invalid browser...");
            return false;
            break;
    }
}

//call
let isBrowserLaunch=launchBrowser("Safari");

//true
if(isBrowserLaunch)
{
    console.log("Enter URL of application....");
    
}



