

import {test,expect, Locator} from "@playwright/test"


test("Test for Xpath Methods",async({page})=>{

//open application
await page.goto("https://www.amazon.in/");

//click on Mobiles link: text()
await page.locator("//a[text()='Mobiles']").click();

//click on cart: normalize-space()
await page.locator("(//span[normalize-space()='Cart'])[2]").click();

//contains+normalize-space()
let cartMessage=await page.locator("//h3[contains(normalize-space(),'Amazon Cart')]").innerText();
console.log("Cart message is: "+cartMessage);

//searchbox: contains()
await page.locator("//input[contains(@id,'searcht')]").fill("bags");
//press Enter key
await page.locator("//input[contains(@id,'searcht')]").press('Enter');

await page.waitForTimeout(1000);

//searchbox: starts-with()
let searchBox:Locator=page.locator("//input[starts-with(@id,'two')]");
//clear the searchbox
await searchBox.clear();

//type laptop
await searchBox.fill("laptops")

//press Enter
await searchBox.press('Enter');



await page.waitForTimeout(2000);

})