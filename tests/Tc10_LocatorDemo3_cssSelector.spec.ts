

import {test,expect} from "@playwright/test"

test("Test for CssSelector symbols",async({page})=>{

//open application
await page.goto("https://www.amazon.in/",{waitUntil:'load'});

await page.waitForTimeout(2000);

//search box cssSelector with *
await page.locator("input[id*='searchtext']").pressSequentially("watch",{delay:500});
//press Enter key from keyword
await page.locator("input[id*='searchtext']").press('Enter');

//searchBox cssSlector with ^: clear the previous written text:clear():Clear the input field.
await page.locator("input[id^='two']").clear();

await page.waitForTimeout(1000);

//searchBox cssSelector with $:search for bags
await page.locator("input[id$='textbox']").fill("mobile");
await page.locator("input[id$='textbox']").press('Enter');

await page.waitForTimeout(2000);
})
