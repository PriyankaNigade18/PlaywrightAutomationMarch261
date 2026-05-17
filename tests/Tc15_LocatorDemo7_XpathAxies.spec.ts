
import {test,expect} from "@playwright/test"

test("Test for Xpath axies",async({page})=>{


//open application
await page.goto("https://automationplayground.com/crm/customers.html?email-name=sdasdsd%40gmail.com&password-name=scascas&submit-name=");

/*
highlight():Highlight the corresponding element(s) on the screen. Useful for debugging
*/
//scenario: find the ancestor node for John
await page.locator("//td[text()='John']//ancestor::tbody").highlight();

await page.waitForTimeout(1500);

//scenario: find the parent node for John
await page.locator("//td[text()='John']//parent::tr").highlight();

//scenario: Find all number child from row 4

page.locator("//tbody//tr[4]//child::td")



await page.waitForTimeout(2000);


})
