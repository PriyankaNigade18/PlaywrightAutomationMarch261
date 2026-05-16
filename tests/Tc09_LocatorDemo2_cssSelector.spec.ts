
/*
Assertion
-----------
To validate current state of the application we add assertions in test

Playwright support two types assertion
--------------------------------------
1.Hard Assertion
2.Soft Assertion

Playwright support autowait for assertion: 5sec

1.Hard Assertion
-----------------
-When Assertion fail test will stop on that line itself and remaining steps will not be execute
and you will get Error which is assertion error
-As soon as assertion fail playwright waits for 5sec and after 5sec you will get that error
-By default assertions are hard assertion
Syntax
-----------
expect()

2.Soft Assertion
------------------------
-When assertion fail test execution will continue and in console you will get Error assertion error

Syntax
---------------
expect.soft()

*/


import {test,expect} from "@playwright/test"

test("Test for CssSelector locator",async({page})=>{

    //open application
    await page.goto("https://automationplayground.com/crm/");

    //Sign In link
    await page.locator("a#SignIn").click();

    //on navigation for next page url we can wait
    //WaitForUrl():Waits for the main frame to navigate to the given URL.
    await page.waitForURL("https://automationplayground.com/crm/login.html");

    //assertion on next page Url/title
    /*
    For URL Test
    toHaveURL():Ensures the page is navigated to the given URL.
    */
    await expect(page).toHaveURL("https://automationplayground.com/crm/login.html");//full match

    //partial test
    await expect(page).toHaveURL(/login/);

    //toHaveTitle():Ensures the page has the given title.
    await expect(page).toHaveTitle("Customer Service - Login");//full match

    //partial match
    await expect(page).toHaveTitle(/Login/);

    //emailAddress tagname with id
    await page.locator("input#email-id").fill("test@gmail.com");

    //password tagname with attribute
    await page.locator("input[type='password']").fill("test123");

    //checkbox tagname with id
    await page.locator("input#remember").check();

    await page.waitForTimeout(1000);
    await page.locator("input#remember").uncheck();

    await page.waitForTimeout(1000);
    await page.locator("input#remember").click();

    //Submit  tagname with className
    //await page.locator("button.btn-primary").click();
    
    //Submit tagname with id,classname,attribute
    await page.locator("button#submit-id.btn[name='submit-name']").click();

    //get the element text: xpath: //tagname[@attribute='value']
    //
    let text1:string|null=await page.locator("//h2").textContent();
    console.log("Text is: "+text1);
    
    //recommended method to get the text of any element: innerText()
    let text2:string=await page.locator("//h2").innerText();
    console.log("Text is: "+text2);
    
    //assert the text: element should have text:  Our Happy Customers
    await expect(page.locator("//h2")).toHaveText("Our Happy Customers");



//static wait
await page.waitForTimeout(2000);
})




