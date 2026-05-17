

import {test,expect} from "@playwright/test"

test("Test for Xpath operators and Indexing",async({page})=>{

//open application
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

//firstname: xpath with and operator
await page.locator("//input[@name='firstname' and @class='form-control']").fill("Suman");

//lastname: xpath with or Operator
await page.locator("//input[@name='lastname' or @class='form-contro']").fill("Shinde");

//Dynamic Email
let email="suman"+new Date().getTime()+"@gmail.com";

//email: xpath with indexing
await page.locator("(//input[@class='form-control'])[3]").fill(email);

//telephone: xpath with position()
await page.locator("(//input[@class='form-control'])[position()=4]").fill("65786876");

//password
await page.locator("(//input[@class='form-control'])[position()=5]").fill("test123");

//confirmpassword
await page.locator("(//input[@class='form-control'])[6]").fill("test123");

//yes radio button
await page.locator("(//input[@name='newsletter'])[1]").check();

//checkbox
await page.locator("//input[@name='agree']").check();

//continue
await page.locator("//input[@value='Continue']").click();

//success message
let message=await page.locator("(//h1)[2]").innerText();
console.log("Success Message is: "+message);

//assert :Your Account Has Been Created!
await expect(page.locator("(//h1)[2]")).toHaveText("Your Account Has Been Created!");


await page.waitForTimeout(2000);

})