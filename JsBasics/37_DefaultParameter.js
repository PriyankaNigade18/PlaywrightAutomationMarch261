/**
 * 
 * @param {string} name 
 */

function greet(name="Priyanka")
{
console.log("Hello...."+name);

}

greet("Praneeth");
greet();

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

function launchBrowser(bname="chrome")
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
            console.log("Invalid browser...so Launching default browser Chrome");
            return true;
            break;
    }
}

//call
let isBrowserLaunch=launchBrowser("Opera");

//true
if(isBrowserLaunch)
{
    console.log("Enter URL of application....");
    
}