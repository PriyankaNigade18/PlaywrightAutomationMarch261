

import {test,expect} from "@playwright/test"

test("Test for navigation methods",async({page})=>{

    //open application
    await page.goto("https://www.google.com/");
    console.log("Title is: "+await page.title());

    //static wait :Waits for the given timeout in milliseconds.
    await page.waitForTimeout(1000);

    //navigate to facebook
    await page.goto("https://www.facebook.com/");
    console.log("Title is: "+await page.title());

    await page.waitForTimeout(1000);

    //navigate back
    await page.goBack();
    console.log("Title is: "+await page.title());

    await page.waitForTimeout(1000);

    //navigate forward
    await page.goForward();
    console.log("Title is: "+await page.title());

    await page.waitForTimeout(1000);

    //refresh the webpage
    await page.reload();
    console.log("Title is: "+await page.title());

    await page.waitForTimeout(2000);
    
})