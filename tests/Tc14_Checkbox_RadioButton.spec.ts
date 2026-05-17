
import {test,expect} from "@playwright/test"


/*
1.first():
Returns locator to the first matching element.

2.last():
Returns locator to the last matching element.

3.nth(index):
Returns locator to the n-th matching element. 
It's zero based, nth(0) selects the first element.

*/

test("Test for radio button  ",async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/form");

    //first()
    await page.locator("//input[@type='radio']").first().click();

    //last()
    await page.locator("//input[@type='radio']").last().click();

    //middle: nth(index)
    await page.locator("//input[@type='radio']").nth(1).click();

await page.waitForTimeout(2500);

})