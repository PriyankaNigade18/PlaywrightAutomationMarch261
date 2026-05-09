





import {test,expect} from "@playwright/test";

test("Test for Title and Url validation",async({page})=>{

    //open application
     await page.goto("https://www.google.com/",{waitUntil:"load"});

    //get the title and store it and validate 
    let appTitle:string=await page.title();
    console.log("Application title is: "+appTitle);


    //page level assertion
    //validate that title is Google
    await expect(page).toHaveTitle("Google");//full assertion
    //await expect(page).toHaveTitle("Google123");
    /*
    Error: expect(page).toHaveTitle(expected) failed

    Expected: "Google123"
    Received: "Google"
    Timeout:  5000ms

    */
    console.log("Application title validated!");
    
//get the url and store it and validate
let appUrl:string=page.url();
console.log("Application url is: "+appUrl);

//page level assertion
await expect(page).toHaveURL("https://www.google.com/")//full match
console.log("Application url validated!");


//partial match: url must have google.com: /partial text/
await expect(page).toHaveURL(/google.com/);
console.log("Application partial url validated!");




    





})