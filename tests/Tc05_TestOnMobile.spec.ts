

//we can run test case on mobile emulator supported by playwright

import{test} from "@playwright/test";

test("Test for Mobile viewPort",async({page})=>{

await page.goto("https://www.flipkart.com/");

let appTitle:string=await page.title();
console.log("Application title is: ",appTitle);

await page.waitForTimeout(2000);
})